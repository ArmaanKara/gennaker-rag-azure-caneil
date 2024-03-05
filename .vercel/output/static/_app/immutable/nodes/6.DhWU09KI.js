function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/index.bGTrVNVa.js","../chunks/_commonjsHelpers.CqkleIqs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as Ae}from"../chunks/10.XVw5wROT.js";import{s as Te,m as Ce,e as ve,a as Ue,o as Re,c as De,f as x,g as ke,h as W,j as Oe,i as Pe,p as je,l as v,N as Ne,x as y}from"../chunks/scheduler.nTQPeTYQ.js";import{S as Je,i as Le,b as Ve,c as We,a as qe,m as He,t as Xe,d as Ge,e as Ke}from"../chunks/index.CanFk0Lh.js";import{f as ce,C as ze,c as Be,p as ue,w as Fe,a as Ye}from"../chunks/pendingMessage.42fdAZRO.js";import{s as Qe,i as q,t as me}from"../chunks/titleUpdate.BzYQbAed.js";import{p as Ze}from"../chunks/stores.DJlJkp3c.js";import{b as O,g as $,i as xe}from"../chunks/entry.DNyy5_P4.js";import{e as _,E as ee}from"../chunks/cookiesAreEnabled.zumDw87_.js";let H;const $e=new Uint8Array(16);function es(){if(!H&&(H=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!H))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return H($e)}const p=[];for(let e=0;e<256;++e)p.push((e+256).toString(16).slice(1));function ss(e,a=0){return p[e[a+0]]+p[e[a+1]]+p[e[a+2]]+p[e[a+3]]+"-"+p[e[a+4]]+p[e[a+5]]+"-"+p[e[a+6]]+p[e[a+7]]+"-"+p[e[a+8]]+p[e[a+9]]+"-"+p[e[a+10]]+p[e[a+11]]+p[e[a+12]]+p[e[a+13]]+p[e[a+14]]+p[e[a+15]]}const ts=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),fe={randomUUID:ts};function te(e,a,s){if(fe.randomUUID&&!a&&!e)return fe.randomUUID();e=e||{};const t=e.random||(e.rng||es)();if(t[6]=t[6]&15|64,t[8]=t[8]&63|128,a){s=s||0;for(let r=0;r<16;++r)a[s+r]=t[r];return a}return ss(t)}function se(e,a,s){var m;if(e.messages.length===0){const d=te();return e.rootMessageId=d,e.messages.push({...a,ancestors:[],id:d}),d}if(!s)throw new Error("You need to specify a parentId if this is not the first message");const t=te();if(!e.rootMessageId){if(s&&s!==e.messages[e.messages.length-1].id)throw new Error("This is a legacy conversation, you can only append to the last message");return e.messages.push({...a,id:t}),t}const r=[...((m=e.messages.find(d=>d.id===s))==null?void 0:m.ancestors)??[],s];e.messages.push({...a,ancestors:r,id:t,children:[]});const i=e.messages.find(d=>d.id===s);return i&&(i.children?i.children.push(t):i.children=[t]),t}function pe(e,a,s){var d;if(e.messages.length===0)throw new Error("Cannot add a sibling to an empty conversation");if(!e.rootMessageId)throw new Error("Cannot add a sibling to a legacy conversation");const t=e.messages.find(g=>g.id===s);if(!t)throw new Error("The sibling message doesn't exist");if(!t.ancestors||((d=t.ancestors)==null?void 0:d.length)===0)throw new Error("The sibling message is the root message, therefore we can't add a sibling");const r=te();e.messages.push({...a,id:r,ancestors:t.ancestors,children:[]});const i=t.ancestors[t.ancestors.length-1],m=e.messages.find(g=>g.id===i);return m&&(m.children?m.children.push(r):m.children=[r]),r}function ns(e){let a,s,t,r,i,m;document.title=a=e[5];function d(o){e[15](o)}let g={loading:e[2],pending:e[3],messages:e[6],shared:e[0].shared,preprompt:e[0].preprompt,models:e[0].models,currentModel:ce([...e[0].models,...e[0].oldModels],e[0].model),assistant:e[0].assistant};return e[4]!==void 0&&(g.files=e[4]),r=new ze({props:g}),Ce.push(()=>Ve(r,"files",d)),r.$on("message",e[9]),r.$on("retry",e[10]),r.$on("continue",e[11]),r.$on("vote",e[16]),r.$on("share",e[17]),r.$on("stop",e[18]),{c(){s=ve("link"),t=Ue(),We(r.$$.fragment),this.h()},l(o){const l=Re("svelte-626amo",document.head);s=De(l,"LINK",{rel:!0,href:!0,integrity:!0,crossorigin:!0}),l.forEach(x),t=ke(o),qe(r.$$.fragment,o),this.h()},h(){W(s,"rel","stylesheet"),W(s,"href","https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"),W(s,"integrity","sha384-GvrOXuhMATgEsSwCs4smul74iXGOixntILdUW9XmUC6+HX0sLNAK3q71HotJqlAn"),W(s,"crossorigin","anonymous")},m(o,l){Oe(document.head,s),Pe(o,t,l),He(r,o,l),m=!0},p(o,[l]){(!m||l&32)&&a!==(a=o[5])&&(document.title=a);const w={};l&4&&(w.loading=o[2]),l&8&&(w.pending=o[3]),l&64&&(w.messages=o[6]),l&1&&(w.shared=o[0].shared),l&1&&(w.preprompt=o[0].preprompt),l&1&&(w.models=o[0].models),l&1&&(w.currentModel=ce([...o[0].models,...o[0].oldModels],o[0].model)),l&1&&(w.assistant=o[0].assistant),!i&&l&16&&(i=!0,w.files=o[4],je(()=>i=!1)),r.$set(w)},i(o){m||(Xe(r.$$.fragment,o),m=!0)},o(o){Ge(r.$$.fragment,o),m=!1},d(o){o&&x(t),x(s),Ke(r,o)}}}function os(e,a,s){let t,r,i,m,d,g,o,l,w;v(e,Ze,n=>s(1,i=n)),v(e,q,n=>s(7,d=n)),v(e,ue,n=>s(20,g=n)),v(e,_,n=>s(21,o=n)),v(e,me,n=>s(22,l=n)),v(e,Fe,n=>s(23,w=n));var L,V;let{data:u}=a,b=!1,P=!1,U=[];async function X(){try{s(2,b=!0);const n=await fetch(`${O}/conversation`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fromShare:i.params.id,model:u.model})});if(!n.ok){_.set("Error while creating conversation, try again."),console.error("Error while creating conversation: "+await n.text());return}const{conversationId:h}=await n.json();return h}catch(n){throw _.set(ee.default),console.error(String(n)),n}}async function T(n){var h,j,R,M,C,K,{prompt:D,messageId:S=(h=m.leaf)!==null&&h!==void 0?h:void 0,isRetry:z=!1,isContinue:oe=!1}=n;try{y(q,d=!1,d),s(2,b=!0),s(3,P=!0);const E=await Ae(()=>import("../chunks/index.bGTrVNVa.js").then(c=>c.i),__vite__mapDeps([0,1]),import.meta.url),B=await Promise.all(U.map(async c=>await E.readAndCompressImage(c,{maxHeight:224,maxWidth:224,quality:1}).then(async I=>await Ye(I))));let N;if(oe&&S)((M=(R=(j=t.find(c=>c.id===S))===null||j===void 0?void 0:j.children)===null||R===void 0?void 0:R.length)!==null&&M!==void 0?M:0)>0?y(_,o="Can only continue the last message",o):N=S;else if(z&&S){const c=t.find(I=>I.id===S);if(c||y(_,o="Message not found",o),(c==null?void 0:c.from)==="user"&&D){const I=pe({messages:t,rootMessageId:u.rootMessageId},{from:"user",content:D},S);N=se({messages:t,rootMessageId:u.rootMessageId},{from:"assistant",content:"",files:B},I)}else(c==null?void 0:c.from)==="assistant"&&(N=pe({messages:t,rootMessageId:u.rootMessageId},{from:"assistant",content:""},S))}else{const c=se({messages:t,rootMessageId:u.rootMessageId},{from:"user",content:D??"",files:B,createdAt:new Date,updatedAt:new Date},S);u.rootMessageId||s(0,u.rootMessageId=c,u),N=se({messages:t,rootMessageId:u.rootMessageId},{from:"assistant",content:"",createdAt:new Date,updatedAt:new Date},c)}s(6,t=[...t]);const J=t.find(c=>c.id===N);if(!J)throw new Error("Message to write to not found");const Me=!!i.data.assistant,k=await fetch(`${O}/conversation/${i.params.id}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:D,id:S,is_retry:z,is_continue:oe,web_search:!Me&&w.useSearch,files:z?void 0:B})});if(s(4,U=[]),!k.body)throw new Error("Body not defined");if(!k.ok){_.set((C=await k.json())===null||C===void 0?void 0:C.message);return}const Se=new TextDecoderStream,A=(K=k==null?void 0:k.body)===null||K===void 0?void 0:K.pipeThrough(Se).getReader();let ae="";const re=[];let ie=[""],de=!1;for(A.closed.then(()=>{de=!0});ae==="";){if(d||o||de){A==null||A.cancel();break}await(A==null?void 0:A.read().then(async({done:c,value:I})=>{if(c&&A.cancel(),!I)return;I=ie.pop()+I;const F=I.split(`
`);F.forEach(async Y=>{var Q,Z;try{const f=JSON.parse(Y);if(f.type!=="stream"&&re.push(f),f.type==="finalAnswer")ae=f.text,s(2,b=!1),s(3,P=!1);else if(f.type==="stream")s(3,P=!1),J.content+=f.token,s(6,t=[...t]);else if(f.type==="webSearch")J.updates=[...(Q=J.updates)!==null&&Q!==void 0?Q:[],f],s(6,t=[...t]);else if(f.type==="status")if(f.status==="title"&&f.message){const le=u.conversations.find(({id:Ee})=>Ee===i.params.id);le&&(le.title=f.message,y(me,l={title:f.message,convId:i.params.id},l))}else f.status==="error"&&y(_,o=(Z=f.message)!==null&&Z!==void 0?Z:"An error has occurred",o);else f.type==="error"&&(_.set(f.message),A.cancel())}catch{Y===F[F.length-1]&&ie.push(Y);return}})}))}J.updates=re}catch(E){E instanceof Error&&E.message.includes("overloaded")?y(_,o="Too much traffic, please try again.",o):E instanceof Error&&E.message.includes("429")?y(_,o=ee.rateLimited,o):E instanceof Error?y(_,o=E.message,o):y(_,o=ee.default,o),console.error(E)}finally{s(2,b=!1),s(3,P=!1),await xe()}}async function ne(n,h){let j=i.params.id,R;s(6,t=t.map(M=>M.id===h?(R=M.score,{...M,score:n}):M));try{await fetch(`${O}/conversation/${j}/message/${h}/vote`,{method:"POST",body:JSON.stringify({score:n})})}catch{s(6,t=t.map(C=>C.id!==h?C:{...C,score:R}))}}Ne(async()=>{g&&(s(4,U=g.files),await T({prompt:g.content}),y(ue,g=void 0,g))});async function he(n){u.shared?await X().then(async h=>{await $(`${O}/conversation/${h}`,{invalidateAll:!0})}).then(async()=>await T({prompt:n.detail})).finally(()=>s(2,b=!1)):await T({prompt:n.detail})}async function ge(n){u.shared?await X().then(async h=>{await $(`${O}/conversation/${h}`,{invalidateAll:!0})}).then(async()=>await T({prompt:n.detail.content,messageId:n.detail.id,isRetry:!0})).finally(()=>s(2,b=!1)):await T({prompt:n.detail.content,messageId:n.detail.id,isRetry:!0})}async function we(n){u.shared?await X().then(async h=>{await $(`${O}/conversation/${h}`,{invalidateAll:!0})}).then(async()=>await T({messageId:n.detail.id,isContinue:!0})).finally(()=>s(2,b=!1)):T({messageId:n.detail.id,isContinue:!0})}const G=Be();v(e,G,n=>s(19,m=n));function ye(n){U=n,s(4,U)}const _e=n=>ne(n.detail.score,n.detail.id),be=()=>Qe(i.params.id,u.title),Ie=()=>(y(q,d=!0,d),s(2,b=!1));return e.$$set=n=>{"data"in n&&s(0,u=n.data)},e.$$.update=()=>{e.$$.dirty&1&&s(6,{messages:t}=u,t),e.$$.dirty&2&&(i.params.id,y(q,d=!0,d),s(2,b=!1),y(G,m.editing=null,m)),e.$$.dirty&24579&&s(5,r=s(14,V=s(13,L=u.conversations.find(n=>n.id===i.params.id))===null||L===void 0?void 0:L.title)!==null&&V!==void 0?V:u.title)},[u,i,b,P,U,r,t,d,ne,he,ge,we,G,L,V,ye,_e,be,Ie]}class fs extends Je{constructor(a){super(),Le(this,a,os,ns,Te,{data:0})}}export{fs as component};
