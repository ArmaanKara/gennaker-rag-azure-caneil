const MONGODB_URL = "mongodb+srv://vancouverarmaan:Beanie123@chat-ui-db.afuuu6x.mongodb.net/";
const MONGODB_DB_NAME = "chat-ui";
const MONGODB_DIRECT_CONNECTION = "false";
const COOKIE_NAME = "hf-chat";
const HF_TOKEN = "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";
const HF_API_ROOT = "https://api-inference.huggingface.co/models";
const OPENAI_API_KEY = "";
const SEARXNG_QUERY_URL = "";
const WEBSEARCH_ALLOWLIST = "[]";
const WEBSEARCH_BLOCKLIST = "[]";
const OPENID_CONFIG = '{\n  "PROVIDER_URL": "",\n  "CLIENT_ID": "",\n  "CLIENT_SECRET": "",\n  "SCOPES": ""\n}';
const OPENID_CLIENT_ID = "";
const OPENID_CLIENT_SECRET = "";
const OPENID_SCOPES = "openid profile";
const OPENID_PROVIDER_URL = "https://huggingface.co";
const OPENID_TOLERANCE = "";
const OPENID_RESOURCE = "";
const TEXT_EMBEDDING_MODELS = '[\n  {\n    "name": "Xenova/gte-small",\n    "displayName": "Xenova/gte-small",\n    "description": "Local embedding model running on the server.",\n    "chunkCharLength": 512,\n    "endpoints": [\n      { "type": "transformersjs" }\n    ]\n  }\n]';
const MODELS = '[{\n  "id": "caniel-rag-chatbot-gpt4",\n  "name": "caniel-rag-chatbot-gpt4",       \n  "displayName": "caniel-rag-chatbot-gpt4",\n  "parameters": {\n      "temperature": 0.5,\n      "max_new_tokens": 4096\n  },\n  "endpoints": [\n      {\n          "type": "openai",\n          "baseURL": "https://caniel-rag-chatbot-ncs.openai.azure.com/openai/deployments/caniel-rag-chatbot-gpt4",\n          "defaultHeaders": {\n              "api-key": "da747f09fb1b44658b577fb8ea7cce1c"\n          },\n          "defaultQuery": {\n              "api-version": "2024-02-15-preview"\n          }\n      }\n  ]\n}]';
const OLD_MODELS = "[]";
const EXPOSE_API = "true";
const ENABLE_ASSISTANTS = "false";
const ALTERNATIVE_REDIRECT_URLS = "[]";
const ALLOWED_USER_EMAILS = "[]";
export {
  ALTERNATIVE_REDIRECT_URLS as A,
  COOKIE_NAME as C,
  ENABLE_ASSISTANTS as E,
  HF_TOKEN as H,
  MONGODB_URL as M,
  OPENID_CONFIG as O,
  SEARXNG_QUERY_URL as S,
  TEXT_EMBEDDING_MODELS as T,
  WEBSEARCH_ALLOWLIST as W,
  WEBSEARCH_BLOCKLIST as a,
  MONGODB_DIRECT_CONNECTION as b,
  MONGODB_DB_NAME as c,
  OPENID_CLIENT_ID as d,
  OPENID_CLIENT_SECRET as e,
  OPENID_PROVIDER_URL as f,
  OPENID_SCOPES as g,
  OPENID_TOLERANCE as h,
  OPENID_RESOURCE as i,
  OPENAI_API_KEY as j,
  MODELS as k,
  OLD_MODELS as l,
  HF_API_ROOT as m,
  ALLOWED_USER_EMAILS as n,
  EXPOSE_API as o
};
