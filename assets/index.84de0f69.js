import{g as b,u as F,R as A,e as x,l as D,M as V,A as T,m as N,r as P}from"./index.0a6f9e2d.js";import{u as $}from"./useRoute.eb18b027.js";import{a as j,d as z,r as M,c as K,t as O,a1 as B,a2 as I,_ as g,Y as y,e as v,f as a,x as S,P as _,m as U,F as C,a3 as q,N as w}from"./@vue.e4b79c09.js";import"./vuex.b95b093b.js";import"./axios.19415c93.js";import"./qs.b3565f98.js";import"./side-channel.e93026fc.js";import"./get-intrinsic.09b068ae.js";import"./has-symbols.d7d9af64.js";import"./function-bind.93ccd396.js";import"./has.4e889cdf.js";import"./call-bind.0ec8bfba.js";import"./object-inspect.17a6c876.js";import"./element-plus.4d933211.js";import"./lodash.dfc5297e.js";import"./resize-observer-polyfill.8deb1e21.js";import"./normalize-wheel.232c6e0a.js";import"./mitt.f672539e.js";import"./dayjs.39cf2b70.js";import"./async-validator.1fa0d626.js";import"./@popperjs.20e5d135.js";import"./vue-router.8665769a.js";import"./md5.a528f825.js";import"./crypt.2f2b878b.js";import"./charenc.26816e87.js";import"./is-buffer.ff293ffb.js";import"./store.33a50f5f.js";import"./nprogress.629858ae.js";function L(){const e=j(!1),o=s=>{for(const i in s)if(Object.prototype.hasOwnProperty.call(s,i)&&Object.keys(s).indexOf(i)===0){const r=s[i];b(r[0].message);break}},f=s=>new Promise((i,n)=>{s.value&&s.value.validate((r,l)=>{r?i(r):n(l)}),n("ref\u7EC4\u4EF6\u672A\u52A0\u8F7D\u6210\u529F")});return{gSubmitLoading:e,gSubmit:async(s,i)=>{try{if(e.value=!0,await f(s))try{await i()}catch(r){console.log(r)}}catch(n){o(n)}finally{e.value=!1}}}}const Q="\u952E\u76D8\u4FA0\u5927\u4F5C\u6218",G="KeyboardMan MajorCombat";var R=z({setup(){const{pushRouteFullpath:e,currentQuery:o,replaceRouteQuery:f}=$(),{gSubmitLoading:h,gSubmit:s}=L(),i=F(),n=j(),r=j(),l=M({modelRef:new A}),c=K(()=>o.value.type==="reg"),t={pushRouteFullpath:e,replaceRouteQuery:f,async login(){const u=x(l.modelRef,["password"]),{data:m,msg:p}=await D(u);if(m){i.commit(V.SET_USERINFO,m),await i.dispatch(T.TOKEN_AUTH);const k=o.value.redirect?decodeURIComponent(o.value.redirect):N;e(k)}else b(p,"warning")},async registry(){const u=x(l.modelRef,["password"]),{data:m,msg:p}=await P(u);m?(b("\u6CE8\u518C\u6210\u529F","success"),f({type:"login"})):b(p,"warning")},handleSubmit(u=!0){u?s(n,t.login):s(n,t.registry)},handleKeySubmit(u=!1){u||t.handleSubmit(!c.value)}},E={rule:{name:{required:!0,message:"\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},password:{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},confirmPassword:[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"},{validator:(u,m,p)=>{m!==l.modelRef.password?p(new Error("\u4E24\u6B21\u5BC6\u7801\u4E0D\u4E00\u81F4")):p()},trigger:"blur"}]}};return{isReg:c,FormRef:n,nameRef:r,gSubmitLoading:h,websiteName:Q,websiteNameEn:G,...O(l),...t,...E}}}),Ve=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.login-wrap[data-v-03085019] {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
}
.form-box[data-v-03085019] {
  border-radius: 10px;
  width: 400px;
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 0 2px 1px #13a10e, 0 0 10px 0px #13a10e inset;
  position: relative;
  z-index: 2;
}
.form-box[data-v-03085019] label {
  color: #13a10e;
}
.form-box[data-v-03085019] input {
  background: transparent;
  color: #13a10e;
  -webkit-text-fill-color: #13a10e;
  border-color: #13a10e;
}
.form-box[data-v-03085019] input:-webkit-autofill {
  transition: background-color 5000s ease-in-out 0s;
}
.form-box[data-v-03085019] button {
  padding: 10px 20px;
  font-size: 18px;
}
.form-box[data-v-03085019] .el-form-item__error {
  color: #666;
}
.title[data-v-03085019] {
  font-size: 60px;
  font-weight: 600;
  margin: 0;
  line-height: 100px;
  text-shadow: 0 0 10px rgba(50, 255, 50, 0.5), 0 0 5px rgba(100, 255, 100, 0.5);
  color: #fff;
  animation: breathTextColor-03085019 2s infinite;
}
.title.small[data-v-03085019] {
  animation: breathTextColor-03085019 2s 1s infinite;
  font-size: 30px;
}
.overlay[data-v-03085019] {
  background-image: linear-gradient(transparent 0%, rgba(10, 16, 10, 0.5) 50%);
  background-size: 1000px 2px;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}
