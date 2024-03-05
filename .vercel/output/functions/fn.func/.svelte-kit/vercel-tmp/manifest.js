export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["chatui/apple-touch-icon.png","chatui/favicon.ico","chatui/favicon.svg","chatui/icon-128x128.png","chatui/icon-256x256.png","chatui/icon-512x512.png","chatui/icon.svg","chatui/logo.svg","chatui/manifest.json","fonts/Inter-Black.ttf","fonts/Inter-Bold.ttf","fonts/Inter-ExtraBold.ttf","fonts/Inter-ExtraLight.ttf","fonts/Inter-Light.ttf","fonts/Inter-Medium.ttf","fonts/Inter-Regular.ttf","fonts/Inter-SemiBold.ttf","fonts/Inter-Thin.ttf","huggingchat/apple-touch-icon.png","huggingchat/assistants-thumbnail.png","huggingchat/favicon.ico","huggingchat/favicon.svg","huggingchat/icon-128x128.png","huggingchat/icon-256x256.png","huggingchat/icon-512x512.png","huggingchat/icon.svg","huggingchat/logo.svg","huggingchat/manifest.json","huggingchat/thumbnail.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".ttf":"font/ttf"},
	_: {
		client: {"start":"_app/immutable/entry/start.CcWwH5js.js","app":"_app/immutable/entry/app.B-Vau7Jf.js","imports":["_app/immutable/entry/start.CcWwH5js.js","_app/immutable/chunks/entry.DNyy5_P4.js","_app/immutable/chunks/scheduler.nTQPeTYQ.js","_app/immutable/chunks/control.CYgJF_JY.js","_app/immutable/entry/app.B-Vau7Jf.js","_app/immutable/chunks/10.XVw5wROT.js","_app/immutable/chunks/scheduler.nTQPeTYQ.js","_app/immutable/chunks/index.CanFk0Lh.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/10.js')),
			__memo(() => import('../output/server/nodes/11.js')),
			__memo(() => import('../output/server/nodes/12.js')),
			__memo(() => import('../output/server/nodes/13.js')),
			__memo(() => import('../output/server/nodes/14.js')),
			__memo(() => import('../output/server/nodes/15.js')),
			__memo(() => import('../output/server/nodes/16.js')),
			__memo(() => import('../output/server/nodes/17.js')),
			__memo(() => import('../output/server/nodes/18.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/export",
				pattern: /^\/admin\/export\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/admin/export/_server.ts.js'))
			},
			{
				id: "/admin/stats/compute",
				pattern: /^\/admin\/stats\/compute\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/admin/stats/compute/_server.ts.js'))
			},
			{
				id: "/api/conversations",
				pattern: /^\/api\/conversations\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/conversations/_server.ts.js'))
			},
			{
				id: "/api/conversation/[id]",
				pattern: /^\/api\/conversation\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/conversation/_id_/_server.ts.js'))
			},
			{
				id: "/api/models",
				pattern: /^\/api\/models\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/models/_server.ts.js'))
			},
			{
				id: "/api/user",
				pattern: /^\/api\/user\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/user/_server.ts.js'))
			},
			{
				id: "/assistants",
				pattern: /^\/assistants\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/assistant/[assistantId]",
				pattern: /^\/assistant\/([^/]+?)\/?$/,
				params: [{"name":"assistantId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/assistant/[assistantId]/thumbnail.png",
				pattern: /^\/assistant\/([^/]+?)\/thumbnail\.png\/?$/,
				params: [{"name":"assistantId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/assistant/_assistantId_/thumbnail.png/_server.ts.js'))
			},
			{
				id: "/conversations",
				pattern: /^\/conversations\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/conversation",
				pattern: /^\/conversation\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/conversation/_server.ts.js'))
			},
			{
				id: "/conversation/[id]",
				pattern: /^\/conversation\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/conversation/_id_/_server.ts.js'))
			},
			{
				id: "/conversation/[id]/message/[messageId]/prompt",
				pattern: /^\/conversation\/([^/]+?)\/message\/([^/]+?)\/prompt\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"messageId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/conversation/_id_/message/_messageId_/prompt/_server.ts.js'))
			},
			{
				id: "/conversation/[id]/message/[messageId]/vote",
				pattern: /^\/conversation\/([^/]+?)\/message\/([^/]+?)\/vote\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"messageId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/conversation/_id_/message/_messageId_/vote/_server.ts.js'))
			},
			{
				id: "/conversation/[id]/output/[sha256]",
				pattern: /^\/conversation\/([^/]+?)\/output\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false},{"name":"sha256","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/conversation/_id_/output/_sha256_/_server.ts.js'))
			},
			{
				id: "/conversation/[id]/share",
				pattern: /^\/conversation\/([^/]+?)\/share\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/conversation/_id_/share/_server.ts.js'))
			},
			{
				id: "/conversation/[id]/stop-generating",
				pattern: /^\/conversation\/([^/]+?)\/stop-generating\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/conversation/_id_/stop-generating/_server.ts.js'))
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/login/callback",
				pattern: /^\/login\/callback\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/models",
				pattern: /^\/models\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/privacy",
				pattern: /^\/privacy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/r/[id]",
				pattern: /^\/r\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/settings",
				pattern: /^\/settings\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 14 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/settings/_server.ts.js'))
			},
			{
				id: "/settings/assistants/new",
				pattern: /^\/settings\/assistants\/new\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/settings/assistants/[assistantId]",
				pattern: /^\/settings\/assistants\/([^/]+?)\/?$/,
				params: [{"name":"assistantId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/settings/assistants/[assistantId]/avatar.jpg",
				pattern: /^\/settings\/assistants\/([^/]+?)\/avatar\.jpg\/?$/,
				params: [{"name":"assistantId","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/settings/assistants/_assistantId_/avatar.jpg/_server.ts.js'))
			},
			{
				id: "/settings/assistants/[assistantId]/edit",
				pattern: /^\/settings\/assistants\/([^/]+?)\/edit\/?$/,
				params: [{"name":"assistantId","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/settings/[...model]",
				pattern: /^\/settings(?:\/(.*))?\/?$/,
				params: [{"name":"model","optional":false,"rest":true,"chained":true}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 18 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
