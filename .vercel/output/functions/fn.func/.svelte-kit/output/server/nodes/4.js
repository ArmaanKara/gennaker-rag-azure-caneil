import * as server from '../entries/pages/assistant/_assistantId_/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/assistant/_assistantId_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/assistant/[assistantId]/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.D97zsWHZ.js","_app/immutable/chunks/scheduler.nTQPeTYQ.js","_app/immutable/chunks/index.CanFk0Lh.js","_app/immutable/chunks/entry.DNyy5_P4.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/clickOutside.D-5j4fJ8.js","_app/immutable/chunks/settings.BrXZiVB0.js","_app/immutable/chunks/forms.xaAVoexL.js","_app/immutable/chunks/public.g4KRRLrj.js","_app/immutable/chunks/stores.DJlJkp3c.js","_app/immutable/chunks/gear-fill.C0ybdc6u.js"];
export const stylesheets = [];
export const fonts = [];
