import{K as Ht,S as G,i as O,s as U,e as c,t as d,k as w,c as u,a as f,h as v,d as n,m as x,b as a,g as T,J as t,j as Mt,E as y,L as _e,M as de,N as Nt,O as Gt,P as Ot,Q as Ut,R as Ft,f as Lt,w as te,x as se,y as re,q as ne,o as oe,B as ae}from"../chunks/index-e82c7559.js";import{w as dt}from"../chunks/index-51387811.js";const vt="https://api.howsthevolu.me",Wt=()=>{if(typeof localStorage!="undefined"){const l=localStorage.getItem("localCount");if(l==null)return 0;{const e=parseInt(l,10);return isNaN(e)?0:e}}else return 0},ft=dt(Wt()),Dt=async()=>{try{const l=await fetch(`${vt}/count`);if(l.ok){const e=await l.json(),s=parseInt(e.count,10);if(!isNaN(s))return s}return 0}catch{return 0}},Jt=async()=>{ke.update(l=>l+1),await fetch(`${vt}/increment`,{method:"POST"})},ke=dt(0,l=>{const e=setInterval(async()=>{const s=await Dt();let r=Ht(ke);const o=setInterval(()=>{r>=s?clearInterval(o):(r+=1,l(r))},10)},2e4);return()=>{clearInterval(e)}}),Ie=dt(0);function Kt(l){let e,s,r,o,i,h=l[0].toLocaleString()+"",_;return{c(){e=c("div"),s=c("p"),r=d("Volumes checked across the world:"),o=w(),i=c("h1"),_=d(h),this.h()},l(m){e=u(m,"DIV",{class:!0});var k=f(e);s=u(k,"P",{class:!0});var g=f(s);r=v(g,"Volumes checked across the world:"),g.forEach(n),o=x(k),i=u(k,"H1",{class:!0});var b=f(i);_=v(b,h),b.forEach(n),k.forEach(n),this.h()},h(){a(s,"class","svelte-hbjrcb"),a(i,"class","svelte-hbjrcb"),a(e,"class","gl-count-wrapper svelte-hbjrcb")},m(m,k){T(m,e,k),t(e,s),t(s,r),t(e,o),t(e,i),t(i,_)},p(m,[k]){k&1&&h!==(h=m[0].toLocaleString()+"")&&Mt(_,h)},i:y,o:y,d(m){m&&n(e)}}}function Yt(l,e,s){let r;return _e(l,ke,o=>s(0,r=o)),[r]}class Qt extends G{constructor(e){super(),O(this,e,Yt,Kt,U,{})}}function Xt(l){let e,s,r=l[0].toLocaleString()+"",o;return{c(){e=c("p"),s=d("Volumes checked: "),o=d(r),this.h()},l(i){e=u(i,"P",{class:!0});var h=f(e);s=v(h,"Volumes checked: "),o=v(h,r),h.forEach(n),this.h()},h(){a(e,"class","svelte-99ahma")},m(i,h){T(i,e,h),t(e,s),t(e,o)},p(i,[h]){h&1&&r!==(r=i[0].toLocaleString()+"")&&Mt(o,r)},i:y,o:y,d(i){i&&n(e)}}}function Zt(l,e,s){let r;return _e(l,ft,o=>s(0,r=o)),[r]}class es extends G{constructor(e){super(),O(this,e,Zt,Xt,U,{})}}function ts(l){let e,s,r,o;return{c(){e=c("button"),s=d("Check the volume"),this.h()},l(i){e=u(i,"BUTTON",{class:!0});var h=f(e);s=v(h,"Check the volume"),h.forEach(n),this.h()},h(){a(e,"class","svelte-18jim5p")},m(i,h){T(i,e,h),t(e,s),r||(o=de(e,"click",l[0]),r=!0)},p:y,i:y,o:y,d(i){i&&n(e),r=!1,o()}}}function zt(l){return Math.floor(Math.random()*(l+1))}function ss(l,e,s){let r,o;_e(l,ft,g=>s(4,r=g)),_e(l,Ie,g=>s(5,o=g));let i,h;function _(){i!==void 0&&clearTimeout(i),h!=null&&clearInterval(h),i=setTimeout(()=>{let g=o;h=setInterval(()=>{g<=0?clearInterval(h):(g-=.5,Ie.set(g))},50)},5*1e3),Ie.update(g=>{const b=g+.25;return Math.min(b,100)}),ft.update(g=>g+1),localStorage.setItem("localCount",r.toString()),Jt()}let m;async function k(){_();const g=zt(6),b=new Audio;if(b.crossOrigin="anonymous",b.src=`${vt}/sound/${g}`,m==null&&(m=new AudioContext),m!=null){const E=m.createMediaElementSource(b),$=zt(2)-1,C=new StereoPannerNode(m,{pan:$});E.connect(C).connect(m.destination)}b.play()}return[k]}class rs extends G{constructor(e){super(),O(this,e,ss,ts,U,{})}}function ns(l){let e,s,r,o;return{c(){e=c("button"),s=d("i"),this.h()},l(i){e=u(i,"BUTTON",{class:!0});var h=f(e);s=v(h,"i"),h.forEach(n),this.h()},h(){a(e,"class","svelte-1cu6fj3")},m(i,h){T(i,e,h),t(e,s),r||(o=de(e,"click",l[0]),r=!0)},p:y,i:y,o:y,d(i){i&&n(e),r=!1,o()}}}function os(l){const e=Nt();function s(){e("message")}return[s]}class as extends G{constructor(e){super(),O(this,e,os,ns,U,{})}}function ls(l){let e,s,r,o,i,h,_,m,k,g,b,E,$,C,j,V,p,I,q,Ce,Se,F,Te,je,Ve,B,Pe,W,Re,Ae,Be,L,le,Le,ze,z,Me,J,De,He,Ne,P,ie,Ge,Oe,ce,Ue,Fe,S,ve,K,Y,We,Je,Ke,pe,M,Ye,Q,Qe,Xe,Ze,me,D,et,X,tt,st,rt,be,R,nt,Z,ot,at,ee,lt,it,ct,pt;return{c(){e=c("div"),s=c("div"),r=c("div"),o=c("button"),i=d("\u2715"),h=w(),_=c("div"),m=c("h1"),k=d("What is this?"),g=w(),b=c("p"),E=d("This is a site for "),$=c("a"),C=d("IRyS"),j=d(", one of Hololive's resident "),V=c("strike"),p=d("pons"),I=d(` VSingers! Inspired by
					`),q=c("a"),Ce=d("impomu"),Se=d(`
					and `),F=c("a"),Te=d("faunaraara"),je=d("."),Ve=w(),B=c("p"),Pe=d("For those interested in the source code for both the site and server, it can be found "),W=c("a"),Re=d("over here on GitHub"),Ae=d("."),Be=w(),L=c("div"),le=c("h1"),Le=d("Where's the volume?"),ze=w(),z=c("p"),Me=d("All voice clips and their sources can also be found in the "),J=c("a"),De=d("GitHub repo"),He=d("."),Ne=w(),P=c("div"),ie=c("h1"),Ge=d("Credits"),Oe=w(),ce=c("p"),Ue=d("Lots of stuff was used or referred to in order to make this site:"),Fe=w(),S=c("ul"),ve=c("li"),K=c("p"),Y=c("a"),We=d("Chroneco's emotes and tweet"),Je=d(" were used for the favicon and inspiration for theming."),Ke=w(),pe=c("li"),M=c("p"),Ye=d("The font used throughout is "),Q=c("a"),Qe=d("Riffic Free Bold"),Xe=d("."),Ze=w(),me=c("li"),D=c("p"),et=d("The frontend is written in "),X=c("a"),tt=d("Svelte"),st=d("."),rt=w(),be=c("li"),R=c("p"),nt=d("The backend is written in "),Z=c("a"),ot=d("Rust"),at=d(`, using the
							`),ee=c("a"),lt=d("axum framework"),it=d("."),this.h()},l(ge){e=u(ge,"DIV",{id:!0,class:!0});var $e=f(e);s=u($e,"DIV",{class:!0});var mt=f(s);r=u(mt,"DIV",{class:!0});var H=f(r);o=u(H,"BUTTON",{class:!0});var bt=f(o);i=v(bt,"\u2715"),bt.forEach(n),h=x(H),_=u(H,"DIV",{class:!0});var ue=f(_);m=u(ue,"H1",{class:!0});var gt=f(m);k=v(gt,"What is this?"),gt.forEach(n),g=x(ue),b=u(ue,"P",{class:!0});var A=f(b);E=v(A,"This is a site for "),$=u(A,"A",{href:!0,class:!0});var _t=f($);C=v(_t,"IRyS"),_t.forEach(n),j=v(A,", one of Hololive's resident "),V=u(A,"STRIKE",{});var kt=f(V);p=v(kt,"pons"),kt.forEach(n),I=v(A,` VSingers! Inspired by
					`),q=u(A,"A",{href:!0,class:!0});var $t=f(q);Ce=v($t,"impomu"),$t.forEach(n),Se=v(A,`
					and `),F=u(A,"A",{href:!0,class:!0});var yt=f(F);Te=v(yt,"faunaraara"),yt.forEach(n),je=v(A,"."),A.forEach(n),Ve=x(ue),B=u(ue,"P",{class:!0});var ye=f(B);Pe=v(ye,"For those interested in the source code for both the site and server, it can be found "),W=u(ye,"A",{href:!0,class:!0});var wt=f(W);Re=v(wt,"over here on GitHub"),wt.forEach(n),Ae=v(ye,"."),ye.forEach(n),ue.forEach(n),Be=x(H),L=u(H,"DIV",{class:!0});var we=f(L);le=u(we,"H1",{class:!0});var xt=f(le);Le=v(xt,"Where's the volume?"),xt.forEach(n),ze=x(we),z=u(we,"P",{class:!0});var xe=f(z);Me=v(xe,"All voice clips and their sources can also be found in the "),J=u(xe,"A",{href:!0,class:!0});var Et=f(J);De=v(Et,"GitHub repo"),Et.forEach(n),He=v(xe,"."),xe.forEach(n),we.forEach(n),Ne=x(H),P=u(H,"DIV",{class:!0});var fe=f(P);ie=u(fe,"H1",{class:!0});var qt=f(ie);Ge=v(qt,"Credits"),qt.forEach(n),Oe=x(fe),ce=u(fe,"P",{class:!0});var It=f(ce);Ue=v(It,"Lots of stuff was used or referred to in order to make this site:"),It.forEach(n),Fe=x(fe),S=u(fe,"UL",{class:!0});var N=f(S);ve=u(N,"LI",{});var Ct=f(ve);K=u(Ct,"P",{class:!0});var ut=f(K);Y=u(ut,"A",{href:!0,class:!0});var St=f(Y);We=v(St,"Chroneco's emotes and tweet"),St.forEach(n),Je=v(ut," were used for the favicon and inspiration for theming."),ut.forEach(n),Ct.forEach(n),Ke=x(N),pe=u(N,"LI",{});var Tt=f(pe);M=u(Tt,"P",{class:!0});var Ee=f(M);Ye=v(Ee,"The font used throughout is "),Q=u(Ee,"A",{href:!0,class:!0});var jt=f(Q);Qe=v(jt,"Riffic Free Bold"),jt.forEach(n),Xe=v(Ee,"."),Ee.forEach(n),Tt.forEach(n),Ze=x(N),me=u(N,"LI",{});var Vt=f(me);D=u(Vt,"P",{class:!0});var qe=f(D);et=v(qe,"The frontend is written in "),X=u(qe,"A",{href:!0,class:!0});var Pt=f(X);tt=v(Pt,"Svelte"),Pt.forEach(n),st=v(qe,"."),qe.forEach(n),Vt.forEach(n),rt=x(N),be=u(N,"LI",{});var Rt=f(be);R=u(Rt,"P",{class:!0});var he=f(R);nt=v(he,"The backend is written in "),Z=u(he,"A",{href:!0,class:!0});var At=f(Z);ot=v(At,"Rust"),At.forEach(n),at=v(he,`, using the
							`),ee=u(he,"A",{href:!0,class:!0});var Bt=f(ee);lt=v(Bt,"axum framework"),Bt.forEach(n),it=v(he,"."),he.forEach(n),Rt.forEach(n),N.forEach(n),fe.forEach(n),H.forEach(n),mt.forEach(n),$e.forEach(n),this.h()},h(){a(o,"class","close svelte-1q6bh8k"),a(m,"class","svelte-1q6bh8k"),a($,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),a($,"class","svelte-1q6bh8k"),a(q,"href","https://impomu.com/"),a(q,"class","svelte-1q6bh8k"),a(F,"href","https://faunaraara.com/"),a(F,"class","svelte-1q6bh8k"),a(b,"class","svelte-1q6bh8k"),a(W,"href","https://github.com/Pyreko/hows-the-volume"),a(W,"class","svelte-1q6bh8k"),a(B,"class","svelte-1q6bh8k"),a(_,"class","text-block svelte-1q6bh8k"),a(le,"class","svelte-1q6bh8k"),a(J,"href","https://github.com/Pyreko/hows-the-volume/tree/main/server/assets"),a(J,"class","svelte-1q6bh8k"),a(z,"class","svelte-1q6bh8k"),a(L,"class","text-block svelte-1q6bh8k"),a(ie,"class","svelte-1q6bh8k"),a(ce,"class","svelte-1q6bh8k"),a(Y,"href","https://twitter.com/chrone_co/status/1426878310328332292"),a(Y,"class","svelte-1q6bh8k"),a(K,"class","svelte-1q6bh8k"),a(Q,"href","https://www.fontspring.com/fonts/inky-type/riffic"),a(Q,"class","svelte-1q6bh8k"),a(M,"class","svelte-1q6bh8k"),a(X,"href","https://svelte.dev/"),a(X,"class","svelte-1q6bh8k"),a(D,"class","svelte-1q6bh8k"),a(Z,"href","https://www.rust-lang.org/"),a(Z,"class","svelte-1q6bh8k"),a(ee,"href","https://github.com/tokio-rs/axum"),a(ee,"class","svelte-1q6bh8k"),a(R,"class","svelte-1q6bh8k"),a(S,"class","svelte-1q6bh8k"),a(P,"class","text-block svelte-1q6bh8k"),a(r,"class","modal-body svelte-1q6bh8k"),a(s,"class","modal-wrapper svelte-1q6bh8k"),a(e,"id","modal-background"),a(e,"class","svelte-1q6bh8k")},m(ge,$e){T(ge,e,$e),t(e,s),t(s,r),t(r,o),t(o,i),t(r,h),t(r,_),t(_,m),t(m,k),t(_,g),t(_,b),t(b,E),t(b,$),t($,C),t(b,j),t(b,V),t(V,p),t(b,I),t(b,q),t(q,Ce),t(b,Se),t(b,F),t(F,Te),t(b,je),t(_,Ve),t(_,B),t(B,Pe),t(B,W),t(W,Re),t(B,Ae),t(r,Be),t(r,L),t(L,le),t(le,Le),t(L,ze),t(L,z),t(z,Me),t(z,J),t(J,De),t(z,He),t(r,Ne),t(r,P),t(P,ie),t(ie,Ge),t(P,Oe),t(P,ce),t(ce,Ue),t(P,Fe),t(P,S),t(S,ve),t(ve,K),t(K,Y),t(Y,We),t(K,Je),t(S,Ke),t(S,pe),t(pe,M),t(M,Ye),t(M,Q),t(Q,Qe),t(M,Xe),t(S,Ze),t(S,me),t(me,D),t(D,et),t(D,X),t(X,tt),t(D,st),t(S,rt),t(S,be),t(be,R),t(R,nt),t(R,Z),t(Z,ot),t(R,at),t(R,ee),t(ee,lt),t(R,it),ct||(pt=[de(window,"keydown",is),de(o,"click",ht),de(r,"click",Gt(l[0])),de(e,"click",ht)],ct=!0)},p:y,i:y,o:y,d(ge){ge&&n(e),ct=!1,Ot(pt)}}}function ht(){const l=document.getElementById("modal-background");l!=null&&(l.style.display="none")}function is(l){l.key==="Escape"&&ht()}function cs(l){function e(s){Ut.call(this,l,s)}return[e]}class us extends G{constructor(e){super(),O(this,e,cs,ls,U,{})}}function fs(l){let e,s,r;return{c(){e=c("div"),s=c("img"),this.h()},l(o){e=u(o,"DIV",{class:!0});var i=f(e);s=u(i,"IMG",{src:!0,alt:!0,style:!0,class:!0}),i.forEach(n),this.h()},h(){Ft(s.src,r="/images/ehe.webp")||a(s,"src",r),a(s,"alt","A smug IRyS."),Lt(s,"opacity",l[0]+"%"),a(s,"class","svelte-177csrb"),a(e,"class","svelte-177csrb")},m(o,i){T(o,e,i),t(e,s)},p(o,[i]){i&1&&Lt(s,"opacity",o[0]+"%")},i:y,o:y,d(o){o&&n(e)}}}function hs(l,e,s){let r;return _e(l,Ie,o=>s(0,r=o)),[r]}class ds extends G{constructor(e){super(),O(this,e,hs,fs,U,{})}}function vs(l){let e,s,r,o,i,h,_,m,k;return{c(){e=c("div"),s=c("p"),r=d("Subscribe to IRyS on "),o=c("a"),i=d("YouTube"),h=d(`
		and follow her on `),_=c("a"),m=d("Twitter"),k=d("!"),this.h()},l(g){e=u(g,"DIV",{});var b=f(e);s=u(b,"P",{class:!0});var E=f(s);r=v(E,"Subscribe to IRyS on "),o=u(E,"A",{href:!0});var $=f(o);i=v($,"YouTube"),$.forEach(n),h=v(E,`
		and follow her on `),_=u(E,"A",{href:!0});var C=f(_);m=v(C,"Twitter"),C.forEach(n),k=v(E,"!"),E.forEach(n),b.forEach(n),this.h()},h(){a(o,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),a(_,"href","https://twitter.com/irys_en"),a(s,"class","svelte-8wmb8l")},m(g,b){T(g,e,b),t(e,s),t(s,r),t(s,o),t(o,i),t(s,h),t(s,_),t(_,m),t(s,k)},p:y,i:y,o:y,d(g){g&&n(e)}}}class ps extends G{constructor(e){super(),O(this,e,null,vs,U,{})}}function ms(l){let e,s,r,o,i,h,_,m,k,g,b,E,$,C,j,V;return s=new as({}),s.$on("message",bs),o=new us({}),h=new ds({}),k=new Qt({}),b=new es({}),$=new rs({}),j=new ps({}),{c(){e=c("div"),te(s.$$.fragment),r=w(),te(o.$$.fragment),i=w(),te(h.$$.fragment),_=w(),m=c("div"),te(k.$$.fragment),g=w(),te(b.$$.fragment),E=w(),te($.$$.fragment),C=w(),te(j.$$.fragment),this.h()},l(p){e=u(p,"DIV",{class:!0});var I=f(e);se(s.$$.fragment,I),I.forEach(n),r=x(p),se(o.$$.fragment,p),i=x(p),se(h.$$.fragment,p),_=x(p),m=u(p,"DIV",{class:!0});var q=f(m);se(k.$$.fragment,q),g=x(q),se(b.$$.fragment,q),E=x(q),se($.$$.fragment,q),C=x(q),se(j.$$.fragment,q),q.forEach(n),this.h()},h(){a(e,"class","info-wrapper svelte-b8b3it"),a(m,"class","box svelte-b8b3it")},m(p,I){T(p,e,I),re(s,e,null),T(p,r,I),re(o,p,I),T(p,i,I),re(h,p,I),T(p,_,I),T(p,m,I),re(k,m,null),t(m,g),re(b,m,null),t(m,E),re($,m,null),t(m,C),re(j,m,null),V=!0},p:y,i(p){V||(ne(s.$$.fragment,p),ne(o.$$.fragment,p),ne(h.$$.fragment,p),ne(k.$$.fragment,p),ne(b.$$.fragment,p),ne($.$$.fragment,p),ne(j.$$.fragment,p),V=!0)},o(p){oe(s.$$.fragment,p),oe(o.$$.fragment,p),oe(h.$$.fragment,p),oe(k.$$.fragment,p),oe(b.$$.fragment,p),oe($.$$.fragment,p),oe(j.$$.fragment,p),V=!1},d(p){p&&n(e),ae(s),p&&n(r),ae(o,p),p&&n(i),ae(h,p),p&&n(_),p&&n(m),ae(k),ae(b),ae($),ae(j)}}}function bs(){const l=document.getElementById("modal-background");l!=null&&(l.style.display="flex")}function gs(l){return Dt().then(e=>ke.set(e)).catch(()=>ke.set(0)),[]}class $s extends G{constructor(e){super(),O(this,e,gs,ms,U,{})}}export{$s as default};
