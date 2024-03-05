import{s as E,A as v,B as y,b as h,f,h as l,i as T,j as _,n as w,e as k,a as D,t as Z,c as N,g as I,d as j,W as B,k as q,O as P,u as A,P as Q,Q as U,R as W,w as Y,S as z,_ as F}from"./scheduler.nTQPeTYQ.js";import{S as x,i as H,c as M,a as S,m as R,t as C,d as V,e as O}from"./index.CanFk0Lh.js";function G(o){let e,t,s,r;return{c(){e=v("svg"),t=v("path"),s=v("path"),r=v("rect"),this.h()},l(n){e=y(n,"svg",{class:!0,xmlns:!0,"aria-hidden":!0,fill:!0,focusable:!0,role:!0,width:!0,height:!0,preserveAspectRatio:!0,viewBox:!0});var a=h(e);t=y(a,"path",{d:!0,transform:!0}),h(t).forEach(f),s=y(a,"path",{d:!0,transform:!0}),h(s).forEach(f),r=y(a,"rect",{fill:!0,width:!0,height:!0}),h(r).forEach(f),a.forEach(f),this.h()},h(){l(t,"d","M28,10V28H10V10H28m0-2H10a2,2,0,0,0-2,2V28a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"),l(t,"transform","translate(0)"),l(s,"d","M4,18H2V4A2,2,0,0,1,4,2H18V4H4Z"),l(s,"transform","translate(0)"),l(r,"fill","none"),l(r,"width","32"),l(r,"height","32"),l(e,"class",o[0]),l(e,"xmlns","http://www.w3.org/2000/svg"),l(e,"aria-hidden","true"),l(e,"fill","currentColor"),l(e,"focusable","false"),l(e,"role","img"),l(e,"width","1em"),l(e,"height","1em"),l(e,"preserveAspectRatio","xMidYMid meet"),l(e,"viewBox","0 0 32 32")},m(n,a){T(n,e,a),_(e,t),_(e,s),_(e,r)},p(n,[a]){a&1&&l(e,"class",n[0])},i:w,o:w,d(n){n&&f(e)}}}function J(o,e,t){let{classNames:s=""}=e;return o.$$set=r=>{"classNames"in r&&t(0,s=r.classNames)},[s]}class K extends x{constructor(e){super(),H(this,e,J,G,E,{classNames:0})}}function L(o){let e,t,s,r,n;return{c(){e=k("div"),t=k("div"),s=D(),r=Z(o[1]),this.h()},l(a){e=N(a,"DIV",{class:!0});var u=h(e);t=N(u,"DIV",{class:!0,style:!0}),h(t).forEach(f),s=I(u),r=j(u,o[1]),u.forEach(f),this.h()},h(){l(t,"class","absolute bottom-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-4 border-t-0 border-black"),B(t,"border-left-color","transparent"),B(t,"border-right-color","transparent"),l(e,"class",n="pointer-events-none absolute rounded bg-black px-2 py-1 font-normal leading-tight text-white shadow transition-opacity "+o[2]+" "+o[0])},m(a,u){T(a,e,u),_(e,t),_(e,s),_(e,r)},p(a,[u]){u&2&&q(r,a[1]),u&5&&n!==(n="pointer-events-none absolute rounded bg-black px-2 py-1 font-normal leading-tight text-white shadow transition-opacity "+a[2]+" "+a[0])&&l(e,"class",n)},i:w,o:w,d(a){a&&f(e)}}}function X(o,e,t){let{classNames:s=""}=e,{label:r="Copied"}=e,{position:n="left-1/2 top-full transform -translate-x-1/2 translate-y-2"}=e;return o.$$set=a=>{"classNames"in a&&t(0,s=a.classNames),"label"in a&&t(1,r=a.label),"position"in a&&t(2,n=a.position)},[s,r,n]}class $ extends x{constructor(e){super(),H(this,e,X,L,E,{classNames:0,label:1,position:2})}}function ee(o){let e,t;return e=new K({}),{c(){M(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,r){R(e,s,r),t=!0},i(s){t||(C(e.$$.fragment,s),t=!0)},o(s){V(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function te(o){let e,t,s,r,n,a,u,m;const p=o[5].default,g=P(p,o,o[4],null),i=g||ee();return r=new $({props:{classNames:o[1]?"opacity-100":"opacity-0"}}),{c(){e=k("button"),t=k("div"),i&&i.c(),s=D(),M(r.$$.fragment),this.h()},l(c){e=N(c,"BUTTON",{class:!0,title:!0,type:!0});var d=h(e);t=N(d,"DIV",{class:!0});var b=h(t);i&&i.l(b),s=I(b),S(r.$$.fragment,b),b.forEach(f),d.forEach(f),this.h()},h(){l(t,"class","relative"),l(e,"class",n="btn rounded-lg border border-gray-200 px-2 py-2 text-sm shadow-sm transition-all hover:border-gray-300 active:shadow-inner dark:border-gray-700 dark:hover:border-gray-500 "+o[0]),l(e,"title","Copy to clipboard"),l(e,"type","button")},m(c,d){T(c,e,d),_(e,t),i&&i.m(t,null),_(t,s),R(r,t,null),a=!0,u||(m=[A(e,"click",o[6]),A(e,"click",o[2])],u=!0)},p(c,[d]){g&&g.p&&(!a||d&16)&&Q(g,p,c,c[4],a?W(p,c[4],d,null):U(c[4]),null);const b={};d&2&&(b.classNames=c[1]?"opacity-100":"opacity-0"),r.$set(b),(!a||d&1&&n!==(n="btn rounded-lg border border-gray-200 px-2 py-2 text-sm shadow-sm transition-all hover:border-gray-300 active:shadow-inner dark:border-gray-700 dark:hover:border-gray-500 "+c[0]))&&l(e,"class",n)},i(c){a||(C(i,c),C(r.$$.fragment,c),a=!0)},o(c){V(i,c),V(r.$$.fragment,c),a=!1},d(c){c&&f(e),i&&i.d(c),O(r),u=!1,Y(m)}}}function ae(o,e,t){let{$$slots:s={},$$scope:r}=e,{classNames:n=""}=e,{value:a}=e,u=!1,m;const p=async()=>{try{await navigator.clipboard.writeText(a),t(1,u=!0),m&&clearTimeout(m),m=setTimeout(()=>{t(1,u=!1)},1e3)}catch(i){console.error(i)}};z(()=>{m&&clearTimeout(m)});function g(i){F.call(this,o,i)}return o.$$set=i=>{"classNames"in i&&t(0,n=i.classNames),"value"in i&&t(3,a=i.value),"$$scope"in i&&t(4,r=i.$$scope)},[n,u,p,a,r,s,g]}class le extends x{constructor(e){super(),H(this,e,ae,te,E,{classNames:0,value:3})}}export{le as C};