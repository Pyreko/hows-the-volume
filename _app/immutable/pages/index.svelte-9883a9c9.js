import{K as rs,S as ee,i as te,s as se,e as c,t as d,k as w,c as f,a as u,h,d as a,m as k,b as r,g as P,J as e,j as ts,E as x,L as ke,M as ge,N as ns,O as as,P as ls,Q as os,R as is,f as Xt,w as ne,x as ae,y as le,q as oe,o as ie,B as ce}from"../chunks/index-e82c7559.js";import{w as It}from"../chunks/index-51387811.js";const St="https://api.howsthevolu.me",cs=()=>{if(typeof localStorage!="undefined"){const o=localStorage.getItem("localCount");if(o==null)return 0;{const t=parseInt(o,10);return isNaN(t)?0:t}}else return 0},xt=It(cs()),ss=async()=>{try{const o=await fetch(`${St}/count`);if(o.ok){const t=await o.json(),s=parseInt(t.count,10);if(!isNaN(s))return s}return 0}catch{return 0}},fs=async()=>{xe.update(o=>o+1),await fetch(`${St}/increment`,{method:"POST"})},Zt=o=>Math.max(1,10**Math.floor(Math.log10(o)));let Ae;const xe=It(0,o=>{const t=setInterval(async()=>{const s=await ss();let n=rs(xe),l=Zt(s-n);Ae!==void 0&&clearInterval(Ae),Ae=setInterval(()=>{if(n>=s)clearInterval(Ae);else{const i=s-n;i<l&&(l=Zt(i)),n+=l,o(Math.min(n,s))}},10)},2e4);return()=>{clearInterval(t)}}),je=It(0);function us(o){let t,s,n,l,i,v=o[0].toLocaleString()+"",_;return{c(){t=c("div"),s=c("p"),n=d("Volumes checked across the world:"),l=w(),i=c("h1"),_=d(v),this.h()},l(m){t=f(m,"DIV",{class:!0});var b=u(t);s=f(b,"P",{class:!0});var y=u(s);n=h(y,"Volumes checked across the world:"),y.forEach(a),l=k(b),i=f(b,"H1",{class:!0});var g=u(i);_=h(g,v),g.forEach(a),b.forEach(a),this.h()},h(){r(s,"class","svelte-17nfff7"),r(i,"class","svelte-17nfff7"),r(t,"class","gl-count-wrapper svelte-17nfff7")},m(m,b){P(m,t,b),e(t,s),e(s,n),e(t,l),e(t,i),e(i,_)},p(m,[b]){b&1&&v!==(v=m[0].toLocaleString()+"")&&ts(_,v)},i:x,o:x,d(m){m&&a(t)}}}function ds(o,t,s){let n;return ke(o,xe,l=>s(0,n=l)),[n]}class hs extends ee{constructor(t){super(),te(this,t,ds,us,se,{})}}function vs(o){let t,s,n=o[0].toLocaleString()+"",l;return{c(){t=c("p"),s=d("Volumes checked: "),l=d(n),this.h()},l(i){t=f(i,"P",{class:!0});var v=u(t);s=h(v,"Volumes checked: "),l=h(v,n),v.forEach(a),this.h()},h(){r(t,"class","svelte-1yf5daj")},m(i,v){P(i,t,v),e(t,s),e(t,l)},p(i,[v]){v&1&&n!==(n=i[0].toLocaleString()+"")&&ts(l,n)},i:x,o:x,d(i){i&&a(t)}}}function ps(o,t,s){let n;return ke(o,xt,l=>s(0,n=l)),[n]}class ms extends ee{constructor(t){super(),te(this,t,ps,vs,se,{})}}function gs(o){let t,s,n,l;return{c(){t=c("button"),s=d("Check the volume"),this.h()},l(i){t=f(i,"BUTTON",{class:!0});var v=u(t);s=h(v,"Check the volume"),v.forEach(a),this.h()},h(){r(t,"class","svelte-18jim5p")},m(i,v){P(i,t,v),e(t,s),n||(l=ge(t,"click",o[0]),n=!0)},p:x,i:x,o:x,d(i){i&&a(t),n=!1,l()}}}function es(o){return Math.floor(Math.random()*(o+1))}function _s(o,t,s){let n,l;ke(o,xt,y=>s(4,n=y)),ke(o,je,y=>s(5,l=y));let i,v;function _(){i!==void 0&&clearTimeout(i),v!=null&&clearInterval(v),i=setTimeout(()=>{let y=l;v=setInterval(()=>{y<=0?clearInterval(v):(y-=.5,je.set(y))},50)},5*1e3),je.update(y=>{const g=y+.25;return Math.min(g,100)}),xt.update(y=>y+1),localStorage.setItem("localCount",n.toString()),fs()}let m;async function b(){_();const y=es(6),g=new Audio;if(g.crossOrigin="anonymous",g.src=`${St}/sound/${y}`,m==null&&(m=new AudioContext),m!=null){const I=m.createMediaElementSource(g),$=es(2)-1,C=new StereoPannerNode(m,{pan:$});I.connect(C).connect(m.destination)}g.play()}return[b]}class ys extends ee{constructor(t){super(),te(this,t,_s,gs,se,{})}}function bs(o){let t,s,n,l;return{c(){t=c("button"),s=d("i"),this.h()},l(i){t=f(i,"BUTTON",{class:!0});var v=u(t);s=h(v,"i"),v.forEach(a),this.h()},h(){r(t,"class","svelte-1jcs8z6")},m(i,v){P(i,t,v),e(t,s),n||(l=ge(t,"click",o[0]),n=!0)},p:x,i:x,o:x,d(i){i&&a(t),n=!1,l()}}}function $s(o){const t=ns();function s(){t("message")}return[s]}class ws extends ee{constructor(t){super(),te(this,t,$s,bs,se,{})}}function ks(o){let t,s,n,l,i,v,_,m,b,y,g,I,$,C,V,R,p,S,E,Me,ze,B,Be,Le,De,L,He,D,Ne,Ge,Oe,H,fe,Ue,Fe,N,We,G,qe,Je,Ke,A,ue,Ye,Qe,de,Xe,Ze,T,_e,re,O,et,tt,st,ye,U,rt,F,nt,at,lt,be,W,ot,q,it,ct,ft,$e,j,ut,J,dt,ht,K,vt,pt,mt,Y,he,gt,_t,Q,yt,X,bt,$t,wt,Ct;return{c(){t=c("div"),s=c("div"),n=c("div"),l=c("button"),i=d("\u2715"),v=w(),_=c("div"),m=c("h1"),b=d("What is this?"),y=w(),g=c("p"),I=d("This is a site for "),$=c("a"),C=d("IRyS"),V=d(", one of Hololive's resident "),R=c("strike"),p=d("pons"),S=d(` VSingers! Inspired by
					`),E=c("a"),Me=d("impomu"),ze=d(`
					and `),B=c("a"),Be=d("faunaraara"),Le=d("."),De=w(),L=c("p"),He=d("For those interested in the source code for both the site and server, it can be found "),D=c("a"),Ne=d("over here on GitHub"),Ge=d("."),Oe=w(),H=c("div"),fe=c("h1"),Ue=d("Where's the volume?"),Fe=w(),N=c("p"),We=d("All voice clips (and their sources when I get around to it) can also be found in the "),G=c("a"),qe=d("GitHub repo"),Je=d("."),Ke=w(),A=c("div"),ue=c("h1"),Ye=d("Credits"),Qe=w(),de=c("p"),Xe=d("Lots of stuff was used or referred to in order to make this site:"),Ze=w(),T=c("ul"),_e=c("li"),re=c("p"),O=c("a"),et=d("Chroneco's emotes and tweet"),tt=d(" were used for the favicon and inspiration for theming."),st=w(),ye=c("li"),U=c("p"),rt=d("The font used throughout is "),F=c("a"),nt=d("Riffic Free Bold"),at=d("."),lt=w(),be=c("li"),W=c("p"),ot=d("The frontend is written in "),q=c("a"),it=d("Svelte"),ct=d("."),ft=w(),$e=c("li"),j=c("p"),ut=d("The backend is written in "),J=c("a"),dt=d("Rust"),ht=d(`, using the
							`),K=c("a"),vt=d("axum framework"),pt=d("."),mt=w(),Y=c("div"),he=c("h1"),gt=d("Something not working?"),_t=w(),Q=c("p"),yt=d("If you find something not working, please report it "),X=c("a"),bt=d("here"),$t=d("!"),this.h()},l(we){t=f(we,"DIV",{id:!0,class:!0});var Ee=u(t);s=f(Ee,"DIV",{class:!0});var Tt=u(s);n=f(Tt,"DIV",{class:!0});var M=u(n);l=f(M,"BUTTON",{class:!0});var Pt=u(l);i=h(Pt,"\u2715"),Pt.forEach(a),v=k(M),_=f(M,"DIV",{class:!0});var ve=u(_);m=f(ve,"H1",{class:!0});var Vt=u(m);b=h(Vt,"What is this?"),Vt.forEach(a),y=k(ve),g=f(ve,"P",{class:!0});var z=u(g);I=h(z,"This is a site for "),$=f(z,"A",{href:!0,target:!0,class:!0});var Rt=u($);C=h(Rt,"IRyS"),Rt.forEach(a),V=h(z,", one of Hololive's resident "),R=f(z,"STRIKE",{});var At=u(R);p=h(At,"pons"),At.forEach(a),S=h(z,` VSingers! Inspired by
					`),E=f(z,"A",{href:!0,target:!0,class:!0});var jt=u(E);Me=h(jt,"impomu"),jt.forEach(a),ze=h(z,`
					and `),B=f(z,"A",{href:!0,target:!0,class:!0});var Mt=u(B);Be=h(Mt,"faunaraara"),Mt.forEach(a),Le=h(z,"."),z.forEach(a),De=k(ve),L=f(ve,"P",{class:!0});var Ie=u(L);He=h(Ie,"For those interested in the source code for both the site and server, it can be found "),D=f(Ie,"A",{href:!0,target:!0,class:!0});var zt=u(D);Ne=h(zt,"over here on GitHub"),zt.forEach(a),Ge=h(Ie,"."),Ie.forEach(a),ve.forEach(a),Oe=k(M),H=f(M,"DIV",{class:!0});var Se=u(H);fe=f(Se,"H1",{class:!0});var Bt=u(fe);Ue=h(Bt,"Where's the volume?"),Bt.forEach(a),Fe=k(Se),N=f(Se,"P",{class:!0});var Ce=u(N);We=h(Ce,"All voice clips (and their sources when I get around to it) can also be found in the "),G=f(Ce,"A",{href:!0,target:!0,class:!0});var Lt=u(G);qe=h(Lt,"GitHub repo"),Lt.forEach(a),Je=h(Ce,"."),Ce.forEach(a),Se.forEach(a),Ke=k(M),A=f(M,"DIV",{class:!0});var pe=u(A);ue=f(pe,"H1",{class:!0});var Dt=u(ue);Ye=h(Dt,"Credits"),Dt.forEach(a),Qe=k(pe),de=f(pe,"P",{class:!0});var Ht=u(de);Xe=h(Ht,"Lots of stuff was used or referred to in order to make this site:"),Ht.forEach(a),Ze=k(pe),T=f(pe,"UL",{class:!0});var Z=u(T);_e=f(Z,"LI",{});var Nt=u(_e);re=f(Nt,"P",{class:!0});var kt=u(re);O=f(kt,"A",{href:!0,target:!0,class:!0});var Gt=u(O);et=h(Gt,"Chroneco's emotes and tweet"),Gt.forEach(a),tt=h(kt," were used for the favicon and inspiration for theming."),kt.forEach(a),Nt.forEach(a),st=k(Z),ye=f(Z,"LI",{});var Ot=u(ye);U=f(Ot,"P",{class:!0});var Te=u(U);rt=h(Te,"The font used throughout is "),F=f(Te,"A",{href:!0,target:!0,class:!0});var Ut=u(F);nt=h(Ut,"Riffic Free Bold"),Ut.forEach(a),at=h(Te,"."),Te.forEach(a),Ot.forEach(a),lt=k(Z),be=f(Z,"LI",{});var Ft=u(be);W=f(Ft,"P",{class:!0});var Pe=u(W);ot=h(Pe,"The frontend is written in "),q=f(Pe,"A",{href:!0,target:!0,class:!0});var Wt=u(q);it=h(Wt,"Svelte"),Wt.forEach(a),ct=h(Pe,"."),Pe.forEach(a),Ft.forEach(a),ft=k(Z),$e=f(Z,"LI",{});var qt=u($e);j=f(qt,"P",{class:!0});var me=u(j);ut=h(me,"The backend is written in "),J=f(me,"A",{href:!0,target:!0,class:!0});var Jt=u(J);dt=h(Jt,"Rust"),Jt.forEach(a),ht=h(me,`, using the
							`),K=f(me,"A",{href:!0,target:!0,class:!0});var Kt=u(K);vt=h(Kt,"axum framework"),Kt.forEach(a),pt=h(me,"."),me.forEach(a),qt.forEach(a),Z.forEach(a),pe.forEach(a),mt=k(M),Y=f(M,"DIV",{class:!0});var Ve=u(Y);he=f(Ve,"H1",{class:!0});var Yt=u(he);gt=h(Yt,"Something not working?"),Yt.forEach(a),_t=k(Ve),Q=f(Ve,"P",{class:!0});var Re=u(Q);yt=h(Re,"If you find something not working, please report it "),X=f(Re,"A",{href:!0,target:!0,class:!0});var Qt=u(X);bt=h(Qt,"here"),Qt.forEach(a),$t=h(Re,"!"),Re.forEach(a),Ve.forEach(a),M.forEach(a),Tt.forEach(a),Ee.forEach(a),this.h()},h(){r(l,"class","close svelte-80y36f"),r(m,"class","svelte-80y36f"),r($,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),r($,"target","_blank"),r($,"class","svelte-80y36f"),r(E,"href","https://impomu.com/"),r(E,"target","_blank"),r(E,"class","svelte-80y36f"),r(B,"href","https://faunaraara.com/"),r(B,"target","_blank"),r(B,"class","svelte-80y36f"),r(g,"class","svelte-80y36f"),r(D,"href","https://github.com/Pyreko/hows-the-volume"),r(D,"target","_blank"),r(D,"class","svelte-80y36f"),r(L,"class","svelte-80y36f"),r(_,"class","text-block svelte-80y36f"),r(fe,"class","svelte-80y36f"),r(G,"href","https://github.com/Pyreko/hows-the-volume/tree/main/server/assets"),r(G,"target","_blank"),r(G,"class","svelte-80y36f"),r(N,"class","svelte-80y36f"),r(H,"class","text-block svelte-80y36f"),r(ue,"class","svelte-80y36f"),r(de,"class","svelte-80y36f"),r(O,"href","https://twitter.com/chrone_co/status/1426878310328332292"),r(O,"target","_blank"),r(O,"class","svelte-80y36f"),r(re,"class","svelte-80y36f"),r(F,"href","https://www.fontspring.com/fonts/inky-type/riffic"),r(F,"target","_blank"),r(F,"class","svelte-80y36f"),r(U,"class","svelte-80y36f"),r(q,"href","https://svelte.dev/"),r(q,"target","_blank"),r(q,"class","svelte-80y36f"),r(W,"class","svelte-80y36f"),r(J,"href","https://www.rust-lang.org/"),r(J,"target","_blank"),r(J,"class","svelte-80y36f"),r(K,"href","https://github.com/tokio-rs/axum"),r(K,"target","_blank"),r(K,"class","svelte-80y36f"),r(j,"class","svelte-80y36f"),r(T,"class","svelte-80y36f"),r(A,"class","text-block svelte-80y36f"),r(he,"class","svelte-80y36f"),r(X,"href","https://github.com/Pyreko/hows-the-volume/issues"),r(X,"target","_blank"),r(X,"class","svelte-80y36f"),r(Q,"class","svelte-80y36f"),r(Y,"class","text-block svelte-80y36f"),r(n,"class","modal-body svelte-80y36f"),r(s,"class","modal-wrapper svelte-80y36f"),r(t,"id","modal-background"),r(t,"class","svelte-80y36f")},m(we,Ee){P(we,t,Ee),e(t,s),e(s,n),e(n,l),e(l,i),e(n,v),e(n,_),e(_,m),e(m,b),e(_,y),e(_,g),e(g,I),e(g,$),e($,C),e(g,V),e(g,R),e(R,p),e(g,S),e(g,E),e(E,Me),e(g,ze),e(g,B),e(B,Be),e(g,Le),e(_,De),e(_,L),e(L,He),e(L,D),e(D,Ne),e(L,Ge),e(n,Oe),e(n,H),e(H,fe),e(fe,Ue),e(H,Fe),e(H,N),e(N,We),e(N,G),e(G,qe),e(N,Je),e(n,Ke),e(n,A),e(A,ue),e(ue,Ye),e(A,Qe),e(A,de),e(de,Xe),e(A,Ze),e(A,T),e(T,_e),e(_e,re),e(re,O),e(O,et),e(re,tt),e(T,st),e(T,ye),e(ye,U),e(U,rt),e(U,F),e(F,nt),e(U,at),e(T,lt),e(T,be),e(be,W),e(W,ot),e(W,q),e(q,it),e(W,ct),e(T,ft),e(T,$e),e($e,j),e(j,ut),e(j,J),e(J,dt),e(j,ht),e(j,K),e(K,vt),e(j,pt),e(n,mt),e(n,Y),e(Y,he),e(he,gt),e(Y,_t),e(Y,Q),e(Q,yt),e(Q,X),e(X,bt),e(Q,$t),wt||(Ct=[ge(window,"keydown",xs),ge(l,"click",Et),ge(n,"click",as(o[0])),ge(t,"click",Et)],wt=!0)},p:x,i:x,o:x,d(we){we&&a(t),wt=!1,ls(Ct)}}}function Et(){const o=document.getElementById("modal-background");o!=null&&(o.style.display="none")}function xs(o){o.key==="Escape"&&Et()}function Es(o){function t(s){os.call(this,o,s)}return[t]}class Is extends ee{constructor(t){super(),te(this,t,Es,ks,se,{})}}function Ss(o){let t,s,n;return{c(){t=c("div"),s=c("img"),this.h()},l(l){t=f(l,"DIV",{class:!0});var i=u(t);s=f(i,"IMG",{src:!0,alt:!0,style:!0,class:!0}),i.forEach(a),this.h()},h(){is(s.src,n="/images/ehe.webp")||r(s,"src",n),r(s,"alt","A smug IRyS."),Xt(s,"opacity",o[0]+"%"),r(s,"class","svelte-177csrb"),r(t,"class","svelte-177csrb")},m(l,i){P(l,t,i),e(t,s)},p(l,[i]){i&1&&Xt(s,"opacity",l[0]+"%")},i:x,o:x,d(l){l&&a(t)}}}function Cs(o,t,s){let n;return ke(o,je,l=>s(0,n=l)),[n]}class Ts extends ee{constructor(t){super(),te(this,t,Cs,Ss,se,{})}}function Ps(o){let t,s,n,l,i,v,_,m,b;return{c(){t=c("div"),s=c("p"),n=d("Subscribe to IRyS on "),l=c("a"),i=d("YouTube"),v=d(`
		and follow her on `),_=c("a"),m=d("Twitter"),b=d("!"),this.h()},l(y){t=f(y,"DIV",{});var g=u(t);s=f(g,"P",{class:!0});var I=u(s);n=h(I,"Subscribe to IRyS on "),l=f(I,"A",{href:!0,target:!0});var $=u(l);i=h($,"YouTube"),$.forEach(a),v=h(I,`
		and follow her on `),_=f(I,"A",{href:!0,target:!0});var C=u(_);m=h(C,"Twitter"),C.forEach(a),b=h(I,"!"),I.forEach(a),g.forEach(a),this.h()},h(){r(l,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),r(l,"target","_blank"),r(_,"href","https://twitter.com/irys_en"),r(_,"target","_blank"),r(s,"class","svelte-cxhu4a")},m(y,g){P(y,t,g),e(t,s),e(s,n),e(s,l),e(l,i),e(s,v),e(s,_),e(_,m),e(s,b)},p:x,i:x,o:x,d(y){y&&a(t)}}}class Vs extends ee{constructor(t){super(),te(this,t,null,Ps,se,{})}}function Rs(o){let t,s,n,l,i,v,_,m,b,y,g,I,$,C,V,R;return s=new ws({}),s.$on("message",As),l=new Is({}),v=new Ts({}),b=new hs({}),g=new ms({}),$=new ys({}),V=new Vs({}),{c(){t=c("div"),ne(s.$$.fragment),n=w(),ne(l.$$.fragment),i=w(),ne(v.$$.fragment),_=w(),m=c("div"),ne(b.$$.fragment),y=w(),ne(g.$$.fragment),I=w(),ne($.$$.fragment),C=w(),ne(V.$$.fragment),this.h()},l(p){t=f(p,"DIV",{class:!0});var S=u(t);ae(s.$$.fragment,S),S.forEach(a),n=k(p),ae(l.$$.fragment,p),i=k(p),ae(v.$$.fragment,p),_=k(p),m=f(p,"DIV",{class:!0});var E=u(m);ae(b.$$.fragment,E),y=k(E),ae(g.$$.fragment,E),I=k(E),ae($.$$.fragment,E),C=k(E),ae(V.$$.fragment,E),E.forEach(a),this.h()},h(){r(t,"class","info-wrapper svelte-b8b3it"),r(m,"class","box svelte-b8b3it")},m(p,S){P(p,t,S),le(s,t,null),P(p,n,S),le(l,p,S),P(p,i,S),le(v,p,S),P(p,_,S),P(p,m,S),le(b,m,null),e(m,y),le(g,m,null),e(m,I),le($,m,null),e(m,C),le(V,m,null),R=!0},p:x,i(p){R||(oe(s.$$.fragment,p),oe(l.$$.fragment,p),oe(v.$$.fragment,p),oe(b.$$.fragment,p),oe(g.$$.fragment,p),oe($.$$.fragment,p),oe(V.$$.fragment,p),R=!0)},o(p){ie(s.$$.fragment,p),ie(l.$$.fragment,p),ie(v.$$.fragment,p),ie(b.$$.fragment,p),ie(g.$$.fragment,p),ie($.$$.fragment,p),ie(V.$$.fragment,p),R=!1},d(p){p&&a(t),ce(s),p&&a(n),ce(l,p),p&&a(i),ce(v,p),p&&a(_),p&&a(m),ce(b),ce(g),ce($),ce(V)}}}function As(){const o=document.getElementById("modal-background");o!=null&&(o.style.display="flex")}function js(o){return ss().then(t=>xe.set(t)).catch(()=>xe.set(0)),[]}class Bs extends ee{constructor(t){super(),te(this,t,js,Rs,se,{})}}export{Bs as default};