@keyframes breathTextColor-03085019 {
from {
    color: #fff;
}
50% {
    color: #6f6;
}
to {
    color: #fff;
}
}`;const d=q();B("data-v-03085019");const H={class:"login-wrap"},Y={class:"title"},J=w("\u767B\u5F55"),W=w("\u6CE8\u518C"),X=w("\u6CE8\u518C"),Z=w("\u8FD4\u56DE\u767B\u5F55"),ee={class:"title small"},oe=a("div",{class:"overlay"},null,-1);I();const te=d((e,o,f,h,s,i)=>{const n=g("el-input"),r=g("el-form-item"),l=g("el-button"),c=g("el-form");return y(),v("div",H,[a("div",Y,S(e.websiteName),1),a(c,{ref:"FormRef",model:e.modelRef,rules:e.rule,class:"form-box","label-width":"80px"},{default:d(()=>[a(r,{label:"\u7528\u6237\u540D",prop:"name"},{default:d(()=>[a(n,{ref:"nameRef",modelValue:e.modelRef.name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.modelRef.name=t),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5927\u540D"},null,8,["modelValue"])]),_:1}),a(r,{label:"\u5BC6\u7801",prop:"password"},{default:d(()=>[a(n,{type:"password",modelValue:e.modelRef.password,"onUpdate:modelValue":o[2]||(o[2]=t=>e.modelRef.password=t),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u4F60\u7684\u5BC6\u7801",onKeydown:o[3]||(o[3]=_(t=>e.handleKeySubmit(e.isReg),["enter"]))},null,8,["modelValue"])]),_:1}),e.isReg?(y(),v(r,{key:0,label:"\u786E\u8BA4\u5BC6\u7801",prop:"confirmPassword"},{default:d(()=>[a(n,{type:"password",modelValue:e.modelRef.confirmPassword,"onUpdate:modelValue":o[4]||(o[4]=t=>e.modelRef.confirmPassword=t),modelModifiers:{trim:!0},placeholder:"\u8BF7\u8F93\u5165\u786E\u8BA4\u5BC6\u7801",onKeydown:o[5]||(o[5]=_(t=>e.handleKeySubmit(),["enter"]))},null,8,["modelValue"])]),_:1})):U("",!0),a(r,null,{default:d(()=>[e.isReg?(y(),v(C,{key:1},[a(l,{type:"text",onClick:o[8]||(o[8]=t=>e.handleSubmit(!1)),loading:e.gSubmitLoading},{default:d(()=>[X]),_:1},8,["loading"]),a(l,{type:"text",onClick:o[9]||(o[9]=t=>e.replaceRouteQuery({type:"login"}))},{default:d(()=>[Z]),_:1})],64)):(y(),v(C,{key:0},[a(l,{type:"text",onClick:o[6]||(o[6]=t=>e.handleSubmit()),loading:e.gSubmitLoading},{default:d(()=>[J]),_:1},8,["loading"]),a(l,{type:"text",onClick:o[7]||(o[7]=t=>e.replaceRouteQuery({type:"reg"}))},{default:d(()=>[W]),_:1})],64))]),_:1})]),_:1},8,["model","rules"]),a("div",ee,S(e.websiteNameEn),1),oe])});R.render=te,R.__scopeId="data-v-03085019";export default R;
