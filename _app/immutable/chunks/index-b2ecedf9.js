function w(){}const lt=t=>t;function ut(t,e){for(const n in e)t[n]=e[n];return t}function W(t){return t()}function G(){return Object.create(null)}function v(t){t.forEach(W)}function L(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let C;function Tt(t,e){return C||(C=document.createElement("a")),C.href=e,t===C.href}function at(t){return Object.keys(t).length===0}function U(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function zt(t){let e;return U(t,n=>e=n)(),e}function Bt(t,e,n){t.$$.on_destroy.push(U(e,n))}function Lt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?ut(n.ctx.slice(),t[1](i(e))):n.ctx}function Ft(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Ht(t,e,n,i,r,u){if(r){const s=V(e,n,i,u);t.p(s,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const X=typeof window<"u";let ft=X?()=>window.performance.now():()=>Date.now(),F=X?t=>requestAnimationFrame(t):w;const $=new Set;function Y(t){$.forEach(e=>{e.c(t)||($.delete(e),e.f())}),$.size!==0&&F(Y)}function _t(t){let e;return $.size===0&&F(Y),{promise:new Promise(n=>{$.add(e={c:t,f:n})}),abort(){$.delete(e)}}}let O=!1;function dt(){O=!0}function ht(){O=!1}function mt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function pt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:mt(1,r,h=>e[n[h]].claim_order,l))-1;i[o]=n[_]+1;const a=_+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);u.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<u.length&&s[o].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(s[o],_)}}function yt(t,e){t.appendChild(e)}function Z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function gt(t){const e=et("style");return bt(Z(t),e),e.sheet}function bt(t,e){return yt(t.head||t,e),e.sheet}function xt(t,e){if(O){for(pt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){O&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function tt(t){t.parentNode&&t.parentNode.removeChild(t)}function et(t){return document.createElement(t)}function H(t){return document.createTextNode(t)}function Jt(){return H(" ")}function Kt(){return H("")}function Qt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Wt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $t(t){return Array.from(t.childNodes)}function wt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function nt(t,e,n,i,r=!1){wt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function vt(t,e,n,i){return nt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||u.push(c.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Vt(t,e,n){return vt(t,e,n,et)}function Et(t,e){return nt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>H(e),!0)}function Xt(t){return Et(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function it(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function te(t,e){return new t(e)}const M=new Map;let P=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:gt(e),rules:{}};return M.set(t,n),n}function J(t,e,n,i,r,u,s,c=0){const o=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=o){const g=e+(n-e)*u(y);l+=y*100+`%{${s(g,1-g)}}
`}const _=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(_)}_${c}`,h=Z(t),{stylesheet:f,rules:d}=M.get(h)||kt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,P+=1,a}function At(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),P-=r,P||Ct())}function Ct(){F(()=>{P||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&tt(e)}),M.clear())})}let k;function N(t){k=t}function I(){if(!k)throw new Error("Function called outside component initialization");return k}function ee(t){I().$$.on_mount.push(t)}function ne(t){I().$$.after_update.push(t)}function ie(){const t=I();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=it(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}function re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const x=[],K=[],S=[],Q=[],rt=Promise.resolve();let B=!1;function st(){B||(B=!0,rt.then(ct))}function se(){return st(),rt}function D(t){S.push(t)}const T=new Set;let b=0;function ct(){if(b!==0)return;const t=k;do{try{for(;b<x.length;){const e=x[b];b++,N(e),St(e.$$)}}catch(e){throw x.length=0,b=0,e}for(N(null),x.length=0,b=0;K.length;)K.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];T.has(n)||(T.add(n),n())}S.length=0}while(x.length);for(;Q.length;)Q.pop()();B=!1,T.clear(),N(t)}function St(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let E;function jt(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function z(t,e,n){t.dispatchEvent(it(`${e?"intro":"outro"}${n}`))}const j=new Set;let p;function ce(){p={r:0,c:[],p}}function oe(){p.r||v(p.c),p=p.p}function Mt(t,e){t&&t.i&&(j.delete(t),t.i(e))}function le(t,e,n,i){if(t&&t.o){if(j.has(t))return;j.add(t),p.c.push(()=>{j.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Pt={duration:0};function ue(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,c=null,o=null,l=null;function _(){l&&At(t,l)}function a(f,d){const m=f.b-s;return d*=Math.abs(m),{a:s,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:y=lt,tick:g=w,css:q}=u||Pt,R={start:ft()+d,b:f};f||(R.group=p,p.r+=1),c||o?o=R:(q&&(_(),l=J(t,s,f,m,d,y,q)),f&&g(0,1),c=a(R,m),D(()=>z(t,f,"start")),_t(A=>{if(o&&A>o.start&&(c=a(o,m),o=null,z(t,c.b,"start"),q&&(_(),l=J(t,s,c.b,c.duration,0,y,u.css))),c){if(A>=c.end)g(s=c.b,1-s),z(t,c.b,"end"),o||(c.b?_():--c.group.r||v(c.group.c)),c=null;else if(A>=c.start){const ot=A-c.start;s=c.a+c.d*y(ot/c.duration),g(s,1-s)}}return!!(c||o)}))}return{run(f){L(u)?jt().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),c=o=null}}}function ae(t){t&&t.c()}function fe(t,e){t&&t.l(e)}function Dt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||D(()=>{const s=t.$$.on_mount.map(W).filter(L);t.$$.on_destroy?t.$$.on_destroy.push(...s):v(s),t.$$.on_mount=[]}),u.forEach(D)}function Ot(t,e){const n=t.$$;n.fragment!==null&&(v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function qt(t,e){t.$$.dirty[0]===-1&&(x.push(t),st(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function _e(t,e,n,i,r,u,s,c=[-1]){const o=k;N(t);const l=t.$$={fragment:null,ctx:[],props:u,update:w,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:G(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),_&&qt(t,a)),h}):[],l.update(),_=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){dt();const a=$t(e.target);l.fragment&&l.fragment.l(a),a.forEach(tt)}else l.fragment&&l.fragment.c();e.intro&&Mt(t.$$.fragment),Dt(t,e.target,e.anchor,e.customElement),ht(),ct()}N(o)}class de{$destroy(){Ot(this,1),this.$destroy=w}$on(e,n){if(!L(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ot as A,se as B,w as C,Lt as D,Ht as E,It as F,Ft as G,xt as H,Bt as I,zt as J,Qt as K,ie as L,lt as M,Tt as N,Wt as O,D as P,ue as Q,v as R,de as S,re as T,Jt as a,Gt as b,Xt as c,oe as d,Kt as e,Mt as f,ce as g,tt as h,_e as i,ne as j,et as k,Vt as l,$t as m,Ut as n,ee as o,Zt as p,H as q,Et as r,Rt as s,le as t,Yt as u,K as v,te as w,ae as x,fe as y,Dt as z};
