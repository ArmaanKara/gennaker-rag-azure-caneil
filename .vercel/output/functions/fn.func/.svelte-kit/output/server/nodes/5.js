import * as server from '../entries/pages/assistants/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/assistants/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/assistants/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.37qSyvMp.js","_app/immutable/chunks/scheduler.nTQPeTYQ.js","_app/immutable/chunks/index.CanFk0Lh.js","_app/immutable/chunks/each.Cm4EqpY4.js","_app/immutable/chunks/isHuggingChat.1ozxWy7M.js","_app/immutable/chunks/public.g4KRRLrj.js","_app/immutable/chunks/entry.DNyy5_P4.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/stores.DJlJkp3c.js","_app/immutable/chunks/add.D-O4JT6R.js","_app/immutable/chunks/settings.BrXZiVB0.js","_app/immutable/chunks/close.C1UTSa__.js"];
export const stylesheets = [];
export const fonts = [];
