import { MESSAGES_BEFORE_LOGIN, RATE_LIMIT } from "$env/static/private";
import { authCondition, requiresUser } from "$lib/server/auth";
import { collections } from "$lib/server/database";
import { models } from "$lib/server/models";
import { ERROR_MESSAGES } from "$lib/stores/errors";
import type { Message } from "$lib/types/Message";
import { error } from "@sveltejs/kit";
import { ObjectId } from "mongodb";
import { z } from "zod";
import type { MessageUpdate } from "$lib/types/MessageUpdate";
import { runWebSearch } from "$lib/server/websearch/runWebSearch";
import { abortedGenerations } from "$lib/server/abortedGenerations";
import { summarize } from "$lib/server/summarize";
import { uploadFile } from "$lib/server/files/uploadFile";
import sizeof from "image-size";
import { convertLegacyConversation } from "$lib/utils/tree/convertLegacyConversation";
import { isMessageId } from "$lib/utils/tree/isMessageId";
import { buildSubtree } from "$lib/utils/tree/buildSubtree.js";
import { addChildren } from "$lib/utils/tree/addChildren.js";
import { addSibling } from "$lib/utils/tree/addSibling.js";
import { preprocessMessages } from "$lib/server/preprocessMessages.js";
import { OpenAIEmbeddings } from "@langchain/openai";
import { Pinecone } from "@pinecone-database/pinecone"; 

