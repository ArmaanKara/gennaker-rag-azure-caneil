import{n as dt,s as he,Z as _t,N as pe}from"./scheduler.nTQPeTYQ.js";import{H as at,S as Et,R as Mt}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function ge(t,n){return t==="/"||n==="ignore"?t:n==="never"?t.endsWith("/")?t.slice(0,-1):t:n==="always"&&!t.endsWith("/")?t+"/":t}function me(t){return t.split("%25").map(decodeURI).join("%25")}function _e(t){for(const n in t)t[n]=decodeURIComponent(t[n]);return t}function ht({href:t}){return t.split("#")[0]}const ye=["href","pathname","search","toString","toJSON"];function we(t,n,e){const r=new URL(t);Object.defineProperty(r,"searchParams",{value:new Proxy(r.searchParams,{get(a,o){if(o==="get"||o==="getAll"||o==="has")return i=>(e(i),a[o](i));n();const s=Reflect.get(a,o);return typeof s=="function"?s.bind(a):s}}),enumerable:!0,configurable:!0});for(const a of ye)Object.defineProperty(r,a,{get(){return n(),t[a]},enumerable:!0,configurable:!0});return r}const ve="/__data.json",be=".html__data.json";function Ee(t){return t.endsWith(".html")?t.replace(/\.html$/,be):t.replace(/\/$/,"")+ve}function ke(...t){let n=5381;for(const e of t)if(typeof e=="string"){let r=e.length;for(;r;)n=n*33^e.charCodeAt(--r)}else if(ArrayBuffer.isView(e)){const r=new Uint8Array(e.buffer,e.byteOffset,e.byteLength);let a=r.length;for(;a;)n=n*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function Ae(t){const n=atob(t),e=new Uint8Array(n.length);for(let r=0;r<n.length;r++)e[r]=n.charCodeAt(r);return e.buffer}const Gt=window.fetch;window.fetch=(t,n)=>((t instanceof Request?t.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(kt(t)),Gt(t,n));const M=new Map;function Se(t,n){const e=kt(t,n),r=document.querySelector(e);if(r!=null&&r.textContent){let{body:a,...o}=JSON.parse(r.textContent);const s=r.getAttribute("data-ttl");return s&&M.set(e,{body:a,init:o,ttl:1e3*Number(s)}),r.getAttribute("data-b64")!==null&&(a=Ae(a)),Promise.resolve(new Response(a,o))}return window.fetch(t,n)}function Re(t,n,e){if(M.size>0){const r=kt(t,e),a=M.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(e==null?void 0:e.cache))return new Response(a.body,a.init);M.delete(r)}}return window.fetch(n,e)}function kt(t,n){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(n!=null&&n.headers||n!=null&&n.body){const a=[];n.headers&&a.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&a.push(n.body),r+=`[data-hash="${ke(...a)}"]`}return r}const Ie=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Le(t){const n=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${Ue(t).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return n.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const s=r.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return pt(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return pt(String.fromCharCode(...c.slice(2).split("-").map(f=>parseInt(f,16))));const u=Ie.exec(c),[,h,g,d,m]=u;return n.push({name:d,matcher:m,optional:!!h,rest:!!g,chained:g?l===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return pt(c)}).join("")}).join("")}/?$`),params:n}}function Pe(t){return!/^\([^)]+\)$/.test(t)}function Ue(t){return t.slice(1).split("/").filter(Pe)}function Te(t,n,e){const r={},a=t.slice(1),o=a.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let l=a[i-s];if(c.chained&&c.rest&&s&&(l=a.slice(i-s,i+1).filter(u=>u).join("/"),s=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||e[c.matcher](l)){r[c.name]=l;const u=n[i+1],h=a[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(r).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return r}function pt(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xe({nodes:t,server_loads:n,dictionary:e,matchers:r}){const a=new Set(n);return Object.entries(e).map(([i,[c,l,u]])=>{const{pattern:h,params:g}=Le(i),d={id:i,exec:m=>{const f=h.exec(m);if(f)return Te(f,g,r)},errors:[1,...u||[]].map(m=>t[m]),layouts:[0,...l||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,t[i]]}function s(i){return i===void 0?i:[a.has(i),t[i]]}}function Ht(t,n=JSON.parse){try{return n(sessionStorage[t])}catch{}}function Nt(t,n,e=JSON.stringify){const r=e(n);try{sessionStorage[t]=r}catch{}}const j=[];function At(t,n=dt){let e;const r=new Set;function a(i){if(he(t,i)&&(t=i,e)){const c=!j.length;for(const l of r)l[1](),j.push(l,t);if(c){for(let l=0;l<j.length;l+=2)j[l][0](j[l+1]);j.length=0}}}function o(i){a(i(t))}function s(i,c=dt){const l=[i,c];return r.add(l),r.size===1&&(e=n(a,o)||dt),i(t),()=>{r.delete(l),r.size===0&&e&&(e(),e=null)}}return{set:a,update:o,subscribe:s}}var Ft;const I=((Ft=globalThis.__sveltekit_p9ifo2)==null?void 0:Ft.base)??"";var qt;const Ne=((qt=globalThis.__sveltekit_p9ifo2)==null?void 0:qt.assets)??I,Oe="1709611303871",Bt="sveltekit:snapshot",Kt="sveltekit:scroll",zt="sveltekit:states",je="sveltekit:pageurl",D="sveltekit:history",G="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Y=location.origin;function Yt(t){if(t instanceof URL)return t;let n=document.baseURI;if(!n){const e=document.getElementsByTagName("base");n=e.length?e[0].href:document.URL}return new URL(t,n)}function St(){return{x:pageXOffset,y:pageYOffset}}function $(t,n){return t.getAttribute(`data-sveltekit-${n}`)}const Ot={...W,"":W.hover};function Jt(t){let n=t.assignedSlot??t.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Wt(t,n){for(;t&&t!==n;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=Jt(t)}}function yt(t,n){let e;try{e=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const r=t instanceof SVGAElement?t.target.baseVal:t.target,a=!e||!!r||rt(e,n)||(t.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(e==null?void 0:e.origin)===Y&&t.hasAttribute("download");return{url:e,external:a,target:r,download:o}}function X(t){let n=null,e=null,r=null,a=null,o=null,s=null,i=t;for(;i&&i!==document.documentElement;)r===null&&(r=$(i,"preload-code")),a===null&&(a=$(i,"preload-data")),n===null&&(n=$(i,"keepfocus")),e===null&&(e=$(i,"noscroll")),o===null&&(o=$(i,"reload")),s===null&&(s=$(i,"replacestate")),i=Jt(i);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Ot[r??"off"],preload_data:Ot[a??"off"],keepfocus:c(n),noscroll:c(e),reload:c(o),replace_state:c(s)}}function jt(t){const n=At(t);let e=!0;function r(){e=!0,n.update(s=>s)}function a(s){e=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||e&&c!==i)&&s(i=c)})}return{notify:r,set:a,subscribe:o}}function $e(){const{set:t,subscribe:n}=At(!1);let e;async function r(){clearTimeout(e);try{const a=await fetch(`${Ne}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!a.ok)return!1;const s=(await a.json()).version!==Oe;return s&&(t(!0),clearTimeout(e)),s}catch{return!1}}return{subscribe:n,check:r}}function rt(t,n){return t.origin!==Y||!t.pathname.startsWith(n)}const De=-1,Ce=-2,Ve=-3,Fe=-4,qe=-5,Me=-6;function on(t,n){return Xt(JSON.parse(t),n)}function Xt(t,n){if(typeof t=="number")return a(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const e=t,r=Array(e.length);function a(o,s=!1){if(o===De)return;if(o===Ve)return NaN;if(o===Fe)return 1/0;if(o===qe)return-1/0;if(o===Me)return-0;if(s)throw new Error("Invalid input");if(o in r)return r[o];const i=e[o];if(!i||typeof i!="object")r[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],l=n==null?void 0:n[c];if(l)return r[o]=l(a(i[1]));switch(c){case"Date":r[o]=new Date(i[1]);break;case"Set":const u=new Set;r[o]=u;for(let d=1;d<i.length;d+=1)u.add(a(i[d]));break;case"Map":const h=new Map;r[o]=h;for(let d=1;d<i.length;d+=2)h.set(a(i[d]),a(i[d+1]));break;case"RegExp":r[o]=new RegExp(i[1],i[2]);break;case"Object":r[o]=Object(i[1]);break;case"BigInt":r[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);r[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=a(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);r[o]=c;for(let l=0;l<i.length;l+=1){const u=i[l];u!==Ce&&(c[l]=a(u))}}else{const c={};r[o]=c;for(const l in i){const u=i[l];c[l]=a(u)}}return r[o]}return a(0)}const Zt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Zt];const Ge=new Set([...Zt]);[...Ge];function He(t){return t.filter(n=>n!=null)}const Be="x-sveltekit-invalidated",Ke="x-sveltekit-trailing-slash";function Z(t){return t instanceof at||t instanceof Et?t.status:500}function ze(t){return t instanceof Et?t.text:"Internal Error"}const O=Ht(Kt)??{},H=Ht(Bt)??{},U={url:jt({}),page:jt({}),navigating:At(null),updated:$e()};function Rt(t){O[t]=St()}function Ye(t,n){let e=t+1;for(;O[e];)delete O[e],e+=1;for(e=n+1;H[e];)delete H[e],e+=1}function C(t){return location.href=t.href,new Promise(()=>{})}function $t(){}let ot,wt,Q,L,vt,F;const tt=[],et=[];let P=null;const Qt=[],Je=[];let x=[],y={branch:[],error:null,url:null},It=!1,nt=!1,Dt=!0,B=!1,q=!1,te=!1,it=!1,N,k,R,S,V,gt;async function sn(t,n,e){var a,o;document.URL!==location.href&&(location.href=location.href),F=t,ot=xe(t),L=document.documentElement,vt=n,wt=t.nodes[0],Q=t.nodes[1],wt(),Q(),k=(a=history.state)==null?void 0:a[D],R=(o=history.state)==null?void 0:o[G],k||(k=R=Date.now(),history.replaceState({...history.state,[D]:k,[G]:R},""));const r=O[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),e?await nn(vt,e):tn(location.href,{replaceState:!0}),en()}async function ee(){if(await(gt||(gt=Promise.resolve())),!gt)return;gt=null;const t=lt(y.url,!0);P=null;const n=V={},e=t&&await Ut(t);if(!(!e||n!==V)){if(e.type==="redirect")return st(new URL(e.location,y.url).href,{},1,n);e.props.page&&(S=e.props.page),y=e.state,ne(),N.$set(e.props)}}function ne(){tt.length=0,it=!1}function ae(t){et.some(n=>n==null?void 0:n.snapshot)&&(H[t]=et.map(n=>{var e;return(e=n==null?void 0:n.snapshot)==null?void 0:e.capture()}))}function re(t){var n;(n=H[t])==null||n.forEach((e,r)=>{var a,o;(o=(a=et[r])==null?void 0:a.snapshot)==null||o.restore(e)})}function Ct(){Rt(k),Nt(Kt,O),ae(R),Nt(Bt,H)}async function st(t,n,e,r){return J({type:"goto",url:Yt(t),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:e,nav_token:r,accept:()=>{n.invalidateAll&&(it=!0)}})}async function We(t){return P={id:t.id,promise:Ut(t).then(n=>(n.type==="loaded"&&n.state.error&&(P=null),n))},P.promise}async function mt(t){const n=ot.find(e=>e.exec(se(t)));n&&await Promise.all([...n.layouts,n.leaf].map(e=>e==null?void 0:e[1]()))}function oe(t,n){var a;y=t.state;const e=document.querySelector("style[data-sveltekit]");e&&e.remove(),S=t.props.page,N=new F.root({target:n,props:{...t.props,stores:U,components:et},hydrate:!0}),re(R);const r={from:null,to:{params:y.params,route:{id:((a=y.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};x.forEach(o=>o(r)),nt=!0}async function K({url:t,params:n,branch:e,status:r,error:a,route:o,form:s}){let i="never";if(I&&(t.pathname===I||t.pathname===I+"/"))i="always";else for(const d of e)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);t.pathname=ge(t.pathname,i),t.search=t.search;const c={type:"loaded",state:{url:t,params:n,branch:e,error:a,route:o},props:{constructors:He(e).map(d=>d.node.component),page:S}};s!==void 0&&(c.props.form=s);let l={},u=!S,h=0;for(let d=0;d<Math.max(e.length,y.branch.length);d+=1){const m=e[d],f=y.branch[d];(m==null?void 0:m.data)!==(f==null?void 0:f.data)&&(u=!0),m&&(l={...l,...m.data},u&&(c.props[`data_${h}`]=l),h+=1)}return(!y.url||t.href!==y.url.href||y.error!==a||s!==void 0&&s!==S.form||u)&&(c.props.page={error:a,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:r,url:new URL(t),form:s??null,data:u?l:S.data}),c}async function Lt({loader:t,parent:n,url:e,params:r,route:a,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await t();if((u=l.universal)!=null&&u.load){let d=function(...f){for(const _ of f){const{href:v}=new URL(_,e);c.dependencies.add(v)}};const m={route:new Proxy(a,{get:(f,_)=>(i&&(c.route=!0),f[_])}),params:new Proxy(r,{get:(f,_)=>(i&&c.params.add(_),f[_])}),data:(o==null?void 0:o.data)??null,url:we(e,()=>{i&&(c.url=!0)},f=>{i&&c.search_params.add(f)}),async fetch(f,_){let v;f instanceof Request?(v=f.url,_={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:f.headers,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,..._}):v=f;const A=new URL(v,e);return i&&d(A.href),A.origin===e.origin&&(v=A.href.slice(e.origin.length)),nt?Re(v,A.href,_):Se(v,_)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(f){i=!1;try{return f()}finally{i=!0}}};s=await l.universal.load.call(null,m)??null}return{node:l,loader:t,server:o,universal:(h=l.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=l.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Vt(t,n,e,r,a,o){if(it)return!0;if(!a)return!1;if(a.parent&&t||a.route&&n||a.url&&e)return!0;for(const s of a.search_params)if(r.has(s))return!0;for(const s of a.params)if(o[s]!==y.params[s])return!0;for(const s of a.dependencies)if(tt.some(i=>i(new URL(s))))return!0;return!1}function Pt(t,n){return(t==null?void 0:t.type)==="data"?t:(t==null?void 0:t.type)==="skip"?n??null:null}function Xe(t,n){if(!t)return new Set(n.searchParams.keys());const e=new Set([...t.searchParams.keys(),...n.searchParams.keys()]);for(const r of e){const a=t.searchParams.getAll(r),o=n.searchParams.getAll(r);a.every(s=>o.includes(s))&&o.every(s=>a.includes(s))&&e.delete(r)}return e}async function Ut({id:t,invalidating:n,url:e,params:r,route:a}){if((P==null?void 0:P.id)===t)return P.promise;const{errors:o,layouts:s,leaf:i}=a,c=[...s,i];o.forEach(p=>p==null?void 0:p().catch(()=>{})),c.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let l=null;const u=y.url?t!==y.url.pathname+y.url.search:!1,h=y.route?a.id!==y.route.id:!1,g=Xe(y.url,e);let d=!1;const m=c.map((p,w)=>{var T;const b=y.branch[w],E=!!(p!=null&&p[0])&&((b==null?void 0:b.loader)!==p[1]||Vt(d,h,u,g,(T=b.server)==null?void 0:T.uses,r));return E&&(d=!0),E});if(m.some(Boolean)){try{l=await fe(e,m)}catch(p){return ct({status:Z(p),error:await z(p,{url:e,params:r,route:{id:a.id}}),url:e,route:a})}if(l.type==="redirect")return l}const f=l==null?void 0:l.nodes;let _=!1;const v=c.map(async(p,w)=>{var ft;if(!p)return;const b=y.branch[w],E=f==null?void 0:f[w];if((!E||E.type==="skip")&&p[1]===(b==null?void 0:b.loader)&&!Vt(_,h,u,g,(ft=b.universal)==null?void 0:ft.uses,r))return b;if(_=!0,(E==null?void 0:E.type)==="error")throw E;return Lt({loader:p[1],url:e,params:r,route:a,parent:async()=>{var xt;const Tt={};for(let ut=0;ut<w;ut+=1)Object.assign(Tt,(xt=await v[ut])==null?void 0:xt.data);return Tt},server_data_node:Pt(E===void 0&&p[0]?{type:"skip"}:E??null,p[0]?b==null?void 0:b.server:void 0)})});for(const p of v)p.catch(()=>{});const A=[];for(let p=0;p<c.length;p+=1)if(c[p])try{A.push(await v[p])}catch(w){if(w instanceof Mt)return{type:"redirect",location:w.location};let b=Z(w),E;if(f!=null&&f.includes(w))b=w.status??b,E=w.error;else if(w instanceof at)E=w.body;else{if(await U.updated.check())return await C(e);E=await z(w,{params:r,url:e,route:{id:a.id}})}const T=await ie(p,A,o);return T?await K({url:e,params:r,branch:A.slice(0,T.idx).concat(T.node),status:b,error:E,route:a}):await le(e,{id:a.id},E,b)}else A.push(void 0);return await K({url:e,params:r,branch:A,status:200,error:null,route:a,form:n?void 0:null})}async function ie(t,n,e){for(;t--;)if(e[t]){let r=t;for(;!n[r];)r-=1;try{return{idx:r+1,node:{node:await e[t](),loader:e[t],data:{},server:null,universal:null}}}catch{continue}}}async function ct({status:t,error:n,url:e,route:r}){const a={};let o=null;if(F.server_loads[0]===0)try{const l=await fe(e,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;o=l.nodes[0]??null}catch{(e.origin!==Y||e.pathname!==location.pathname||It)&&await C(e)}const i=await Lt({loader:wt,url:e,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Pt(o)}),c={node:await Q(),loader:Q,universal:null,server:null,data:null};return await K({url:e,params:a,branch:[i,c],status:t,error:n,route:null})}function lt(t,n){if(!t||rt(t,I))return;let e;try{e=F.hooks.reroute({url:new URL(t)})??t.pathname}catch{return}const r=se(e);for(const a of ot){const o=a.exec(r);if(o)return{id:t.pathname+t.search,invalidating:n,route:a,params:_e(o),url:t}}}function se(t){return me(t.slice(I.length)||"/")}function ce({url:t,type:n,intent:e,delta:r}){let a=!1;const o=de(y,e,t,n);r!==void 0&&(o.navigation.delta=r);const s={...o.navigation,cancel:()=>{a=!0,o.reject(new Error("navigation cancelled"))}};return B||Qt.forEach(i=>i(s)),a?null:o}async function J({type:t,url:n,popped:e,keepfocus:r,noscroll:a,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:l=$t,block:u=$t}){const h=lt(n,!1),g=ce({url:n,type:t,delta:e==null?void 0:e.delta,intent:h});if(!g){u();return}const d=k,m=R;l(),B=!0,nt&&U.navigating.set(g.navigation),V=c;let f=h&&await Ut(h);if(!f){if(rt(n,I))return await C(n);f=await le(n,{id:null},await z(new Et(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,V!==c)return g.reject(new Error("navigation aborted")),!1;if(f.type==="redirect")if(i>=20)f=await ct({status:500,error:await z(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return st(new URL(f.location,n).href,{},i+1,c),!1;else f.props.page.status>=400&&await U.updated.check()&&await C(n);if(ne(),Rt(d),ae(m),f.props.page.url.pathname!==n.pathname&&(n.pathname=f.props.page.url.pathname),s=e?e.state:s,!e){const p=o?0:1,w={[D]:k+=p,[G]:R+=p,[zt]:s};(o?history.replaceState:history.pushState).call(history,w,"",n),o||Ye(k,R)}if(P=null,f.props.page.state=s,nt){y=f.state,f.props.page&&(f.props.page.url=n);const p=(await Promise.all(Je.map(w=>w(g.navigation)))).filter(w=>typeof w=="function");if(p.length>0){let w=function(){x=x.filter(b=>!p.includes(b))};p.push(w),x.push(...p)}N.$set(f.props),te=!0}else oe(f,vt);const{activeElement:_}=document;await _t();const v=e?e.scroll:a?St():null;if(Dt){const p=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));v?scrollTo(v.x,v.y):p?p.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==_&&document.activeElement!==document.body;!r&&!A&&bt(),Dt=!0,f.props.page&&(S=f.props.page),B=!1,t==="popstate"&&re(R),g.fulfil(void 0),x.forEach(p=>p(g.navigation)),U.navigating.set(null)}async function le(t,n,e,r){return t.origin===Y&&t.pathname===location.pathname&&!It?await ct({status:r,error:e,url:t,route:n}):await C(t)}function Ze(){let t;L.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(t),t=setTimeout(()=>{r(s,2)},20)});function n(o){r(o.composedPath()[0],1)}L.addEventListener("mousedown",n),L.addEventListener("touchstart",n,{passive:!0});const e=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(mt(s.target.href),e.unobserve(s.target))},{threshold:0});function r(o,s){const i=Wt(o,L);if(!i)return;const{url:c,external:l,download:u}=yt(i,I);if(l||u)return;const h=X(i);if(!h.reload)if(s<=h.preload_data){const g=lt(c,!1);g&&We(g)}else s<=h.preload_code&&mt(c.pathname)}function a(){e.disconnect();for(const o of L.querySelectorAll("a")){const{url:s,external:i,download:c}=yt(o,I);if(i||c)continue;const l=X(o);l.reload||(l.preload_code===W.viewport&&e.observe(o),l.preload_code===W.eager&&mt(s.pathname))}}x.push(a),a()}function z(t,n){if(t instanceof at)return t.body;const e=Z(t),r=ze(t);return F.hooks.handleError({error:t,event:n,status:e,message:r})??{message:r}}function Qe(t,n){pe(()=>(t.push(n),()=>{const e=t.indexOf(n);t.splice(e,1)}))}function cn(t){Qe(x,t)}function tn(t,n={}){return t=Yt(t),t.origin!==Y?Promise.reject(new Error("goto: invalid URL")):st(t,n,0)}function ln(t){if(typeof t=="function")tt.push(t);else{const{href:n}=new URL(t,location.href);tt.push(e=>e.href===n)}return ee()}function fn(){return it=!0,ee()}async function un(t){if(t.type==="error"){const n=new URL(location.href),{branch:e,route:r}=y;if(!r)return;const a=await ie(y.branch.length,e,r.errors);if(a){const o=await K({url:n,params:y.params,branch:e.slice(0,a.idx).concat(a.node),status:t.status??500,error:t.error,route:r});y=o.state,N.$set(o.props),_t().then(bt)}}else t.type==="redirect"?st(t.location,{invalidateAll:!0},0):(N.$set({form:null,page:{...S,form:t.data,status:t.status}}),await _t(),N.$set({form:t.data}),t.type==="success"&&bt())}function en(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",e=>{let r=!1;if(Ct(),!B){const a=de(y,void 0,null,"leave"),o={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};Qt.forEach(s=>s(o))}r?(e.preventDefault(),e.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ct()}),(n=navigator.connection)!=null&&n.saveData||Ze(),L.addEventListener("click",e=>{var g;if(e.button||e.which!==1||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)return;const r=Wt(e.composedPath()[0],L);if(!r)return;const{url:a,external:o,target:s,download:i}=yt(r,I);if(!a)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=X(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||i)return;if(o||c.reload){ce({url:a,type:"link"})?B=!0:e.preventDefault();return}const[u,h]=a.href.split("#");if(h!==void 0&&u===ht(location)){const[,d]=y.url.href.split("#");if(d===h){e.preventDefault(),h===""||h==="top"&&r.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=r.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(q=!0,Rt(k),t(a),!c.replace_state)return;q=!1}e.preventDefault(),J({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),L.addEventListener("submit",e=>{if(e.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(e.target),a=e.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const s=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(rt(s,I))return;const i=e.target,c=X(i);if(c.reload)return;e.preventDefault(),e.stopPropagation();const l=new FormData(i),u=a==null?void 0:a.getAttribute("name");u&&l.append(u,(a==null?void 0:a.getAttribute("value"))??""),s.search=new URLSearchParams(l).toString(),J({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async e=>{var r;if((r=e.state)!=null&&r[D]){const a=e.state[D];if(V={},a===k)return;const o=O[a],s=e.state[zt]??{},i=new URL(e.state[je]??location.href),c=e.state[G],l=ht(location)===ht(y.url);if(c===R&&(te||l)){t(i),O[k]=St(),o&&scrollTo(o.x,o.y),s!==S.state&&(S={...S,state:s},N.$set({page:S})),k=a;return}const h=a-k;await J({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{k=a,R=c},block:()=>{history.go(-h)},nav_token:V})}else if(!q){const a=new URL(location.href);t(a)}}),addEventListener("hashchange",()=>{q&&(q=!1,history.replaceState({...history.state,[D]:++k,[G]:R},"",location.href))});for(const e of document.querySelectorAll("link"))e.rel==="icon"&&(e.href=e.href);addEventListener("pageshow",e=>{e.persisted&&U.navigating.set(null)});function t(e){y.url=e,U.page.set({...S,url:e}),U.page.notify()}}async function nn(t,{status:n=200,error:e,node_ids:r,params:a,route:o,data:s,form:i}){It=!0;const c=new URL(location.href);({params:a={},route:o={id:null}}=lt(c,!1)||{});let l;try{const u=r.map(async(d,m)=>{const f=s[m];return f!=null&&f.uses&&(f.uses=ue(f.uses)),Lt({loader:F.nodes[d],url:c,params:a,route:o,parent:async()=>{const _={};for(let v=0;v<m;v+=1)Object.assign(_,(await u[v]).data);return _},server_data_node:Pt(f)})}),h=await Promise.all(u),g=ot.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let m=0;m<d.length;m++)d[m]||h.splice(m,0,void 0)}l=await K({url:c,params:a,branch:h,status:n,error:e,form:i,route:g??null})}catch(u){if(u instanceof Mt){await C(new URL(u.location,location.href));return}l=await ct({status:Z(u),error:await z(u,{url:c,params:a,route:o}),url:c,route:o})}l.props.page&&(l.props.page.state={}),oe(l,t)}async function fe(t,n){var a;const e=new URL(t);e.pathname=Ee(t.pathname),t.pathname.endsWith("/")&&e.searchParams.append(Ke,"1"),e.searchParams.append(Be,n.map(o=>o?"1":"0").join(""));const r=await Gt(e.href);if(!r.ok){let o;throw(a=r.headers.get("content-type"))!=null&&a.includes("application/json")?o=await r.json():r.status===404?o="Not Found":r.status===500&&(o="Internal Error"),new at(r.status,o)}return new Promise(async o=>{var h;const s=new Map,i=r.body.getReader(),c=new TextDecoder;function l(g){return Xt(g,{Promise:d=>new Promise((m,f)=>{s.set(d,{fulfil:m,reject:f})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const m=u.indexOf(`
`);if(m===-1)break;const f=JSON.parse(u.slice(0,m));if(u=u.slice(m+1),f.type==="redirect")return o(f);if(f.type==="data")(h=f.nodes)==null||h.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=ue(_.uses),_.data=l(_.data))}),o(f);else if(f.type==="chunk"){const{id:_,data:v,error:A}=f,p=s.get(_);s.delete(_),A?p.reject(l(A)):p.fulfil(l(v))}}}})}function ue(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url),search_params:new Set((t==null?void 0:t.search_params)??[])}}function bt(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const n=document.body,e=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),e!==null?n.setAttribute("tabindex",e):n.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let o=0;o<r.rangeCount;o+=1)a.push(r.getRangeAt(o));setTimeout(()=>{if(r.rangeCount===a.length){for(let o=0;o<r.rangeCount;o+=1){const s=a[o],i=r.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}r.removeAllRanges()}})}}}function de(t,n,e,r){var c,l;let a,o;const s=new Promise((u,h)=>{a=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:t.params,route:{id:((c=t.route)==null?void 0:c.id)??null},url:t.url},to:e&&{params:(n==null?void 0:n.params)??null,route:{id:((l=n==null?void 0:n.route)==null?void 0:l.id)??null},url:e},willUnload:!n,type:r,complete:s},fulfil:a,reject:o}}export{cn as a,I as b,un as c,ln as d,sn as e,tn as g,fn as i,on as p,U as s,At as w};
