import{K as Ot,S as Q,i as X,s as Z,e as c,t as h,k as x,c as f,a as u,h as p,d as n,m as k,b as a,g as V,J as t,j as Nt,E as w,L as _e,M as he,N as Ut,O as Ft,P as Wt,Q as qt,R as Jt,f as Lt,w as te,x as se,y as ae,q as re,o as oe,B as ne}from"../chunks/index-e82c7559.js";import{w as pt}from"../chunks/index-51387811.js";const vt="https://api.howsthevolu.me",Kt=()=>{if(typeof localStorage!="undefined"){const l=localStorage.getItem("localCount");if(l==null)return 0;{const e=parseInt(l,10);return isNaN(e)?0:e}}else return 0},dt=pt(Kt()),Gt=async()=>{try{const l=await fetch(`${vt}/count`);if(l.ok){const e=await l.json(),s=parseInt(e.count,10);if(!isNaN(s))return s}return 0}catch{return 0}},Yt=async()=>{$e.update(l=>l+1),await fetch(`${vt}/increment`,{method:"POST"})},Dt=l=>Math.max(1,10**Math.floor(Math.log10(l)));let Ce;const $e=pt(0,l=>{const e=setInterval(async()=>{const s=await Gt();let r=Ot($e),o=Dt(s-r);Ce!==void 0&&clearInterval(Ce),Ce=setInterval(()=>{if(r>=s)clearInterval(Ce);else{const i=s-r;i<o&&(o=Dt(i),console.log(`increment: ${o}`)),r+=o,l(Math.min(r,s))}},10)},2e4);return()=>{clearInterval(e)}}),Se=pt(0);function Qt(l){let e,s,r,o,i,d=l[0].toLocaleString()+"",g;return{c(){e=c("div"),s=c("p"),r=h("Volumes checked across the world:"),o=x(),i=c("h1"),g=h(d),this.h()},l(m){e=f(m,"DIV",{class:!0});var $=u(e);s=f($,"P",{class:!0});var _=u(s);r=p(_,"Volumes checked across the world:"),_.forEach(n),o=k($),i=f($,"H1",{class:!0});var b=u(i);g=p(b,d),b.forEach(n),$.forEach(n),this.h()},h(){a(s,"class","svelte-17nfff7"),a(i,"class","svelte-17nfff7"),a(e,"class","gl-count-wrapper svelte-17nfff7")},m(m,$){V(m,e,$),t(e,s),t(s,r),t(e,o),t(e,i),t(i,g)},p(m,[$]){$&1&&d!==(d=m[0].toLocaleString()+"")&&Nt(g,d)},i:w,o:w,d(m){m&&n(e)}}}function Xt(l,e,s){let r;return _e(l,$e,o=>s(0,r=o)),[r]}class Zt extends Q{constructor(e){super(),X(this,e,Xt,Qt,Z,{})}}function es(l){let e,s,r=l[0].toLocaleString()+"",o;return{c(){e=c("p"),s=h("Volumes checked: "),o=h(r),this.h()},l(i){e=f(i,"P",{class:!0});var d=u(e);s=p(d,"Volumes checked: "),o=p(d,r),d.forEach(n),this.h()},h(){a(e,"class","svelte-1yf5daj")},m(i,d){V(i,e,d),t(e,s),t(e,o)},p(i,[d]){d&1&&r!==(r=i[0].toLocaleString()+"")&&Nt(o,r)},i:w,o:w,d(i){i&&n(e)}}}function ts(l,e,s){let r;return _e(l,dt,o=>s(0,r=o)),[r]}class ss extends Q{constructor(e){super(),X(this,e,ts,es,Z,{})}}function as(l){let e,s,r,o;return{c(){e=c("button"),s=h("Check the volume"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var d=u(e);s=p(d,"Check the volume"),d.forEach(n),this.h()},h(){a(e,"class","svelte-18jim5p")},m(i,d){V(i,e,d),t(e,s),r||(o=he(e,"click",l[0]),r=!0)},p:w,i:w,o:w,d(i){i&&n(e),r=!1,o()}}}function Ht(l){return Math.floor(Math.random()*(l+1))}function rs(l,e,s){let r,o;_e(l,dt,_=>s(4,r=_)),_e(l,Se,_=>s(5,o=_));let i,d;function g(){i!==void 0&&clearTimeout(i),d!=null&&clearInterval(d),i=setTimeout(()=>{let _=o;d=setInterval(()=>{_<=0?clearInterval(d):(_-=.5,Se.set(_))},50)},5*1e3),Se.update(_=>{const b=_+.25;return Math.min(b,100)}),dt.update(_=>_+1),localStorage.setItem("localCount",r.toString()),Yt()}let m;async function $(){g();const _=Ht(6),b=new Audio;if(b.crossOrigin="anonymous",b.src=`${vt}/sound/${_}`,m==null&&(m=new AudioContext),m!=null){const I=m.createMediaElementSource(b),y=Ht(2)-1,S=new StereoPannerNode(m,{pan:y});I.connect(S).connect(m.destination)}b.play()}return[$]}class os extends Q{constructor(e){super(),X(this,e,rs,as,Z,{})}}function ns(l){let e,s,r,o;return{c(){e=c("button"),s=h("i"),this.h()},l(i){e=f(i,"BUTTON",{class:!0});var d=u(e);s=p(d,"i"),d.forEach(n),this.h()},h(){a(e,"class","svelte-1jcs8z6")},m(i,d){V(i,e,d),t(e,s),r||(o=he(e,"click",l[0]),r=!0)},p:w,i:w,o:w,d(i){i&&n(e),r=!1,o()}}}function ls(l){const e=Ut();function s(){e("message")}return[s]}class is extends Q{constructor(e){super(),X(this,e,ls,ns,Z,{})}}function cs(l){let e,s,r,o,i,d,g,m,$,_,b,I,y,S,P,R,v,C,E,Te,Ve,z,Pe,Re,Ae,B,je,L,Me,ze,Be,D,le,Le,De,H,He,N,Ne,Ge,Oe,A,ie,Ue,Fe,ce,We,qe,T,pe,ee,G,Je,Ke,Ye,ve,O,Qe,U,Xe,Ze,et,me,F,tt,W,st,at,rt,be,j,ot,q,nt,lt,J,it,ct,ft,mt;return{c(){e=c("div"),s=c("div"),r=c("div"),o=c("button"),i=h("\u2715"),d=x(),g=c("div"),m=c("h1"),$=h("What is this?"),_=x(),b=c("p"),I=h("This is a site for "),y=c("a"),S=h("IRyS"),P=h(", one of Hololive's resident "),R=c("strike"),v=h("pons"),C=h(` VSingers! Inspired by
					`),E=c("a"),Te=h("impomu"),Ve=h(`
					and `),z=c("a"),Pe=h("faunaraara"),Re=h("."),Ae=x(),B=c("p"),je=h("For those interested in the source code for both the site and server, it can be found "),L=c("a"),Me=h("over here on GitHub"),ze=h("."),Be=x(),D=c("div"),le=c("h1"),Le=h("Where's the volume?"),De=x(),H=c("p"),He=h("All voice clips and their sources can also be found in the "),N=c("a"),Ne=h("GitHub repo"),Ge=h("."),Oe=x(),A=c("div"),ie=c("h1"),Ue=h("Credits"),Fe=x(),ce=c("p"),We=h("Lots of stuff was used or referred to in order to make this site:"),qe=x(),T=c("ul"),pe=c("li"),ee=c("p"),G=c("a"),Je=h("Chroneco's emotes and tweet"),Ke=h(" were used for the favicon and inspiration for theming."),Ye=x(),ve=c("li"),O=c("p"),Qe=h("The font used throughout is "),U=c("a"),Xe=h("Riffic Free Bold"),Ze=h("."),et=x(),me=c("li"),F=c("p"),tt=h("The frontend is written in "),W=c("a"),st=h("Svelte"),at=h("."),rt=x(),be=c("li"),j=c("p"),ot=h("The backend is written in "),q=c("a"),nt=h("Rust"),lt=h(`, using the
							`),J=c("a"),it=h("axum framework"),ct=h("."),this.h()},l(ge){e=f(ge,"DIV",{id:!0,class:!0});var ye=u(e);s=f(ye,"DIV",{class:!0});var bt=u(s);r=f(bt,"DIV",{class:!0});var K=u(r);o=f(K,"BUTTON",{class:!0});var gt=u(o);i=p(gt,"\u2715"),gt.forEach(n),d=k(K),g=f(K,"DIV",{class:!0});var fe=u(g);m=f(fe,"H1",{class:!0});var _t=u(m);$=p(_t,"What is this?"),_t.forEach(n),_=k(fe),b=f(fe,"P",{class:!0});var M=u(b);I=p(M,"This is a site for "),y=f(M,"A",{href:!0,target:!0,class:!0});var $t=u(y);S=p($t,"IRyS"),$t.forEach(n),P=p(M,", one of Hololive's resident "),R=f(M,"STRIKE",{});var yt=u(R);v=p(yt,"pons"),yt.forEach(n),C=p(M,` VSingers! Inspired by
					`),E=f(M,"A",{href:!0,target:!0,class:!0});var wt=u(E);Te=p(wt,"impomu"),wt.forEach(n),Ve=p(M,`
					and `),z=f(M,"A",{href:!0,target:!0,class:!0});var xt=u(z);Pe=p(xt,"faunaraara"),xt.forEach(n),Re=p(M,"."),M.forEach(n),Ae=k(fe),B=f(fe,"P",{class:!0});var we=u(B);je=p(we,"For those interested in the source code for both the site and server, it can be found "),L=f(we,"A",{href:!0,target:!0,class:!0});var kt=u(L);Me=p(kt,"over here on GitHub"),kt.forEach(n),ze=p(we,"."),we.forEach(n),fe.forEach(n),Be=k(K),D=f(K,"DIV",{class:!0});var xe=u(D);le=f(xe,"H1",{class:!0});var Et=u(le);Le=p(Et,"Where's the volume?"),Et.forEach(n),De=k(xe),H=f(xe,"P",{class:!0});var ke=u(H);He=p(ke,"All voice clips and their sources can also be found in the "),N=f(ke,"A",{href:!0,target:!0,class:!0});var It=u(N);Ne=p(It,"GitHub repo"),It.forEach(n),Ge=p(ke,"."),ke.forEach(n),xe.forEach(n),Oe=k(K),A=f(K,"DIV",{class:!0});var ue=u(A);ie=f(ue,"H1",{class:!0});var Ct=u(ie);Ue=p(Ct,"Credits"),Ct.forEach(n),Fe=k(ue),ce=f(ue,"P",{class:!0});var St=u(ce);We=p(St,"Lots of stuff was used or referred to in order to make this site:"),St.forEach(n),qe=k(ue),T=f(ue,"UL",{class:!0});var Y=u(T);pe=f(Y,"LI",{});var Tt=u(pe);ee=f(Tt,"P",{class:!0});var ut=u(ee);G=f(ut,"A",{href:!0,target:!0,class:!0});var Vt=u(G);Je=p(Vt,"Chroneco's emotes and tweet"),Vt.forEach(n),Ke=p(ut," were used for the favicon and inspiration for theming."),ut.forEach(n),Tt.forEach(n),Ye=k(Y),ve=f(Y,"LI",{});var Pt=u(ve);O=f(Pt,"P",{class:!0});var Ee=u(O);Qe=p(Ee,"The font used throughout is "),U=f(Ee,"A",{href:!0,target:!0,class:!0});var Rt=u(U);Xe=p(Rt,"Riffic Free Bold"),Rt.forEach(n),Ze=p(Ee,"."),Ee.forEach(n),Pt.forEach(n),et=k(Y),me=f(Y,"LI",{});var At=u(me);F=f(At,"P",{class:!0});var Ie=u(F);tt=p(Ie,"The frontend is written in "),W=f(Ie,"A",{href:!0,target:!0,class:!0});var jt=u(W);st=p(jt,"Svelte"),jt.forEach(n),at=p(Ie,"."),Ie.forEach(n),At.forEach(n),rt=k(Y),be=f(Y,"LI",{});var Mt=u(be);j=f(Mt,"P",{class:!0});var de=u(j);ot=p(de,"The backend is written in "),q=f(de,"A",{href:!0,target:!0,class:!0});var zt=u(q);nt=p(zt,"Rust"),zt.forEach(n),lt=p(de,`, using the
							`),J=f(de,"A",{href:!0,target:!0,class:!0});var Bt=u(J);it=p(Bt,"axum framework"),Bt.forEach(n),ct=p(de,"."),de.forEach(n),Mt.forEach(n),Y.forEach(n),ue.forEach(n),K.forEach(n),bt.forEach(n),ye.forEach(n),this.h()},h(){a(o,"class","close svelte-opiba4"),a(m,"class","svelte-opiba4"),a(y,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),a(y,"target","_blank"),a(y,"class","svelte-opiba4"),a(E,"href","https://impomu.com/"),a(E,"target","_blank"),a(E,"class","svelte-opiba4"),a(z,"href","https://faunaraara.com/"),a(z,"target","_blank"),a(z,"class","svelte-opiba4"),a(b,"class","svelte-opiba4"),a(L,"href","https://github.com/Pyreko/hows-the-volume"),a(L,"target","_blank"),a(L,"class","svelte-opiba4"),a(B,"class","svelte-opiba4"),a(g,"class","text-block svelte-opiba4"),a(le,"class","svelte-opiba4"),a(N,"href","https://github.com/Pyreko/hows-the-volume/tree/main/server/assets"),a(N,"target","_blank"),a(N,"class","svelte-opiba4"),a(H,"class","svelte-opiba4"),a(D,"class","text-block svelte-opiba4"),a(ie,"class","svelte-opiba4"),a(ce,"class","svelte-opiba4"),a(G,"href","https://twitter.com/chrone_co/status/1426878310328332292"),a(G,"target","_blank"),a(G,"class","svelte-opiba4"),a(ee,"class","svelte-opiba4"),a(U,"href","https://www.fontspring.com/fonts/inky-type/riffic"),a(U,"target","_blank"),a(U,"class","svelte-opiba4"),a(O,"class","svelte-opiba4"),a(W,"href","https://svelte.dev/"),a(W,"target","_blank"),a(W,"class","svelte-opiba4"),a(F,"class","svelte-opiba4"),a(q,"href","https://www.rust-lang.org/"),a(q,"target","_blank"),a(q,"class","svelte-opiba4"),a(J,"href","https://github.com/tokio-rs/axum"),a(J,"target","_blank"),a(J,"class","svelte-opiba4"),a(j,"class","svelte-opiba4"),a(T,"class","svelte-opiba4"),a(A,"class","text-block svelte-opiba4"),a(r,"class","modal-body svelte-opiba4"),a(s,"class","modal-wrapper svelte-opiba4"),a(e,"id","modal-background"),a(e,"class","svelte-opiba4")},m(ge,ye){V(ge,e,ye),t(e,s),t(s,r),t(r,o),t(o,i),t(r,d),t(r,g),t(g,m),t(m,$),t(g,_),t(g,b),t(b,I),t(b,y),t(y,S),t(b,P),t(b,R),t(R,v),t(b,C),t(b,E),t(E,Te),t(b,Ve),t(b,z),t(z,Pe),t(b,Re),t(g,Ae),t(g,B),t(B,je),t(B,L),t(L,Me),t(B,ze),t(r,Be),t(r,D),t(D,le),t(le,Le),t(D,De),t(D,H),t(H,He),t(H,N),t(N,Ne),t(H,Ge),t(r,Oe),t(r,A),t(A,ie),t(ie,Ue),t(A,Fe),t(A,ce),t(ce,We),t(A,qe),t(A,T),t(T,pe),t(pe,ee),t(ee,G),t(G,Je),t(ee,Ke),t(T,Ye),t(T,ve),t(ve,O),t(O,Qe),t(O,U),t(U,Xe),t(O,Ze),t(T,et),t(T,me),t(me,F),t(F,tt),t(F,W),t(W,st),t(F,at),t(T,rt),t(T,be),t(be,j),t(j,ot),t(j,q),t(q,nt),t(j,lt),t(j,J),t(J,it),t(j,ct),ft||(mt=[he(window,"keydown",fs),he(o,"click",ht),he(r,"click",Ft(l[0])),he(e,"click",ht)],ft=!0)},p:w,i:w,o:w,d(ge){ge&&n(e),ft=!1,Wt(mt)}}}function ht(){const l=document.getElementById("modal-background");l!=null&&(l.style.display="none")}function fs(l){l.key==="Escape"&&ht()}function us(l){function e(s){qt.call(this,l,s)}return[e]}class ds extends Q{constructor(e){super(),X(this,e,us,cs,Z,{})}}function hs(l){let e,s,r;return{c(){e=c("div"),s=c("img"),this.h()},l(o){e=f(o,"DIV",{class:!0});var i=u(e);s=f(i,"IMG",{src:!0,alt:!0,style:!0,class:!0}),i.forEach(n),this.h()},h(){Jt(s.src,r="/images/ehe.webp")||a(s,"src",r),a(s,"alt","A smug IRyS."),Lt(s,"opacity",l[0]+"%"),a(s,"class","svelte-177csrb"),a(e,"class","svelte-177csrb")},m(o,i){V(o,e,i),t(e,s)},p(o,[i]){i&1&&Lt(s,"opacity",o[0]+"%")},i:w,o:w,d(o){o&&n(e)}}}function ps(l,e,s){let r;return _e(l,Se,o=>s(0,r=o)),[r]}class vs extends Q{constructor(e){super(),X(this,e,ps,hs,Z,{})}}function ms(l){let e,s,r,o,i,d,g,m,$;return{c(){e=c("div"),s=c("p"),r=h("Subscribe to IRyS on "),o=c("a"),i=h("YouTube"),d=h(`
		and follow her on `),g=c("a"),m=h("Twitter"),$=h("!"),this.h()},l(_){e=f(_,"DIV",{});var b=u(e);s=f(b,"P",{class:!0});var I=u(s);r=p(I,"Subscribe to IRyS on "),o=f(I,"A",{href:!0,target:!0});var y=u(o);i=p(y,"YouTube"),y.forEach(n),d=p(I,`
		and follow her on `),g=f(I,"A",{href:!0,target:!0});var S=u(g);m=p(S,"Twitter"),S.forEach(n),$=p(I,"!"),I.forEach(n),b.forEach(n),this.h()},h(){a(o,"href","https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"),a(o,"target","_blank"),a(g,"href","https://twitter.com/irys_en"),a(g,"target","_blank"),a(s,"class","svelte-cxhu4a")},m(_,b){V(_,e,b),t(e,s),t(s,r),t(s,o),t(o,i),t(s,d),t(s,g),t(g,m),t(s,$)},p:w,i:w,o:w,d(_){_&&n(e)}}}class bs extends Q{constructor(e){super(),X(this,e,null,ms,Z,{})}}function gs(l){let e,s,r,o,i,d,g,m,$,_,b,I,y,S,P,R;return s=new is({}),s.$on("message",_s),o=new ds({}),d=new vs({}),$=new Zt({}),b=new ss({}),y=new os({}),P=new bs({}),{c(){e=c("div"),te(s.$$.fragment),r=x(),te(o.$$.fragment),i=x(),te(d.$$.fragment),g=x(),m=c("div"),te($.$$.fragment),_=x(),te(b.$$.fragment),I=x(),te(y.$$.fragment),S=x(),te(P.$$.fragment),this.h()},l(v){e=f(v,"DIV",{class:!0});var C=u(e);se(s.$$.fragment,C),C.forEach(n),r=k(v),se(o.$$.fragment,v),i=k(v),se(d.$$.fragment,v),g=k(v),m=f(v,"DIV",{class:!0});var E=u(m);se($.$$.fragment,E),_=k(E),se(b.$$.fragment,E),I=k(E),se(y.$$.fragment,E),S=k(E),se(P.$$.fragment,E),E.forEach(n),this.h()},h(){a(e,"class","info-wrapper svelte-b8b3it"),a(m,"class","box svelte-b8b3it")},m(v,C){V(v,e,C),ae(s,e,null),V(v,r,C),ae(o,v,C),V(v,i,C),ae(d,v,C),V(v,g,C),V(v,m,C),ae($,m,null),t(m,_),ae(b,m,null),t(m,I),ae(y,m,null),t(m,S),ae(P,m,null),R=!0},p:w,i(v){R||(re(s.$$.fragment,v),re(o.$$.fragment,v),re(d.$$.fragment,v),re($.$$.fragment,v),re(b.$$.fragment,v),re(y.$$.fragment,v),re(P.$$.fragment,v),R=!0)},o(v){oe(s.$$.fragment,v),oe(o.$$.fragment,v),oe(d.$$.fragment,v),oe($.$$.fragment,v),oe(b.$$.fragment,v),oe(y.$$.fragment,v),oe(P.$$.fragment,v),R=!1},d(v){v&&n(e),ne(s),v&&n(r),ne(o,v),v&&n(i),ne(d,v),v&&n(g),v&&n(m),ne($),ne(b),ne(y),ne(P)}}}function _s(){const l=document.getElementById("modal-background");l!=null&&(l.style.display="flex")}function $s(l){return Gt().then(e=>$e.set(e)).catch(()=>$e.set(0)),[]}class xs extends Q{constructor(e){super(),X(this,e,$s,gs,Z,{})}}export{xs as default};