export async function POST({ request, locals, params, getClientAddress }) {
	const id = z.string().parse(params.id);
	const convId = new ObjectId(id);
	const promptedAt = new Date();

	const userId = locals.user?._id ?? locals.sessionId;

	// check user
	if (!userId) {
		throw error(401, "Unauthorized");
	}

	// check if the user has access to the conversation
	const convBeforeCheck = await collections.conversations.findOne({
		_id: convId,
		...authCondition(locals),
	});

	if (convBeforeCheck && !convBeforeCheck.rootMessageId) {
		const res = await collections.conversations.updateOne(
			{
				_id: convId,
			},
			{
				$set: {
					...convBeforeCheck,
					...convertLegacyConversation(convBeforeCheck),
				},
			}
		);

		if (!res.acknowledged) {
			throw error(500, "Failed to convert conversation");
		}
	}

	const conv = await collections.conversations.findOne({
		_id: convId,
		...authCondition(locals),
	});

	if (!conv) {
		throw error(404, "Conversation not found");
	}

	// register the event for ratelimiting
	await collections.messageEvents.insertOne({
		userId,
		createdAt: new Date(),
		ip: getClientAddress(),
	});

	const messagesBeforeLogin = MESSAGES_BEFORE_LOGIN ? parseInt(MESSAGES_BEFORE_LOGIN) : 0;

	// guest mode check
	if (!locals.user?._id && requiresUser && messagesBeforeLogin) {
		const totalMessages =
			(
				await collections.conversations
					.aggregate([
						{ $match: { ...authCondition(locals), "messages.from": "assistant" } },
						{ $project: { messages: 1 } },
						{ $limit: messagesBeforeLogin + 1 },
						{ $unwind: "$messages" },
						{ $match: { "messages.from": "assistant" } },
						{ $count: "messages" },
					])
					.toArray()
			)[0]?.messages ?? 0;

		if (totalMessages > messagesBeforeLogin) {
			throw error(429, "Exceeded number of messages before login");
		}
	}

	// check if the user is rate limited
	const nEvents = Math.max(
		await collections.messageEvents.countDocuments({ userId }),
		await collections.messageEvents.countDocuments({ ip: getClientAddress() })
	);

	if (RATE_LIMIT != "" && nEvents > parseInt(RATE_LIMIT)) {
		throw error(429, ERROR_MESSAGES.rateLimited);
	}

	// fetch the model
	const model = models.find((m) => m.id === conv.model);

	if (!model) {
		throw error(410, "Model not available anymore");
	}

	// finally parse the content of the request
	const json = await request.json();

	const {
		inputs: newPrompt,
		id: messageId,
		is_retry: isRetry,
		is_continue: isContinue,
		web_search: webSearch,
		files: b64files,
	} = z
		.object({
			id: z.string().uuid().refine(isMessageId).optional(), // parent message id to append to for a normal message, or the message id for a retry/continue
			inputs: z.optional(z.string().trim().min(1)),
			is_retry: z.optional(z.boolean()),
			is_continue: z.optional(z.boolean()),
			web_search: z.optional(z.boolean()),
			files: z.optional(z.array(z.string())),
		})
			.parse(json);
	
	
	const embeddings = new OpenAIEmbeddings({
		azureOpenAIApiKey: process.env.AZURE_OPENAI_API_KEY || 'da747f09fb1b44658b577fb8ea7cce1c', // Ensure this is set in your environment variables
		azureOpenAIApiVersion: "2024-02-15-preview", // Make sure this version is correct and supported
		azureOpenAIApiInstanceName: "caniel-rag-chatbot-ncs", // This should match your Azure OpenAI instance name
		azureOpenAIApiDeploymentName: "caniel-text-embeddings-model-ada-002", // This should match your deployment name
		azureOpenAIBasePath: "https://caniel-rag-chatbot-ncs.openai.azure.com/openai/deployments", // Do not include the deployment name here
	});

	const apiKey = process.env.PINECONE_API_KEY || "4e7a2c87-9b9c-43f7-b4eb-696678b27f6e";
	// const environment = process.env.PINECONE_ENVIRONMENT || "YOUR_ENV";

	const pinecone = new Pinecone({
		apiKey,
	});
	const index = pinecone.index("caniel-rag-chat-bot-ada-002");

	const vectorizedInput = await embeddings.embedQuery(newPrompt || '');

	const namespaces = ["BPVC_II_D_C-2023", "BPVC_V-2023", "API_579_2007", "BPVC_VIII_2-2023", "BPVC_VIII_1-2023", "B31_3_2022_w_ERRATAS", "BPVC_I-2023", "B31_1_2022", "BPVC_IX-2023", "B31.12-2019_wErrata", "BPVC_IV-2023", "ExampleProblemManual2009", "BPVC_XIII-2023", "API_510_E11_EN_wE1"]
	
	let bestScore = 0;
	let bestResponse = null;

	for (const ns of namespaces) {
		const response = await index.namespace(ns).query({
			vector: vectorizedInput,
			topK: 5,
			includeMetadata: true
		});

		if (response.matches && response?.matches[0]?.score > bestScore) {
			bestScore = response.matches[0].score;
			bestResponse = response;
		}
	}

	let enrichedPrompt = newPrompt;

	if (bestResponse && bestResponse.matches.length > 0) {
		if (bestResponse.matches[0].score >= 0.85) {
			// const knowledgeBaseInfo = bestResponse.matches[0].metadata?.text_chunk;
			// enrichedPrompt += `\n Context: ${knowledgeBaseInfo}`;
			// Iterate over each match in the bestResponse.matches array
			let concatenatedTextChunks = ''
			bestResponse.matches.forEach(match => {
				if (match?.metadata?.text_chunk) {
					concatenatedTextChunks += match.metadata.text_chunk + " "; // Adding a space for separation
				}
			});

			if (concatenatedTextChunks) {
				enrichedPrompt += `\n Context: ${concatenatedTextChunks.trim()}`;
			}
		}
	}

	// files is an array of base64 strings encoding Blob objects
	// we need to convert this array to an array of File objects

	const files = b64files?.map((file) => {
		const blob = Buffer.from(file, "base64");
		return new File([blob], "image.png");
	});

	// check sizes
	if (files) {
		const filechecks = await Promise.all(
			files.map(async (file) => {
				const dimensions = sizeof(Buffer.from(await file.arrayBuffer()));
				return (
					file.size > 2 * 1024 * 1024 ||
					(dimensions.width ?? 0) > 224 ||
					(dimensions.height ?? 0) > 224
				);
			})
		);

		if (filechecks.some((check) => check)) {
			throw error(413, "File too large, should be <2MB and 224x224 max.");
		}
	}

	let hashes: undefined | string[];

	if (files) {
		hashes = await Promise.all(files.map(async (file) => await uploadFile(file, conv)));
	}

	// we will append tokens to the content of this message
	let messageToWriteToId: Message["id"] | undefined = undefined;
	// used for building the prompt, subtree of the conversation that goes from the latest message to the root
	let messagesForPrompt: Message[] = [];

	if (isContinue && messageId) {
		// if it's the last message and we continue then we build the prompt up to the last message
		// we will strip the end tokens afterwards when the prompt is built
		if ((conv.messages.find((msg) => msg.id === messageId)?.children?.length ?? 0) > 0) {
			throw error(400, "Can only continue the last message");
		}
		messageToWriteToId = messageId;
		messagesForPrompt = buildSubtree(conv, messageId);
	} else if (isRetry && messageId) {
		// two cases, if we're retrying a user message with a enrichedPrompt set,
		// it means we're editing a user message
		// if we're retrying on an assistant message, enrichedPrompt cannot be set
		// it means we're retrying the last assistant message for a new answer

		const messageToRetry = conv.messages.find((message) => message.id === messageId);

		if (!messageToRetry) {
			throw error(404, "Message not found");
		}

		if (messageToRetry.from === "user" && enrichedPrompt) {
			// add a sibling to this message from the user, with the alternative prompt
			// add a children to that sibling, where we can write to
			const newUserMessageId = addSibling(conv, { from: "user", content: enrichedPrompt }, messageId);
			messageToWriteToId = addChildren(
				conv,
				{ from: "assistant", content: "", files: hashes },
				newUserMessageId
			);
			messagesForPrompt = buildSubtree(conv, newUserMessageId);
		} else if (messageToRetry.from === "assistant") {
			// we're retrying an assistant message, to generate a new answer
			// just add a sibling to the assistant answer where we can write to
			messageToWriteToId = addSibling(conv, { from: "assistant", content: "" }, messageId);
			messagesForPrompt = buildSubtree(conv, messageId);
			messagesForPrompt.pop(); // don't need the latest assistant message in the prompt since we're retrying it
		}
	} else {
		// just a normal linear conversation, so we add the user message
		// and the blank assistant message back to back
		const newUserMessageId = addChildren(
			conv,
			{
				from: "user",
				content: enrichedPrompt ?? "",
				files: hashes,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			messageId
		);

		messageToWriteToId = addChildren(
			conv,
			{
				from: "assistant",
				content: "",
				createdAt: new Date(),
				updatedAt: new Date(),
			},
			newUserMessageId
		);
		// build the prompt from the user message
		messagesForPrompt = buildSubtree(conv, newUserMessageId);
	}

	const messageToWriteTo = conv.messages.find((message) => message.id === messageToWriteToId);
	if (!messageToWriteTo) {
		throw error(500, "Failed to create message");
	}
	if (messagesForPrompt.length === 0) {
		throw error(500, "Failed to create prompt");
	}

	// update the conversation with the new messages
	await collections.conversations.updateOne(
		{
			_id: convId,
		},
		{
			$set: {
				messages: conv.messages,
				title: conv.title,
				updatedAt: new Date(),
			},
		}
	);

	let doneStreaming = false;

	// let generatedSummarizeText = ''

	// try {
	// 	// Assume `getSummary` is a method that uses your LLM to summarize content
	// 	const summarizedContent = messagesForPrompt.map(m => m.content).join(' ');
	// 	const payload = [
	// 		{
	// 			from: 'user',
	// 			content: summarizedContent,
	// 		}]
		
	// 	console.log('payload', payload)

	// 	// Now `summarizedContent` is what you want to send to your LLM for generating the next message
	// 	const endpoint = await model.getEndpoint();
	// 	const response = await endpoint({
	// 		messages: payload, // Using summarized content
	// 		preprompt: 'You are an AI Assistant and your job is to summarize the content give in less than 500 words. Keep it short simply and to the point.',
	// 		continueMessage: isContinue,
	// 	})
	// 	for await (const value of response) {
	// 		// Process each value - for example, logging it to the console
	// 		console.log('Generated value:', value);
	// 		if (value?.generated_text) {
	// 			generatedSummarizeText += value?.generated_text
	// 		}
			
	// 		// Depending on your application, you might append these values to a string,
	// 		// update the UI, or handle them in other ways.
	// 	}
	// } catch (e) {
	// 	console.log('e', e)
	// 	// update({ type: "status", status: "error", message: (e as Error).message });
	// 	// Handle error
	// }

	// we now build the stream
	const stream = new ReadableStream({
		async start(controller) {
			messageToWriteTo.updates ??= [];
			function update(newUpdate: MessageUpdate) {
				if (newUpdate.type !== "stream") {
					messageToWriteTo?.updates?.push(newUpdate);
				}

				if (newUpdate.type === "stream" && newUpdate.token === "") {
					return;
				}
				controller.enqueue(JSON.stringify(newUpdate) + "\n");

				if (newUpdate.type === "finalAnswer") {
					// 4096 of spaces to make sure the browser doesn't blocking buffer that holding the response
					controller.enqueue(" ".repeat(4096));
				}
			}

			update({ type: "status", status: "started" });

			const summarizeIfNeeded = (async () => {
				if (conv.title === "New Chat" && conv.messages.length === 3) {
					try {
						conv.title = (await summarize(conv.messages[1].content)) ?? conv.title;
						update({ type: "status", status: "title", message: conv.title });
						await collections.conversations.updateOne(
							{
								_id: convId,
							},
							{
								$set: {
									title: conv?.title,
									updatedAt: new Date(),
								},
							}
						);
					} catch (e) {
						console.error(e);
					}
				}
			})();

			await collections.conversations.updateOne(
				{
					_id: convId,
				},
				{
					$set: {
						title: conv.title,
						updatedAt: new Date(),
					},
				}
			);

			// perform websearch if needed
			if (webSearch && !isContinue && !conv.assistantId) {
				messageToWriteTo.webSearch = await runWebSearch(conv, messagesForPrompt, update);
			}

			// console.log('conversation messageForPrompt', messagesForPrompt)
			// const summarizeMessageForPrompt = [{
			// from: 'system',
			// content: generatedSummarizeText,
			// createdAt: 2024-03-18T05:43:41.021Z,
			// updatedAt: 2024-03-18T05:43:50.797Z,
			// ancestors: [
			// 'a3df54cb-a2ce-4abf-ad60-f8edb036cd29',
			// 'e0eb5ea2-c3be-4587-b407-59f92ee5e18c',
			// '5a8ea2b3-8e36-4a45-acc1-3ddad45961d9',
			// '9f938b13-67b3-4555-96d9-e9fb291d4c84',
			// 'ff2a3019-5dcc-4426-9f05-869c2bd601c7',
			// 'ef6169b5-18ea-4551-9be2-a74e6c568f18',
			// '0fa0ac6b-e6d5-4f52-a026-c2b80f639287',
			// '6b280606-a0a7-43aa-a701-5ec856be8a14',
			// '3d5a629e-ba52-4c6e-a1d1-ea312f2e56d5',
			// '6ecad315-3a89-4c09-b133-b4dce35af598'
			// ],
			// id: '79610313-c3ac-420a-a134-5d1759a040f6',
			// children: [ 'd59147e9-665a-45b5-b779-3dfebe98b066' ],
			// updates: [ [Object] ],
			// 	interrupted: false
			// }]

			const processedMessages = await preprocessMessages(
				messagesForPrompt,
				messageToWriteTo.webSearch,
				model.multimodal,
				convId
			);

			// Example function to flatten the conversation thread
			function flattenThread(messages: any[]) {
				const flatList: any[] = [];
				function recurseThroughMessages(message: { children: any[]; }) {
					flatList.push(message);
					if (message.children && message.children.length) {
						message.children.forEach((childId: any) => {
							const childMessage = messages.find((msg: { id: any; }) => msg.id === childId);
							if (childMessage) {
								recurseThroughMessages(childMessage);
							}
						});
					}
				}
				messages.forEach((msg: { ancestors: string | any[]; }) => {
					if (!msg.ancestors || msg.ancestors.length === 0) { // Start with root messages
						recurseThroughMessages(msg);
					}
				});
				// console.log('flattenList', flatList)
				return flatList;
			}

			const flattenedMessages = flattenThread(processedMessages);
			// console.log('flattenedMessages', flattenedMessages)
			let totalCharLength = flattenedMessages.reduce((acc, msg) => acc + msg.content.length, 0);

			console.log(`Total character length: ${totalCharLength}`);

			const maxAllowedLength = (8192 * (55 / 25))
			// console.log('enrichedPrompt', enrichedPrompt);

			// // Calculate the total character length of messages in messagesForPrompt
			// const totalCharLength = messagesForPrompt.reduce((total, message) => total + message.content.length, 0);

			console.log('maxAllowedLength', maxAllowedLength);
			// console.log('totalCharLength', totalCharLength);


			// Trim older messages if the total character length exceeds maxAllowedLength
			while (totalCharLength > maxAllowedLength && processedMessages.length > 0) {
				const removedMessage = processedMessages.shift(); 
				totalCharLength -= removedMessage?.content?.length || 0;
			}


			// inject websearch result & optionally images into the messages

			const previousText = messageToWriteTo.content;

			console.log('processedMessages', processedMessages);


			//Looks like summary wont work fully what we need to do is take in the messagesForPrompt and check if the total length of it is greater than the allowed amount 8192 - newPrompt then trim it else just summarize it and readd the obj back into the messagesForPrompt

			try {
				const endpoint = await model.getEndpoint();
				for await (const output of await endpoint({
					messages: processedMessages,
					preprompt: conv.preprompt,
					continueMessage: isContinue,
				})) {
					// if not generated_text is here it means the generation is not done
					if (!output.generated_text) {
						// else we get the next token
						if (!output.token.special) {
							update({
								type: "stream",
								token: output.token.text,
							});
							// abort check
							const date = abortedGenerations.get(convId.toString());
							if (date && date > promptedAt) {
								break;
							}
							// no output check
							if (!output) {
								break;
							}

							// otherwise we just concatenate tokens
							messageToWriteTo.content += output.token.text;
						}
					} else {
						messageToWriteTo.interrupted = !output.token.special;
						// add output.generated text to the last message
						// strip end tokens from the output.generated_text
						const text = (model.parameters.stop ?? []).reduce((acc: string, curr: string) => {
							if (acc.endsWith(curr)) {
								messageToWriteTo.interrupted = false;
								return acc.slice(0, acc.length - curr.length);
							}
							return acc;
						}, output.generated_text.trimEnd());

						messageToWriteTo.content = previousText + text;
						messageToWriteTo.updatedAt = new Date();
					}
				}
			} catch (e) {
				update({ type: "status", status: "error", message: (e as Error).message });
			} finally {
				// check if no output was generated
				if (messageToWriteTo.content === previousText) {
					update({
						type: "status",
						status: "error",
						message: "No output was generated. Something went wrong.",
					});
				}
			}

			await collections.conversations.updateOne(
				{
					_id: convId,
				},
				{
					$set: {
						messages: conv.messages,
						title: conv?.title,
						updatedAt: new Date(),
					},
				}
			);

			// used to detect if cancel() is called bc of interrupt or just because the connection closes
			doneStreaming = true;

			update({
				type: "finalAnswer",
				text: messageToWriteTo.content,
			});

			await summarizeIfNeeded;
			controller.close();
			return;
		},
		async cancel() {
			if (!doneStreaming) {
				await collections.conversations.updateOne(
					{
						_id: convId,
					},
					{
						$set: {
							messages: conv.messages,
							title: conv.title,
							updatedAt: new Date(),
						},
					}
				);
			}
		},
	});

	// Todo: maybe we should wait for the message to be saved before ending the response - in case of errors
	return new Response(stream, {
		headers: {
			"Content-Type": "text/event-stream",
		},
	});
}

export async function DELETE({ locals, params }) {
	const convId = new ObjectId(params.id);

	const conv = await collections.conversations.findOne({
		_id: convId,
		...authCondition(locals),
	});

	if (!conv) {
		throw error(404, "Conversation not found");
	}

	await collections.conversations.deleteOne({ _id: conv._id });

	return new Response();
}

export async function PATCH({ request, locals, params }) {
	const { title } = z
		.object({ title: z.string().trim().min(1).max(100) })
		.parse(await request.json());

	const convId = new ObjectId(params.id);

	const conv = await collections.conversations.findOne({
		_id: convId,
		...authCondition(locals),
	});

	if (!conv) {
		throw error(404, "Conversation not found");
	}

	await collections.conversations.updateOne(
		{
			_id: convId,
		},
		{
			$set: {
				title,
			},
		}
	);

	return new Response();
}
