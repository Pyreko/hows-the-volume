import{K as Nt,S as Q,i as X,s as Z,e as c,t as p,k,c as f,a as u,h,d as o,m as x,b as a,g as V,J as t,j as Dt,E as w,L as _e,M as pe,N as Gt,O as Ot,P as Ut,Q as Ft,R as Wt,f as zt,w as te,x as se,y as ae,q as re,o as oe,B as ne}from"../chunks/index-e82c7559.js";import{w as pt}from"../chunks/index-51387811.js";const ht="https://howsthevolu.me/api",qt=()=>{if(typeof localStorage!="undefined"){const l=localStorage.getItem("localCount");if(l==null)return 0;{const e=parseInt(l,10);return isNaN(e)?0:e}}else return 0},ut=pt(qt()),Ht=async()=>{try{const l=await fetch(`${ht}/count`);if(l.ok){const e=await l.json(),s=parseInt(e.count,10);if(!isNaN(s))return s}return 0}catch{return 0}},Jt=async()=>{$e.update(l=>l+1),await fetch(`${ht}/increment`,{method:"POST"})},$e=pt(0,l=>{const e=setInterval(async()=>{const s=await Ht();let r=Nt($e);const n=setInterval(()=>{r>=s?clearInterval(n):(r+=1,l(r))},10)},2e4);return()=>{clearInterval(e)}}),Ce=pt(0);function Kt(l){let e,s,r,n,i,d=l[0].toLocaleString()+"",g;return{c(){e=c("div"),s=c("p"),r=p("Volumes checked across the world:"),n=k(),i=c("h1"),g=p(d),this.h()},l(m){e=f(m,"DIV",{class:!0});var $=u(e);s=f($,"P",{class:!0});var _=u(s);r=h(_,"Volumes checked across the world:"),_.forEach(o),n=x($),i=f($,"H1",{class:!0});var b=u(i);g=h(b,d),b.forEach(o),$.forEach(o),this.h()},h(){a(s,"class","svelte-17nfff7"),a(i,"class","svelte-17nfff7"),a(e,"class","gl-count-wrapper svelte-17nfff7")},m(m,$){V(m,e,$),t(e,s),t(s,r),t(e,n),t(e,i),t(i,g)},p(m,[$]){$&1&&d!==(d=m[0].toLocaleString()+"")&&Dt(g,d)},i:w,o:w,d(m){m&&o(e)}}}function Yt(l,e,s){let r;return _e(l,$e,n=>s(0,r=n)),[r]}class Qt extends Q{constructor(e){super(),X(this,e,Yt,Kt,Z,{})}}function Xt(l){let e,s,r=l[0].toLocaleString()+"",n;return{c(){e=c("p"),s=p("Volumes checked: "),n=p(r),this.h()},l(i){e=f(i,"P",{class:!0});var d=u(e);s=h(d,"Volumes checked: "),n=h(d,r),d.forEach(o),this.h()},h(){a(e,"class","svelte-1yf5daj")},m(i,d){V(i,e,d),t(e,s),t(e,n)},p(i,[d]){d&1&&r!==(r=i[0].toLocaleString()+"")&&Dt(n,r)},i:w,o:w,d(i){i&&o(e)}}}function Zt(l,e,s){let r;return _e(l,ut,n=>s(0,r=n)),[r]}class es extends Q{constructor(e){super(),X(this,e,Zt,Xt,Z,{})}}function ts(l){let e,s,r,n;return{c(){e=c("button"),s=p("Check the volume"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var d=u(e);s=h(d,"Check the volume"),d.forEach(o),this.h()},h(){a(e,"class","svelte-18jim5p")},m(i,d){V(i,e,d),t(e,s),r||(n=pe(e,"click",l[0]),r=!0)},p:w,i:w,o:w,d(i){i&&o(e),r=!1,n()}}}function Mt(l){return Math.floor(Math.random()*(l+1))}function ss(l,e,s){let r,n;_e(l,ut,_=>s(4,r=_)),_e(l,Ce,_=>s(5,n=_));let i,d;function g(){i!==void 0&&clearTimeout(i),d!=null&&clearInterval(d),i=setTimeout(()=>{let _=n;d=setInterval(()=>{_<=0?clearInterval(d):(_-=.5,Ce.set(_))},50)},5*1e3),Ce.update(_=>{const b=_+.25;return Math.min(b,100)}),ut.update(_=>_+1),localStorage.setItem("localCount",r.toString()),Jt()}let m;async function $(){g();const _=Mt(6),b=new Audio;if(b.crossOrigin="anonymous",b.src=`${ht}/sound/${_}`,m==null&&(m=new AudioContext),m!=null){const I=m.createMediaElementSource(b),y=Mt(2)-1,S=new StereoPannerNode(m,{pan:y});I.connect(S).connect(m.destination)}b.play()}return[$]}class as extends Q{constructor(e){super(),X(this,e,ss,ts,Z,{})}}function rs(l){let e,s,r,n;return{c(){e=c("button"),s=p("i"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var d=u(e);s=h(d,"i"),d.forEach(o),this.h()},h(){a(e,"class","svelte-13djl9w")},m(i,d){V(i,e,d),t(e,s),r||(n=pe(e,"click",l[0]),r=!0)},p:w,i:w,o:w,d(i){i&&o(e),r=!1,n()}}}function os(l){const e=Gt();function s(){e("message")}return[s]}class ns extends Q{constructor(e){super(),X(this,e,os,rs,Z,{})}}function ls(l){let e,s,r,n,i,d,g,m,$,_,b,I,y,S,P,R,v,C,E,Se,Te,L,Ve,Pe,Re,z,Ae,M,je,Be,Le,D,le,ze,Me,H,De,N,He,Ne,Ge,A,ie,Oe,Ue,ce,Fe,We,T,he,ee,G,qe,Je,Ke,ve,O,Ye,U,Qe,Xe,Ze,me,F,et,W,tt,st,at,be,j,rt,q,ot,nt,J,lt,it,ct,vt;return{c(){e=c("div"),s=c("div"),r=c("div"),n=c("button"),i=p("\u2715"),d=k(),g=c("div"),m=c("h1"),$=p("What is this?"),_=k(),b=c("p"),I=p("This is a site for "),y=c("a"),S=p("IRyS"),P=p(", one of Hololive's resident "),R=c("strike"),v=p("pons"),C=p(` VSingers! Inspired by
					`),E=c("a"),Se=p("impomu"),Te=p(`
					and `),L=c("a"),Ve=p("faunaraara"),Pe=p("."),Re=k(),z=c("p"),Ae=p("For those interested in the source code for both the site and server, it can be found "),M=c("a"),je=p("over here on GitHub"),Be=p("."),Le=k(),D=c("div"),le=c("h1"),ze=p("Where's the volume?"),Me=k(),H=c("p"),De=p("All voice clips and their sources can also be found in the "),N=c("a"),He=p("GitHub repo"),Ne=p("."),Ge=k(),A=c("div"),ie=c("h1"),Oe=p("Credits"),Ue=k(),ce=c("p"),Fe=p("Lots of stuff was used or referred to in order to make this site:"),We=k(),T=c("ul"),he=c("li"),ee=c("p"),G=c("a"),qe=p("Chroneco's emotes and tweet"),Je=p(" were used for the favicon and inspiration for theming."),Ke=k(),ve=c("li"),O=c("p"),Ye=p("The font used throughout is "),U=c("a"),Qe=p("Riffic Free Bold"),Xe=p("."),Ze=k(),me=c("li"),F=c("p"),et=p("The frontend is written in "),W=c("a"),tt=p("Svelte"),st=p("."),at=k(),be=c("li"),j=c("p"),rt=p("The backend is written in "),q=c("a"),ot=p("Rust"),nt=p(`, using the
							`),J=c("a"),lt=p("axum framework"),it=p("."),this.h()},l(ge){e=f(ge,"DIV",{id:!0,class:!0});var ye=u(e);s=f(ye,"DIV",{class:!0});var mt=u(s);r=f(mt,"DIV",{class:!0});var K=u(r);n=f(K,"BUTTON",{class:!0});var bt=u(n);i=h(bt,"\u2715"),bt.forEach(o),d=x(K),g=f(K,"DIV",{class:!0});var fe=u(g);m=f(fe,"H1",{class:!0});var gt=u(m);$=h(gt,"What is this?"),gt.forEach(o),_=x(fe),b=f(fe,"P",{class:!0});var B=u(b);I=h(B,"This is a site for "),y=f(B,"A",{href:!0,target:!0,class:!0});var _t=u(y);S=h(_t,"IRyS"),_t.forEach(o),P=h(B,", one of Hololive's resident "),R=f(B,"STRIKE",{});var $t=u(R);v=h($t,"pons"),$t.forEach(o),C=h(B,` VSingers! Inspired by
					`),E=f(B,"A",{href:!0,target:!0,class:!0});var yt=u(E);Se=h(yt,"impomu"),yt.forEach(o),Te=h(B,`
					and `),L=f(B,"A",{href:!0,target:!0,class:!0});var wt=u(L);Ve=h(wt,"faunaraara"),wt.forEach(o),Pe=h(B,"."),B.forEach(o),Re=x(fe),z=f(fe,"P",{class:!0});var we=u(z);Ae=h(we,"For those interested in the source code for both the site and server, it can be found "),M=f(we,"A",{href:!0,target:!0,class:!0});var kt=u(M);je=h(kt,"over here on GitHub"),kt.forEach(o),Be=h(we,"."),we.forEach(o),fe.forEach(o),Le=x(K),D=f(K,"DIV",{class:!0});var ke=u(D);le=f(ke,"H1",{class:!0});var xt=u(le);ze=h(xt,"Where's the volume?"),xt.forEach(o),Me=x(ke),H=f(ke,"P",{class:!0});var xe=u(H);De=h(xe,"All voice clips and their sources can also be found in the "),N=f(xe,"A",{href:!0,target:!0,class:!0});var Et=u(N);He=h(Et,"GitHub repo"),Et.forEach(o),Ne=h(xe,"."),xe.forEach(o),ke.forEach(o),Ge=x(K),A=f(K,"DIV",{class:!0});var ue=u(A);ie=f(ue,"H1",{class:!0});var It=u(ie);Oe=h(It,"Credits"),It.forEach(o),Ue=x(ue),ce=f(ue,"P",{class:!0});var Ct=u(ce);Fe=h(Ct,"Lots of stuff was used or referred to in order to make this site:"),Ct.forEach(o),We=x(ue),T=f(ue,"UL",{class:!0});var Y=u(T);he=f(Y,"LI",{});var St=u(he);ee=f(St,"P",{class:!0});var ft=u(ee);G=f(ft,"A",{href:!0,target:!0,class:!0});var Tt=u(G);qe=h(Tt,"Chroneco's emotes and tweet"),Tt.forEach(o),Je=h(ft," were used for the favicon and inspiration for theming."),ft.forEach(o),St.forEach(o),Ke=x(Y),ve=f(Y,"LI",{});var Vt=u(ve);O=f(Vt,"P",{class:!0});var Ee=u(O);Ye=h(Ee,"The font used throughout is "),U=f(Ee,"A",{href:!0,target:!0,class:!0});var Pt=u(U);Qe=h(Pt,"Riffic Free Bold"),Pt.forEach(o),Xe=h(Ee,"."),Ee.forEach(o),Vt.forEach(o),Ze=x(Y),me=f(Y,"LI",{});var Rt=u(me);F=f(Rt,"P",{class:!0});var Ie=u(F);et=h(Ie,"The frontend is written in "),W=f(Ie,"A",{href:!0,target:!0,class:!0});var At=u(W);tt=h(At,"Svelte"),At.forEach(o),st=h(Ie,"."),Ie.forEach(o),Rt.forEach(o),at=x(Y),be=f(Y,"LI",{});var jt=u(be);j=f(jt,"P",{class:!0});var de=u(j);rt=h(de,"The backend is written in "),q=f(de,"A",{href:!0,target:!0,class:!0});var Bt=u(q);ot=h(Bt,"Rust"),Bt.forEach(o),nt=h(de,`, using the
							`),J=f(de,"A",{href:!0,target:!0,class:!0});var Lt=u(J);lt=h(Lt,"axum framework"),Lt.forEach(o),it=h(de,"."),de.forEach(o),jt.forEach(o),Y.forEach(o),ue.forEach(o),K.forEach(o),mt.forEach(o),ye.forEach(o),this.h()},h(){a(n,"class","close svelte-opiba4"),a(m,"class","svelte-opiba4"),a(y,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),a(y,"target","_blank"),a(y,"class","svelte-opiba4"),a(E,"href","https://impomu.com/"),a(E,"target","_blank"),a(E,"class","svelte-opiba4"),a(L,"href","https://faunaraara.com/"),a(L,"target","_blank"),a(L,"class","svelte-opiba4"),a(b,"class","svelte-opiba4"),a(M,"href","https://github.com/Pyreko/hows-the-volume"),a(M,"target","_blank"),a(M,"class","svelte-opiba4"),a(z,"class","svelte-opiba4"),a(g,"class","text-block svelte-opiba4"),a(le,"class","svelte-opiba4"),a(N,"href","https://github.com/Pyreko/hows-the-volume/tree/main/server/assets"),a(N,"target","_blank"),a(N,"class","svelte-opiba4"),a(H,"class","svelte-opiba4"),a(D,"class","text-block svelte-opiba4"),a(ie,"class","svelte-opiba4"),a(ce,"class","svelte-opiba4"),a(G,"href","https://twitter.com/chrone_co/status/1426878310328332292"),a(G,"target","_blank"),a(G,"class","svelte-opiba4"),a(ee,"class","svelte-opiba4"),a(U,"href","https://www.fontspring.com/fonts/inky-type/riffic"),a(U,"target","_blank"),a(U,"class","svelte-opiba4"),a(O,"class","svelte-opiba4"),a(W,"href","https://svelte.dev/"),a(W,"target","_blank"),a(W,"class","svelte-opiba4"),a(F,"class","svelte-opiba4"),a(q,"href","https://www.rust-lang.org/"),a(q,"target","_blank"),a(q,"class","svelte-opiba4"),a(J,"href","https://github.com/tokio-rs/axum"),a(J,"target","_blank"),a(J,"class","svelte-opiba4"),a(j,"class","svelte-opiba4"),a(T,"class","svelte-opiba4"),a(A,"class","text-block svelte-opiba4"),a(r,"class","modal-body svelte-opiba4"),a(s,"class","modal-wrapper svelte-opiba4"),a(e,"id","modal-background"),a(e,"class","svelte-opiba4")},m(ge,ye){V(ge,e,ye),t(e,s),t(s,r),t(r,n),t(n,i),t(r,d),t(r,g),t(g,m),t(m,$),t(g,_),t(g,b),t(b,I),t(b,y),t(y,S),t(b,P),t(b,R),t(R,v),t(b,C),t(b,E),t(E,Se),t(b,Te),t(b,L),t(L,Ve),t(b,Pe),t(g,Re),t(g,z),t(z,Ae),t(z,M),t(M,je),t(z,Be),t(r,Le),t(r,D),t(D,le),t(le,ze),t(D,Me),t(D,H),t(H,De),t(H,N),t(N,He),t(H,Ne),t(r,Ge),t(r,A),t(A,ie),t(ie,Oe),t(A,Ue),t(A,ce),t(ce,Fe),t(A,We),t(A,T),t(T,he),t(he,ee),t(ee,G),t(G,qe),t(ee,Je),t(T,Ke),t(T,ve),t(ve,O),t(O,Ye),t(O,U),t(U,Qe),t(O,Xe),t(T,Ze),t(T,me),t(me,F),t(F,et),t(F,W),t(W,tt),t(F,st),t(T,at),t(T,be),t(be,j),t(j,rt),t(j,q),t(q,ot),t(j,nt),t(j,J),t(J,lt),t(j,it),ct||(vt=[pe(window,"keydown",is),pe(n,"click",dt),pe(r,"click",Ot(l[0])),pe(e,"click",dt)],ct=!0)},p:w,i:w,o:w,d(ge){ge&&o(e),ct=!1,Ut(vt)}}}function dt(){const l=document.getElementById("modal-background");l!=null&&(l.style.display="none")}function is(l){l.key==="Escape"&&dt()}function cs(l){function e(s){Ft.call(this,l,s)}return[e]}class fs extends Q{constructor(e){super(),X(this,e,cs,ls,Z,{})}}function us(l){let e,s,r;return{c(){e=c("div"),s=c("img"),this.h()},l(n){e=f(n,"DIV",{class:!0});var i=u(e);s=f(i,"IMG",{src:!0,alt:!0,style:!0,class:!0}),i.forEach(o),this.h()},h(){Wt(s.src,r="/images/ehe.webp")||a(s,"src",r),a(s,"alt","A smug IRyS."),zt(s,"opacity",l[0]+"%"),a(s,"class","svelte-177csrb"),a(e,"class","svelte-177csrb")},m(n,i){V(n,e,i),t(e,s)},p(n,[i]){i&1&&zt(s,"opacity",n[0]+"%")},i:w,o:w,d(n){n&&o(e)}}}function ds(l,e,s){let r;return _e(l,Ce,n=>s(0,r=n)),[r]}class ps extends Q{constructor(e){super(),X(this,e,ds,us,Z,{})}}function hs(l){let e,s,r,n,i,d,g,m,$;return{c(){e=c("div"),s=c("p"),r=p("Subscribe to IRyS on "),n=c("a"),i=p("YouTube"),d=p(`
		and follow her on `),g=c("a"),m=p("Twitter"),$=p("!"),this.h()},l(_){e=f(_,"DIV",{});var b=u(e);s=f(b,"P",{class:!0});var I=u(s);r=h(I,"Subscribe to IRyS on "),n=f(I,"A",{href:!0,target:!0});var y=u(n);i=h(y,"YouTube"),y.forEach(o),d=h(I,`
		and follow her on `),g=f(I,"A",{href:!0,target:!0});var S=u(g);m=h(S,"Twitter"),S.forEach(o),$=h(I,"!"),I.forEach(o),b.forEach(o),this.h()},h(){a(n,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),a(n,"target","_blank"),a(g,"href","https://twitter.com/irys_en"),a(g,"target","_blank"),a(s,"class","svelte-cxhu4a")},m(_,b){V(_,e,b),t(e,s),t(s,r),t(s,n),t(n,i),t(s,d),t(s,g),t(g,m),t(s,$)},p:w,i:w,o:w,d(_){_&&o(e)}}}class vs extends Q{constructor(e){super(),X(this,e,null,hs,Z,{})}}function ms(l){let e,s,r,n,i,d,g,m,$,_,b,I,y,S,P,R;return s=new ns({}),s.$on("message",bs),n=new fs({}),d=new ps({}),$=new Qt({}),b=new es({}),y=new as({}),P=new vs({}),{c(){e=c("div"),te(s.$$.fragment),r=k(),te(n.$$.fragment),i=k(),te(d.$$.fragment),g=k(),m=c("div"),te($.$$.fragment),_=k(),te(b.$$.fragment),I=k(),te(y.$$.fragment),S=k(),te(P.$$.fragment),this.h()},l(v){e=f(v,"DIV",{class:!0});var C=u(e);se(s.$$.fragment,C),C.forEach(o),r=x(v),se(n.$$.fragment,v),i=x(v),se(d.$$.fragment,v),g=x(v),m=f(v,"DIV",{class:!0});var E=u(m);se($.$$.fragment,E),_=x(E),se(b.$$.fragment,E),I=x(E),se(y.$$.fragment,E),S=x(E),se(P.$$.fragment,E),E.forEach(o),this.h()},h(){a(e,"class","info-wrapper svelte-b8b3it"),a(m,"class","box svelte-b8b3it")},m(v,C){V(v,e,C),ae(s,e,null),V(v,r,C),ae(n,v,C),V(v,i,C),ae(d,v,C),V(v,g,C),V(v,m,C),ae($,m,null),t(m,_),ae(b,m,null),t(m,I),ae(y,m,null),t(m,S),ae(P,m,null),R=!0},p:w,i(v){R||(re(s.$$.fragment,v),re(n.$$.fragment,v),re(d.$$.fragment,v),re($.$$.fragment,v),re(b.$$.fragment,v),re(y.$$.fragment,v),re(P.$$.fragment,v),R=!0)},o(v){oe(s.$$.fragment,v),oe(n.$$.fragment,v),oe(d.$$.fragment,v),oe($.$$.fragment,v),oe(b.$$.fragment,v),oe(y.$$.fragment,v),oe(P.$$.fragment,v),R=!1},d(v){v&&o(e),ne(s),v&&o(r),ne(n,v),v&&o(i),ne(d,v),v&&o(g),v&&o(m),ne($),ne(b),ne(y),ne(P)}}}function bs(){const l=document.getElementById("modal-background");l!=null&&(l.style.display="flex")}function gs(l){return Ht().then(e=>$e.set(e)).catch(()=>$e.set(0)),[]}class ys extends Q{constructor(e){super(),X(this,e,gs,ms,Z,{})}}export{ys as default};
