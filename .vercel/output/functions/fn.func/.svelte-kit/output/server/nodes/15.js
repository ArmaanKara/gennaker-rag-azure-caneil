import * as server from '../entries/pages/settings/assistants/new/_page.server.ts.js';

export const index = 15;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/assistants/new/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/settings/assistants/new/+page.server.ts";
export const imports = ["_app/immutable/nodes/15.9Q7lPNsm.js","_app/immutable/chunks/scheduler.nTQPeTYQ.js","_app/immutable/chunks/index.CanFk0Lh.js","_app/immutable/chunks/AssistantSettings.DWE96nIs.js","_app/immutable/chunks/10.XVw5wROT.js","_app/immutable/chunks/each.Cm4EqpY4.js","_app/immutable/chunks/forms.xaAVoexL.js","_app/immutable/chunks/entry.DNyy5_P4.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/chunks/pen.CIgF_CM1.js","_app/immutable/chunks/settings.BrXZiVB0.js","_app/immutable/chunks/IconLoading.CL8GMDoD.js"];
export const stylesheets = [];
export const fonts = [];
