<script lang="ts">
	import { base } from "$app/paths";
	import { page } from "$app/stores";
	import { createEventDispatcher } from "svelte";

    // define isLoading variable
    let isLoading = false;

	import CarbonCheckmark from "~icons/carbon/checkmark";
	import CarbonTrashCan from "~icons/carbon/trash-can";
	import CarbonClose from "~icons/carbon/close";
	import CarbonEdit from "~icons/carbon/edit";
	import type { ConvSidebar } from "$lib/types/ConvSidebar";

	export let conv: ConvSidebar;

	let confirmDelete = false;

	const dispatch = createEventDispatcher<{
		deleteConversation: string;
		editConversationTitle: { id: string; title: string };
	}>();
</script>

{#if isLoading}
    <div class="spinner-container">
    	<div class="spinner"></div>
	</div>
{:else}
    <a
	data-sveltekit-noscroll
	on:mouseleave={() => {
		confirmDelete = false;
	}}
	href="{base}/conversation/{conv.id}"
	class="group flex h-10 flex-none items-center gap-1.5 rounded-lg pl-2.5 pr-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 {conv.id ===
	$page.params.id
		? 'bg-gray-100 dark:bg-gray-700'
		: ''}"
>
	<div class="flex flex-1 items-center truncate">
		{#if confirmDelete}
			<span class="mr-1 font-semibold"> Delete </span>
		{/if}
		{#if conv.avatarHash}
			<img
				src="{base}/settings/assistants/{conv.assistantId}/avatar.jpg?hash={conv.avatarHash}"
				alt="Assistant avatar"
				class="mr-1.5 inline size-4 flex-none rounded-full object-cover"
			/>
			{conv.title.replace(/\p{Emoji}/gu, "")}
		{:else if conv.assistantId}
			<div
				class="mr-1.5 flex size-4 flex-none items-center justify-center rounded-full bg-gray-300 text-xs font-bold uppercase text-gray-500"
			/>
			{conv.title.replace(/\p{Emoji}/gu, "")}
		{:else}
			{conv.title}
		{/if}
	</div>

	{#if confirmDelete}
		<button
			type="button"
			class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex"
			title="Confirm delete action"
			on:click|preventDefault={() => {
				isLoading = true
				setTimeout(() => {
					confirmDelete = false;
					dispatch("deleteConversation", conv.id);
					isLoading = false
				}, 3000)

			}}
		>
			<CarbonCheckmark class="text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
		</button>
		<button
			type="button"
			class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex"
			title="Cancel delete action"
			on:click|preventDefault={() => (confirmDelete = false)}
		>
			<CarbonClose class="text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
		</button>
	{:else}
		<button
			type="button"
			class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex"
			title="Edit conversation title"
			on:click|preventDefault={() => {
				const newTitle = prompt("Edit this conversation title:", conv.title);
				if (!newTitle) return;
				dispatch("editConversationTitle", { id: conv.id, title: newTitle });
			}}
		>
			<CarbonEdit class="text-xs text-gray-400 hover:text-gray-500 dark:hover:text-gray-300" />
		</button>

		<button
			type="button"
			class="flex h-5 w-5 items-center justify-center rounded md:hidden md:group-hover:flex"
			title="Delete conversation"
			on:click|preventDefault={(event) => {
				if (event.shiftKey) {
					console.log('delete')
					dispatch("deleteConversation", conv.id);
				} else {
					confirmDelete = true;
				}
			}}
		>
			<CarbonTrashCan class="text-xs text-gray-400  hover:text-gray-500 dark:hover:text-gray-300" />
		</button>
	{/if}
</a>

{/if}


<style>
    .spinner {
        border: 4px solid rgba(0, 0, 0, 0.1);
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border-left-color: #09f;
        animation: spin 1s ease infinite;
    }
	.spinner-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
}

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>