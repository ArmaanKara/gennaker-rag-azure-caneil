import{s as f,m as c,p as l}from"../chunks/scheduler.nTQPeTYQ.js";import{S as u,i as _,b as d,c as g,a as p,m as b,t as h,d as S,e as k}from"../chunks/index.CanFk0Lh.js";import{A}from"../chunks/AssistantSettings.DWE96nIs.js";function q(n){let s,a,e;function o(t){n[2](t)}let i={models:n[1].models};return n[0]!==void 0&&(i.form=n[0]),s=new A({props:i}),c.push(()=>d(s,"form",o)),{c(){g(s.$$.fragment)},l(t){p(s.$$.fragment,t)},m(t,r){b(s,t,r),e=!0},p(t,[r]){const m={};r&2&&(m.models=t[1].models),!a&&r&1&&(a=!0,m.form=t[0],l(()=>a=!1)),s.$set(m)},i(t){e||(h(s.$$.fragment,t),e=!0)},o(t){S(s.$$.fragment,t),e=!1},d(t){k(s,t)}}}function w(n,s,a){let{data:e}=s,{form:o}=s;function i(t){o=t,a(0,o)}return n.$$set=t=>{"data"in t&&a(1,e=t.data),"form"in t&&a(0,o=t.form)},[o,e,i]}class v extends u{constructor(s){super(),_(this,s,w,q,f,{data:1,form:0})}}export{v as component};