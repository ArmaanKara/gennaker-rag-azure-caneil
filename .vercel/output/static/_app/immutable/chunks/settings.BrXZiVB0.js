import{w as y,b as p,d as f}from"./entry.DNyy5_P4.js";import{$ as S,a0 as d,a1 as l}from"./scheduler.nTQPeTYQ.js";function b(o,n){const i={},r={},c={$$scope:1};let a=o.length;for(;a--;){const t=o[a],e=n[a];if(e){for(const s in t)s in e||(r[s]=1);for(const s in e)c[s]||(i[s]=e[s],c[s]=1);o[a]=e}else for(const s in t)c[s]=1}for(const t in r)t in i||(i[t]=void 0);return i}var u=(o=>(o.ConversationList="conversation:list",o.Conversation="conversation",o))(u||{});function m(){return S("settings")}function C(o){const n=y({...o,recentlySaved:!1});let i;async function r(t){n.update(e=>({...e,...t})),clearTimeout(i),i=setTimeout(async()=>{await fetch(`${p}/settings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...d(n),...t})}),f(u.ConversationList),n.update(e=>({...e,recentlySaved:!0})),setTimeout(()=>{n.update(e=>({...e,recentlySaved:!1}))},3e3),f(u.ConversationList)},300)}async function c(t){n.update(e=>({...e,...t})),await fetch(`${p}/settings`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...d(n),...t})}),f(u.ConversationList)}const a={subscribe:n.subscribe,set:r,instantSet:c,update:t=>{r(t(d(n)))}};return l("settings",a),a}export{u as U,C as c,b as g,m as u};