function k(){}const st=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function H(){return Object.create(null)}function x(t){t.forEach(K)}function Q(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let j;function qt(t,e){return j||(j=document.createElement("a")),j.href=e,t===j.href}function ot(t){return Object.keys(t).length===0}function U(t,...e){if(t==null)return k;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Tt(t){let e;return U(t,n=>e=n)(),e}function zt(t,e,n){t.$$.on_destroy.push(U(e,n))}function Bt(t,e,n,r){if(t){const c=V(t,e,n,r);return t[0](c)}}function V(t,e,n,r){return t[1]&&r?lt(n.ctx.slice(),t[1](r(e))):n.ctx}function Lt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],i=Math.max(e.dirty.length,c.length);for(let l=0;l<i;l+=1)o[l]=e.dirty[l]|c[l];return o}return e.dirty|c}return e.dirty}function Ft(t,e,n,r,c,o){if(c){const i=V(e,n,r,o);t.p(i,c)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const W=typeof window!="undefined";let ut=W?()=>window.performance.now():()=>Date.now(),L=W?t=>requestAnimationFrame(t):k;const b=new Set;function X(t){b.forEach(e=>{e.c(t)||(b.delete(e),e.f())}),b.size!==0&&L(X)}function at(t){let e;return b.size===0&&L(X),{promise:new Promise(n=>{b.add(e={c:t,f:n})}),abort(){b.delete(e)}}}let D=!1;function ft(){D=!0}function _t(){D=!1}function dt(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function ht(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&s.push(_)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,_=(c>0&&e[n[c]].claim_order<=u?c+1:dt(1,c,a=>e[n[a]].claim_order,u))-1;r[s]=n[_]+1;const f=_+1;n[f]=s,c=Math.max(f,c)}const o=[],i=[];let l=e.length-1;for(let s=n[c]+1;s!=0;s=r[s-1]){for(o.push(e[s-1]);l>=s;l--)i.push(e[l]);l--}for(;l>=0;l--)i.push(e[l]);o.reverse(),i.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<i.length;s++){for(;u<o.length&&i[s].claim_order>=o[u].claim_order;)u++;const _=u<o.length?o[u]:null;t.insertBefore(i[s],_)}}function mt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function pt(t){const e=Z("style");return yt(Y(t),e),e.sheet}function yt(t,e){mt(t.head||t,e)}function gt(t,e){if(D){for(ht(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function It(t,e,n){D&&!n?gt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function bt(t){t.parentNode.removeChild(t)}function Z(t){return document.createElement(t)}function F(t){return document.createTextNode(t)}function Gt(){return F(" ")}function Jt(){return F("")}function Kt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Qt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ut(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function xt(t){return Array.from(t.childNodes)}function $t(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function tt(t,e,n,r,c=!1){$t(t);const o=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const l=t[i];if(e(l)){const s=n(l);return s===void 0?t.splice(i,1):t[i]=s,c||(t.claim_info.last_index=i),l}}for(let i=t.claim_info.last_index-1;i>=0;i--){const l=t[i];if(e(l)){const s=n(l);return s===void 0?t.splice(i,1):t[i]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,l}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function wt(t,e,n,r){return tt(t,c=>c.nodeName===e,c=>{const o=[];for(let i=0;i<c.attributes.length;i++){const l=c.attributes[i];n[l.name]||o.push(l.name)}o.forEach(i=>c.removeAttribute(i))},()=>r(e))}function Vt(t,e,n){return wt(t,e,n,Z)}function vt(t,e){return tt(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>F(e),!0)}function Wt(t){return vt(t," ")}function Xt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Yt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function et(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const c=document.createEvent("CustomEvent");return c.initCustomEvent(t,n,r,e),c}const M=new Map;let P=0;function Et(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function kt(t,e){const n={stylesheet:pt(e),rules:{}};return M.set(t,n),n}function I(t,e,n,r,c,o,i,l=0){const s=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=s){const g=e+(n-e)*o(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${Et(_)}_${l}`,a=Y(t),{stylesheet:d,rules:h}=M.get(a)||kt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${c}ms 1 both`,P+=1,f}function Nt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),c=n.length-r.length;c&&(t.style.animation=r.join(", "),P-=c,P||jt())}function jt(){L(()=>{P||(M.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),M.clear())})}let E;function v(t){E=t}function O(){if(!E)throw new Error("Function called outside component initialization");return E}function Zt(t){O().$$.on_mount.push(t)}function te(t){O().$$.after_update.push(t)}function ee(){const t=O();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const o=et(e,n,{cancelable:r});return c.slice().forEach(i=>{i.call(t,o)}),!o.defaultPrevented}return!0}}function ne(t,e){return O().$$.context.set(t,e),e}function ie(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const w=[],G=[],C=[],J=[],nt=Promise.resolve();let B=!1;function it(){B||(B=!0,nt.then(rt))}function re(){return it(),nt}function R(t){C.push(t)}const T=new Set;let A=0;function rt(){const t=E;do{for(;A<w.length;){const e=w[A];A++,v(e),At(e.$$)}for(v(null),w.length=0,A=0;G.length;)G.pop()();for(let e=0;e<C.length;e+=1){const n=C[e];T.has(n)||(T.add(n),n())}C.length=0}while(w.length);for(;J.length;)J.pop()();B=!1,T.clear(),v(t)}function At(t){if(t.fragment!==null){t.update(),x(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}let $;function Ct(){return $||($=Promise.resolve(),$.then(()=>{$=null})),$}function z(t,e,n){t.dispatchEvent(et(`${e?"intro":"outro"}${n}`))}const S=new Set;let m;function ce(){m={r:0,c:[],p:m}}function se(){m.r||x(m.c),m=m.p}function St(t,e){t&&t.i&&(S.delete(t),t.i(e))}function le(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),m.c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const Mt={duration:0};function oe(t,e,n,r){let c=e(t,n),o=r?0:1,i=null,l=null,s=null;function u(){s&&Nt(t,s)}function _(a,d){const h=a.b-o;return d*=Math.abs(h),{a:o,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=st,tick:p=k,css:g}=c||Mt,q={start:ut()+d,b:a};a||(q.group=m,m.r+=1),i||l?l=q:(g&&(u(),s=I(t,o,a,h,d,y,g)),a&&p(0,1),i=_(q,h),R(()=>z(t,a,"start")),at(N=>{if(l&&N>l.start&&(i=_(l,h),l=null,z(t,i.b,"start"),g&&(u(),s=I(t,o,i.b,i.duration,0,y,c.css))),i){if(N>=i.end)p(o=i.b,1-o),z(t,i.b,"end"),l||(i.b?u():--i.group.r||x(i.group.c)),i=null;else if(N>=i.start){const ct=N-i.start;o=i.a+i.d*y(ct/i.duration),p(o,1-o)}}return!!(i||l)}))}return{run(a){Q(c)?Ct().then(()=>{c=c(),f(a)}):f(a)},end(){u(),i=l=null}}}function ue(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const i=t[o],l=e[o];if(l){for(const s in i)s in l||(r[s]=1);for(const s in l)c[s]||(n[s]=l[s],c[s]=1);t[o]=l}else for(const s in i)c[s]=1}for(const i in r)i in n||(n[i]=void 0);return n}function ae(t){return typeof t=="object"&&t!==null?t:{}}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function Pt(t,e,n,r){const{fragment:c,on_mount:o,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,n),r||R(()=>{const s=o.map(K).filter(Q);i?i.push(...s):x(s),t.$$.on_mount=[]}),l.forEach(R)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(x(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Dt(t,e){t.$$.dirty[0]===-1&&(w.push(t),it(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,r,c,o,i,l=[-1]){const s=E;v(t);const u=t.$$={fragment:null,ctx:null,props:o,update:k,not_equal:c,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:H(),dirty:l,skip_bound:!1,root:e.target||s.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&c(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Dt(t,f)),a}):[],u.update(),_=!0,x(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){ft();const f=xt(e.target);u.fragment&&u.fragment.l(f),f.forEach(bt)}else u.fragment&&u.fragment.c();e.intro&&St(t.$$.fragment),Pt(t,e.target,e.anchor,e.customElement),_t(),rt()}v(s)}class he{$destroy(){Rt(this,1),this.$destroy=k}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!ot(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{ae as A,Rt as B,lt as C,re as D,k as E,Bt as F,Ft as G,Ht as H,Lt as I,gt as J,Tt as K,zt as L,Kt as M,ee as N,st as O,Qt as P,R as Q,oe as R,he as S,x as T,ie as U,qt as V,xt as a,Ut as b,Vt as c,bt as d,Z as e,Yt as f,It as g,vt as h,de as i,Xt as j,Gt as k,Jt as l,Wt as m,ce as n,le as o,se as p,St as q,ne as r,Ot as s,F as t,te as u,Zt as v,fe as w,_e as x,Pt as y,ue as z};
