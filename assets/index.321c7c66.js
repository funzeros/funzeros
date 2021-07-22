import{m}from"./index.0f869c7f.js";import{u as f}from"./useRoute.873f76d3.js";import{G as h}from"./custom.daebdf6c.js";import{d as b,r as v,a as j,c as g,o as w,K as y,t as k,a1 as x,a2 as S,Y as _,e as F,D as p,L as d,f as a,x as I,a3 as M,N as c}from"./@vue.9f0cb7b2.js";import"./vuex.485fcd4c.js";import"./axios.19415c93.js";import"./qs.790e2108.js";import"./side-channel.e808a568.js";import"./get-intrinsic.09b068ae.js";import"./has-symbols.d7d9af64.js";import"./function-bind.93ccd396.js";import"./has.4e889cdf.js";import"./call-bind.0ec8bfba.js";import"./object-inspect.70c5c9d3.js";import"./element-plus.caa196dc.js";import"./lodash.ee5bdbbe.js";import"./resize-observer-polyfill.8deb1e21.js";import"./normalize-wheel.232c6e0a.js";import"./mitt.f672539e.js";import"./dayjs.12fd9415.js";import"./async-validator.1fa0d626.js";import"./@popperjs.20e5d135.js";import"./vue-router.1d187b04.js";import"./store.3f7bbe01.js";import"./md5.a528f825.js";import"./crypt.2f2b878b.js";import"./charenc.26816e87.js";import"./is-buffer.ff293ffb.js";import"./nprogress.cbbe5284.js";var l=b({setup(){const{pushRouteFullpath:e}=f(),n=["KeyboardMan","MajorCombat"],t=v({pShowFlag:!1,gShowFlag:!1,disappear:!1,password:"",counter:0,innerText:""});let r;const o=j([]),u=g(()=>t.password.split("")),s={init(){t.password=h.randomArray(n),r=setInterval(function(){u.value.forEach((D,i)=>{o.value[i]=i<t.counter?t.password.charAt(i):Math.random().toString(36).charAt(2)}),t.innerText=o.value.join(""),t.counter===t.password.length&&clearInterval(r)},25),document.body.addEventListener("keydown",s.hack)},hack(){if(!t.pShowFlag)return s.start();if(++t.counter===t.password.length){t.gShowFlag=!0;return}t.counter>t.password.length&&e(m)},start(){t.pShowFlag=!0}};return w(()=>{s.init()}),y(()=>{document.body.removeEventListener("keydown",s.hack)}),{...k(t),...s,characters:o}}}),ct=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
@keyframes blink-7e62e448 {
50% {
    opacity: 1;
}
100% {
    opacity: 0;
}
}
.startup[data-v-7e62e448] {
  height: 100%;
  width: 100%;
  color: #13a10e;
  font-family: "Share Tech Mono", monospace;
}
.startup .password[data-v-7e62e448] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 60px;
  letter-spacing: 5px;
  text-transform: uppercase;
}
.startup .granted[data-v-7e62e448] {
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 30px;
}
.startup .info[data-v-7e62e448] {
  position: absolute;
  top: 0;
  left: 0;
}
.startup .info p[data-v-7e62e448] {
  margin: 10px;
  line-height: 24px;
}
.startup .button[data-v-7e62e448] {
  background-color: #111;
  border: solid 1px #13a10e;
  padding: 8px 25px;
  font-size: 26px;
  letter-spacing: 2px;
  cursor: pointer;
}
.startup .button[data-v-7e62e448]:hover {
  background: rgba(10, 102, 7, 0.1);
}
.startup .start[data-v-7e62e448] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.startup .blink[data-v-7e62e448] {
  will-change: opacity;
  animation: blink-7e62e448 0.8s steps(1, start) infinite alternate;
}`;const T=M();x("data-v-7e62e448");const $={class:"startup"},z=a("div",{class:"info"},[a("p",null,[c("\u60A8\u5DF2\u653B\u7834\u4E3B\u673A\u9632\u706B\u5899,"),a("br"),c("\u60A8\u9700\u8981\u66B4\u529B\u7834\u89E3\u8BBF\u95EE\u5BC6\u7801...")]),a("p",{class:""},[c("\u6309\u4E0B\u4EFB\u610F\u952E"),a("span",{class:"blink"},"_")])],-1),R={class:"blink granted"};S();const C=T((e,n,t,r,o,u)=>(_(),F("div",$,[z,p(a("div",{class:"password",onClick:n[1]||(n[1]=s=>e.hack())},I(e.innerText),513),[[d,e.pShowFlag]]),p(a("div",{class:"button start",onClick:n[2]||(n[2]=s=>e.start())}," \u5F00\u59CB\u9A87\u5165! ",512),[[d,!e.pShowFlag]]),p(a("div",R,"\u6388\u6743\u8BB8\u53EF!",512),[[d,e.gShowFlag]])])));l.render=C,l.__scopeId="data-v-7e62e448";export default l;
