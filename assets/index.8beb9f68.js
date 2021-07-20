import"./pixi.js.dd61c7eb.js";import{E as A,t as R,m as q}from"./useEngin.5c8433ed.js";import{G,f as H}from"./@pixi.dfabe1c3.js";import{u as P,M as j,a as V}from"./index.399cf2a1.js";import{a as W}from"./custom.daebdf6c.js";import{d as _,a as g,o as I,K as z,a1 as h,a2 as v,Y as p,e as u,a3 as b,F as x,I as k,f as d,x as Y,c as D,w as N,n as J,_ as f,P as Q,i as O,a5 as Z,r as ee,t as ne,E as te,p as X}from"./@vue.e4b79c09.js";import{u as ae}from"./useEquip.2170267a.js";import"./promise-polyfill.7a7f9c83.js";import"./object-assign.24e5ba39.js";import"./eventemitter3.3bac0dbd.js";import"./earcut.c8ee28d1.js";import"./resource-loader.da9c09a4.js";import"./parse-uri.68f12d7d.js";import"./mini-signals.509d95ee.js";import"./ismobilejs.5c6954b9.js";import"./url.1ae0c968.js";import"./element-plus.4d933211.js";import"./lodash.dfc5297e.js";import"./resize-observer-polyfill.8deb1e21.js";import"./normalize-wheel.232c6e0a.js";import"./mitt.f672539e.js";import"./dayjs.39cf2b70.js";import"./async-validator.1fa0d626.js";import"./@popperjs.20e5d135.js";import"./querystring.d83c7c26.js";import"./vuex.b95b093b.js";import"./axios.19415c93.js";import"./qs.b3565f98.js";import"./side-channel.e93026fc.js";import"./get-intrinsic.09b068ae.js";import"./has-symbols.d7d9af64.js";import"./function-bind.93ccd396.js";import"./has.4e889cdf.js";import"./call-bind.0ec8bfba.js";import"./object-inspect.17a6c876.js";import"./vue-router.8665769a.js";import"./store.33a50f5f.js";import"./md5.a528f825.js";import"./crypt.2f2b878b.js";import"./charenc.26816e87.js";import"./is-buffer.ff293ffb.js";import"./nprogress.629858ae.js";class w extends A{constructor(e,n){super(e);this.effectiveKey=["w","a","s","d"],this.keyPool=new Map,this.speed=1,this.players=new Map,this.colorList=[2293282,16777215,2237182,16711202],this.eventPool={keyDown:[],keyUp:[],key:[]},this.update=a=>{const t={x:this.roleP.x,y:this.roleP.y};this.move(a),this.refreshOthers(a),!(this.roleP.x===t.x&&this.roleP.y===t.y)&&(this.refreshRole(),this.refreshCamera(),w.arrayBoxesIntersect(this.mapContainer.children,this.mPlayer.role)&&(this.roleP=t))},this.controlKD=a=>{if(window.isInput)return;const t=R(a.key);!this.effectiveKey.includes(t)||this.keyPool.has(t)||(this.keyPool.set(t,!0),this.executeEvent("key",a))},this.controlKU=a=>{const t=R(a.key);!this.effectiveKey.includes(t)||!this.keyPool.has(t)||(this.keyPool.delete(t),this.executeEvent("key",a))},this.user=n,this.roleP.x=n.roleP.x,this.roleP.y=n.roleP.y,this.stageAdd(this.mapContainer),this.stageAdd(this.roleContainer),e.appendChild(this.app.view),this.renderMap(q),this.mPlayer={...this.role(this.user.name,this.roleP),userInfo:this.user},this.app.ticker.autoStart=!0,this.app.ticker.minFPS=30,this.app.ticker.maxFPS=60,this.app.ticker.add(this.update),this.app.ticker.start()}move(e){this.keyPool.has("w")&&(this.roleP.y-=this.speed*e),this.keyPool.has("a")&&(this.roleP.x-=this.speed*e),this.keyPool.has("s")&&(this.roleP.y+=this.speed*e),this.keyPool.has("d")&&(this.roleP.x+=this.speed*e)}moveOthers(e,n){const{userInfo:a}=n,{keyPools:t}=a;t.includes("w")&&(a.roleP.y-=this.speed*e),t.includes("a")&&(a.roleP.x-=this.speed*e),t.includes("s")&&(a.roleP.y+=this.speed*e),t.includes("d")&&(a.roleP.x+=this.speed*e)}executeEvent(e,n){this.eventPool[e].forEach(a=>{a(this,n)})}registeredControl(){document.body.addEventListener("keydown",this.controlKD),document.body.addEventListener("keyup",this.controlKU)}cancelledControl(){document.body.removeEventListener("keydown",this.controlKD),document.body.removeEventListener("keyup",this.controlKU)}addEvent(e,n){this.eventPool[e].push(n)}removeEvent(e,n){const a=this.eventPool[e].findIndex(t=>t===n);a>-1&&this.eventPool[e].splice(a,1)}clearEvent(){Object.keys(this.eventPool).forEach(e=>{const n=e;this.eventPool[n].length=0})}role(e,n,a=0){const t=new G;t.beginFill(this.colorList[a]),t.drawCircle(0,0,4),t.endFill(),t.x=this.calcXY(n.x),t.y=this.calcXY(n.y);const o=new H(e,{fontSize:"12px",fill:this.colorList[a]});return o.x=this.calcXY(n.x)+5,o.y=this.calcXY(n.y)-10,this.roleAdd(t),this.roleAdd(o),{role:t,text:o}}refreshRole(){this.mPlayer.role.x=this.calcXY(this.roleP.x),this.mPlayer.role.y=this.calcXY(this.roleP.y),this.mPlayer.text.x=this.calcXY(this.roleP.x)+5,this.mPlayer.text.y=this.calcXY(this.roleP.y)-10}refreshOtherRole(e,n){e.role.x=this.calcXY(n.x),e.role.y=this.calcXY(n.y),e.text.x=this.calcXY(n.x)+5,e.text.y=this.calcXY(n.y)-10}refreshOthers(e){this.players.forEach(n=>{if(n.userInfo.keyPools.length){const a={x:n.userInfo.roleP.x,y:n.userInfo.roleP.y};this.moveOthers(e,n),this.refreshOtherRole(n,{x:n.userInfo.roleP.x,y:n.userInfo.roleP.y}),w.arrayBoxesIntersect(this.mapContainer.children,n.role)&&(n.userInfo.roleP=a)}})}addTickEvent(e){this.app.ticker.add(()=>e(this))}stopTicker(){this.app.ticker.stop()}clearTicker(){this.app.ticker.destroy()}startTicker(){this.app.ticker.start()}destroy(){this.clearTicker(),this.cancelledControl(),this.clearEvent()}updatePlayers(e){const n=[];e.forEach(a=>{if(n.push(a.id),a.id===this.user.id)return;if(!this.players.has(a.id)){const o={...this.role(a.name,{x:a.roleP.x,y:a.roleP.y},1),userInfo:a};this.players.set(a.id,o)}const t=this.players.get(a.id);this.refreshOtherRole(t,{x:a.roleP.x,y:a.roleP.y})}),this.players.forEach((a,t)=>{if(n.includes(t))return;const{role:o,text:s}=this.players.get(t);this.roleDel(o),this.roleDel(s),this.players.delete(t)})}exePlayerDirective(e){if(this.players.has(e.id)){const n=this.players.get(e.id);Object.assign(n.userInfo,e),this.players.set(e.id,n),this.refreshOtherRole(n,{x:e.roleP.x,y:e.roleP.y})}else{const n={...this.role(e.name,{x:e.roleP.x,y:e.roleP.y},1),userInfo:e};this.players.set(e.id,n)}}}var C=_({setup(){const i=P(),e=g(),n=(o,s)=>{i.getters.game.updatePlayers(s.data)},a=(o,s)=>{i.getters.game.exePlayerDirective(s.data)},t=i.getters.KBWSIns;return I(()=>{const o=new w(e.value,i.getters.userInfo);i.commit(j.SET_GAME,o),o.registeredControl(),!!t&&(t.on("syncUsers",n),t.on("syncDirective",a),o.addEvent("key",s=>{t.send({type:"syncDirective",data:{roleP:s.roleP,keyPools:W.getKeys(s.keyPool)}})}),t.send({type:"syncUsers",data:{roleP:o.roleP,keyPools:[]}}))}),z(()=>{i.getters.game?.stopTicker(),i.commit(j.CLEAR_GAME),!!t&&(t.remove("syncUsers",n),t.remove("syncUsers",a))}),{mapWrapRef:e}}}),Tn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.map-wrap[data-v-5ad6b78e] {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}`;const ie=b();h("data-v-5ad6b78e");const oe={class:"map-wrap",ref:"mapWrapRef"};v();const se=ie((i,e,n,a,t,o)=>(p(),u("div",oe,null,512)));C.render=se,C.__scopeId="data-v-5ad6b78e";var E=_({setup(){const i=[{name:"w",keyCode:87},{name:"a",keyCode:65},{name:"s",keyCode:83},{name:"d",keyCode:68},{name:"enter",keyCode:13},{name:"space",keyCode:32}],e=i.map(({keyCode:o})=>o),n=g({}),a=o=>{window.isInput||!e.includes(o.keyCode)||(n.value[o.keyCode]=!0)},t=o=>{!e.includes(o.keyCode)||delete n.value[o.keyCode]};return I(()=>{document.body.addEventListener("keydown",a),document.body.addEventListener("keyup",t)}),z(()=>{document.body.removeEventListener("keydown",a),document.body.removeEventListener("keyup",t)}),{btnList:i,keyPool:n}}}),Mn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.kb-wrap[data-v-15817c86] {
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(3, 50px);
  gap: 10px;
  align-content: center;
}
.kb-wrap > div[data-v-15817c86] {
  height: 100%;
  background-color: #2f80ff;
  text-align: center;
  line-height: 50px;
  user-select: none;
  border-radius: 4px;
  box-shadow: 2px 2px 4px 0 #fff;
}
.kb-wrap > div[data-v-15817c86]::after {
  content: attr(data-name);
}
.kb-wrap > div.active[data-v-15817c86] {
  background-color: #fe9b00;
  box-shadow: 2px 2px 4px 0 #fff, 2px 2px 10px 4px #fe9b00;
}
.kb-wrap > div.disabled[data-v-15817c86] {
  background-color: #666;
}
.kb-wrap .w[data-v-15817c86] {
  grid-area: 1/2/2/3;
}
.kb-wrap .a[data-v-15817c86] {
  grid-area: 2/1/3/2;
}
.kb-wrap .s[data-v-15817c86] {
  grid-area: 2/2/3/3;
}
.kb-wrap .d[data-v-15817c86] {
  grid-area: 2/3/3/4;
}
.kb-wrap .enter[data-v-15817c86] {
  grid-area: 2/4/4/5;
  line-height: 110px;
}
.kb-wrap .space[data-v-15817c86] {
  grid-area: 3/1/4/4;
}`;const de=b();h("data-v-15817c86");const ce={class:"kb-wrap"};v();const re=de((i,e,n,a,t,o)=>(p(),u("div",ce,[(p(!0),u(x,null,k(i.btnList,s=>(p(),u("div",{class:[s.name,s.keyCode in i.keyPool?"active":""],"data-name":s.name,key:s.name},null,10,["data-name"]))),128))])));E.render=re,E.__scopeId="data-v-15817c86";var S=_({props:{value:{type:Object,required:!0}},setup(){return{...{transf(e){return e.replace(/<(\w+)[^>]*>(.*?<\/\1>)?/g,"").replace(/\[[\w\-]*\]/g,n=>`<svg class="icon" aria-hidden="true" style="font-size: 30px">
                    <use xlink:href="#face-${n.slice(1,n.length-1)}"></use>
                  </svg>`)}}}}}),Kn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.msg-item[data-v-029c304e] {
  color: #13a10e;
  word-break: break-all;
  line-height: 24px;
}
.msg-item[data-v-029c304e]:not(:first-of-type) {
  margin-top: 5px;
}
.msg-item[data-v-029c304e] svg {
  transform: translateY(5px);
}
.msg-item .content[data-v-029c304e] {
  color: #999;
}`;const le=b();h("data-v-029c304e");const pe={class:"msg-item"};v();const ue=le((i,e,n,a,t,o)=>(p(),u("div",pe,[d("span",null,"["+Y(i.value.time)+"]",1),d("span",null,Y(i.value.name)+"\uFF1A",1),d("span",{class:"content",innerHTML:i.transf(i.value.content)},null,8,["innerHTML"])])));S.render=ue,S.__scopeId="data-v-029c304e";const fe="2605792",me="face",_e="faceicon",he="face-",ve="\u8868\u60C5\u5305",be=[{icon_id:"20574665",name:"\u53EF\u7231",font_class:"keai",unicode:"e631",unicode_decimal:58929},{icon_id:"20574666",name:"\u673A\u667A",font_class:"jizhi",unicode:"e632",unicode_decimal:58930},{icon_id:"20574667",name:"\u53EF\u601C",font_class:"kelian",unicode:"e633",unicode_decimal:58931},{icon_id:"20574668",name:"\u62A0\u9F3B",font_class:"koubi",unicode:"e634",unicode_decimal:58932},{icon_id:"20574672",name:"\u9177",font_class:"ku",unicode:"e635",unicode_decimal:58933},{icon_id:"20574675",name:"\u6D41\u6C57\u6ED1\u7A3D",font_class:"liuhanhuaji",unicode:"e636",unicode_decimal:58934},{icon_id:"20574678",name:"\u96BE\u8FC7",font_class:"nanguo",unicode:"e637",unicode_decimal:58935},{icon_id:"20574679",name:"\u8010\u514B\u5634",font_class:"naikezui",unicode:"e638",unicode_decimal:58936},{icon_id:"20574681",name:"\u6012",font_class:"nu",unicode:"e639",unicode_decimal:58937},{icon_id:"20574682",name:"\u6487\u5634",font_class:"piezui",unicode:"e63a",unicode_decimal:58938},{icon_id:"20574683",name:"\u55B5\u55B5",font_class:"miaomiao",unicode:"e63b",unicode_decimal:58939},{icon_id:"20574684",name:"\u58A8\u955C\u6ED1\u7A3D",font_class:"mojinghuaji",unicode:"e63c",unicode_decimal:58940},{icon_id:"20574685",name:"\u4EB2\u4EB2",font_class:"qinqin",unicode:"e63d",unicode_decimal:58941},{icon_id:"20574686",name:"\u55B7\u8840",font_class:"penxie",unicode:"e63e",unicode_decimal:58942},{icon_id:"20574687",name:"\u5F31",font_class:"ruo",unicode:"e63f",unicode_decimal:58943},{icon_id:"20574688",name:"\u8272",font_class:"se",unicode:"e640",unicode_decimal:58944},{icon_id:"20574689",name:"\u55B7",font_class:"pen",unicode:"e641",unicode_decimal:58945},{icon_id:"20574690",name:"\u5F3A",font_class:"qiang",unicode:"e642",unicode_decimal:58946},{icon_id:"20574691",name:"\u5657",font_class:"pu",unicode:"e643",unicode_decimal:58947},{icon_id:"20574692",name:"\u7761",font_class:"shui",unicode:"e644",unicode_decimal:58948},{icon_id:"20574693",name:"\u53D7\u8650\u6ED1\u7A3D",font_class:"shounvehuaji",unicode:"e645",unicode_decimal:58949},{icon_id:"20574695",name:"\u5410\u820C",font_class:"tushe",unicode:"e646",unicode_decimal:58950},{icon_id:"20574696",name:"\u6258\u816E",font_class:"tuosai",unicode:"e647",unicode_decimal:58951},{icon_id:"20574697",name:"\u5FAE\u7B11",font_class:"weixiao",unicode:"e648",unicode_decimal:58952},{icon_id:"20574698",name:"\u59D4\u5C48",font_class:"weiqu",unicode:"e649",unicode_decimal:58953},{icon_id:"20574699",name:"\u65E0\u8BED",font_class:"wuyu",unicode:"e64a",unicode_decimal:58954},{icon_id:"20574700",name:"\u6211\u6700\u7F8E",font_class:"wozuimei",unicode:"e64b",unicode_decimal:58955},{icon_id:"20574701",name:"\u65E0\u5948",font_class:"wunai",unicode:"e64c",unicode_decimal:58956},{icon_id:"20574706",name:"\u6342\u5634\u7B11",font_class:"wuzuixiao",unicode:"e64d",unicode_decimal:58957},{icon_id:"20574708",name:"\u7B11\u989C",font_class:"xiaoyan",unicode:"e64e",unicode_decimal:58958},{icon_id:"20574709",name:"\u6342\u8138",font_class:"wulian",unicode:"e64f",unicode_decimal:58959},{icon_id:"20574710",name:"\u5FAE\u5FAE\u4E00\u7B11",font_class:"weiweiyixiao",unicode:"e650",unicode_decimal:58960},{icon_id:"20574711",name:"\u7B11\u54ED",font_class:"xiaoku",unicode:"e651",unicode_decimal:58961},{icon_id:"20574714",name:"\u8036",font_class:"ye",unicode:"e652",unicode_decimal:58962},{icon_id:"20574719",name:"\u7591\u95EE",font_class:"yiwen",unicode:"e653",unicode_decimal:58963},{icon_id:"20574722",name:"\u9634\u9669",font_class:"yinxian",unicode:"e654",unicode_decimal:58964},{icon_id:"20574723",name:"\u518D\u89C1",font_class:"zaijian",unicode:"e655",unicode_decimal:58965},{icon_id:"20574725",name:"\u76B1\u7709",font_class:"zhoumei",unicode:"e656",unicode_decimal:58966},{icon_id:"20574727",name:"qq\u72D7\u5934",font_class:"qqgoutou",unicode:"e657",unicode_decimal:58967},{icon_id:"20574728",name:"COS \u6ED1\u7A3D",font_class:"COShuaji",unicode:"e658",unicode_decimal:58968},{icon_id:"20574729",name:"nb",font_class:"nb",unicode:"e659",unicode_decimal:58969},{icon_id:"20745947",name:"\u72D7\u5934-\u957F\u8349",font_class:"goutou-changcao",unicode:"e65a",unicode_decimal:58970},{icon_id:"20574613",name:"106",font_class:"106",unicode:"e605",unicode_decimal:58885},{icon_id:"20574614",name:"107",font_class:"107",unicode:"e606",unicode_decimal:58886},{icon_id:"20574616",name:"108",font_class:"108",unicode:"e607",unicode_decimal:58887},{icon_id:"20574618",name:"1011",font_class:"1011",unicode:"e608",unicode_decimal:58888},{icon_id:"20574619",name:"105",font_class:"105",unicode:"e604",unicode_decimal:58884},{icon_id:"20574621",name:"1015",font_class:"1015",unicode:"e609",unicode_decimal:58889},{icon_id:"20574622",name:"1014",font_class:"1014",unicode:"e60a",unicode_decimal:58890},{icon_id:"20574623",name:"1013",font_class:"1013",unicode:"e60b",unicode_decimal:58891},{icon_id:"20574625",name:"1020",font_class:"1020",unicode:"e60c",unicode_decimal:58892},{icon_id:"20574627",name:"1017",font_class:"1017",unicode:"e60d",unicode_decimal:58893},{icon_id:"20574628",name:"1010",font_class:"1010",unicode:"e60e",unicode_decimal:58894},{icon_id:"20574629",name:"109",font_class:"109",unicode:"e60f",unicode_decimal:58895},{icon_id:"20574630",name:"\u62B1\u62F3",font_class:"baoquan",unicode:"e610",unicode_decimal:58896},{icon_id:"20574631",name:"\u50B2\u6162",font_class:"aoman",unicode:"e611",unicode_decimal:58897},{icon_id:"20574632",name:"\u9119\u89C6",font_class:"bishi",unicode:"e612",unicode_decimal:58898},{icon_id:"20574633",name:"\u767D\u773C",font_class:"baiyan",unicode:"e613",unicode_decimal:58899},{icon_id:"20574634",name:"1018",font_class:"1018",unicode:"e614",unicode_decimal:58900},{icon_id:"20574635",name:"1019",font_class:"1019",unicode:"e615",unicode_decimal:58901},{icon_id:"20574637",name:"\u5472\u7259",font_class:"ziya",unicode:"e616",unicode_decimal:58902},{icon_id:"20574638",name:"\u5403\u74DC",font_class:"chigua",unicode:"e617",unicode_decimal:58903},{icon_id:"20574640",name:"\u6597\u9E21\u773C-\u6ED1\u7A3D",font_class:"doujiyan-huaji",unicode:"e618",unicode_decimal:58904},{icon_id:"20574641",name:"\u6253\u8138",font_class:"dalian",unicode:"e619",unicode_decimal:58905},{icon_id:"20574642",name:"\u4E8C\u54C8-\u76EF",font_class:"erha-ding",unicode:"e61a",unicode_decimal:58906},{icon_id:"20574643",name:"\u53D1\u5446",font_class:"fadai",unicode:"e61b",unicode_decimal:58907},{icon_id:"20574644",name:"\u5927\u54ED",font_class:"daku",unicode:"e61c",unicode_decimal:58908},{icon_id:"20574645",name:"\u4E8C\u54C8",font_class:"erha",unicode:"e61d",unicode_decimal:58909},{icon_id:"20574646",name:"\u53D1\u706B",font_class:"fahuo",unicode:"e61e",unicode_decimal:58910},{icon_id:"20574647",name:"\u72D7\u5934-\u539F\u8C05",font_class:"goutou-yuanliang",unicode:"e61f",unicode_decimal:58911},{icon_id:"20574648",name:"\u72D7\u5934",font_class:"goutou",unicode:"e620",unicode_decimal:58912},{icon_id:"20574649",name:"\u72D7\u5934-\u5475\u65A5",font_class:"goutou-hechi",unicode:"e621",unicode_decimal:58913},{icon_id:"20574650",name:"\u5BB3\u7F9E",font_class:"haixiu",unicode:"e622",unicode_decimal:58914},{icon_id:"20574651",name:"\u5475\u5475",font_class:"hehe",unicode:"e623",unicode_decimal:58915},{icon_id:"20574652",name:"\u6C57",font_class:"han",unicode:"e624",unicode_decimal:58916},{icon_id:"20574653",name:"\u559D\u8336",font_class:"hecha",unicode:"e625",unicode_decimal:58917},{icon_id:"20574654",name:"\u54C8\u54C8\u54C8",font_class:"hahaha",unicode:"e626",unicode_decimal:58918},{icon_id:"20574655",name:"\u9ED1\u7EBF",font_class:"heixian",unicode:"e627",unicode_decimal:58919},{icon_id:"20574656",name:"\u72D7\u5934-\u7B11\u54ED",font_class:"goutou-xiaoku",unicode:"e628",unicode_decimal:58920},{icon_id:"20574658",name:"\u559D\u9152",font_class:"hejiu",unicode:"e62a",unicode_decimal:58922},{icon_id:"20574659",name:"\u6B22\u547C",font_class:"huanhu",unicode:"e62b",unicode_decimal:58923},{icon_id:"20574661",name:"\u6ED1\u7A3D",font_class:"huaji",unicode:"e62d",unicode_decimal:58925},{icon_id:"20574662",name:"\u56AF\u54C8",font_class:"huoha",unicode:"e62e",unicode_decimal:58926},{icon_id:"20574663",name:"\u574F\u7B11",font_class:"huaixiao",unicode:"e62f",unicode_decimal:58927},{icon_id:"20574664",name:"\u60CA\u8BB6",font_class:"jingya",unicode:"e630",unicode_decimal:58928}];var ge={id:fe,name:me,font_family:_e,css_prefix_text:he,description:ve,glyphs:be},B=_({components:{MsgItem:S},setup(){const i=P(),{delayAS:e}=V(),n=g(""),a=g(!1),t=g(0),o=g(),s=g(),c={clearContent(){n.value=""},handleSend(m){!m||(e(()=>{i.state.user.KBWSIns?.send({type:"chat",data:{content:m}}),this.clearContent()},200),a.value=!1)},handleFocus(){window.isInput=!0,a.value=!1},handleBlur(){t.value=o.value.$el.children[0].selectionStart,window.isInput=!1},scrollToBottom(){J(()=>{s.value.wrap.scrollTop=s.value.wrap.scrollHeight})},handleInsertFace(m){m&&(n.value=`${n.value.slice(0,t.value)}[${m}]${n.value.slice(t.value)}`)}},r=D(()=>i.state.user.msgList);return N(()=>r.value.length,c.scrollToBottom),I(()=>{c.scrollToBottom()}),{faceList:ge.glyphs,visible:a,scrollRef:s,inputRef:o,content:n,msgList:r,...c}}}),Fn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.msg-wrap[data-v-afcee7ca] {
  box-shadow: 0 0 0 1px #666 inset;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}
.msg-wrap .list[data-v-afcee7ca] {
  height: calc(100% - 30px);
  overflow: hidden;
}
.msg-wrap .input[data-v-afcee7ca] {
  display: flex;
  height: 30px;
  border-top: 1px solid #666;
}
.msg-wrap .input .face[data-v-afcee7ca] {
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.msg-wrap .input .face > svg[data-v-afcee7ca] {
  cursor: pointer;
}
.msg-wrap .input .el-input[data-v-afcee7ca] {
  flex: 1;
  height: 30px;
  line-height: 30px;
}
.msg-wrap .input .el-input[data-v-afcee7ca] input {
  border: none;
  outline: none;
  background: transparent;
  height: inherit;
  line-height: inherit;
  color: #c0c4cc;
}
.msg-wrap .input .send[data-v-afcee7ca] {
  font-size: 14px;
  width: 40px;
  line-height: 30px;
  cursor: pointer;
}
.msg-wrap .input .send[data-v-afcee7ca]:hover {
  color: #999;
}
.msg-wrap .input .send[data-v-afcee7ca]:active {
  color: #666;
}
.face-grid[data-v-afcee7ca] {
  display: grid;
  grid-template-columns: repeat(10, 40px);
  justify-items: center;
  align-items: center;
}
.face-grid .face-item[data-v-afcee7ca] {
  width: 40px;
  height: 40px;
}
.face-grid .face-item > svg[data-v-afcee7ca] {
  cursor: pointer;
}`;const $=b();h("data-v-afcee7ca");const ye={class:"msg-wrap"},xe={class:"list p-12"},ke={class:"input"},we={class:"face"},$e={class:"face-grid"};v();const Pe=$((i,e,n,a,t,o)=>{const s=f("MsgItem"),c=f("el-scrollbar"),r=f("face-icon"),m=f("el-popover"),y=f("el-input");return p(),u("div",ye,[d("div",xe,[d(c,{ref:"scrollRef"},{default:$(()=>[(p(!0),u(x,null,k(i.msgList,(l,U)=>(p(),u(s,{value:l,key:"msg_item_"+U},null,8,["value"]))),128))]),_:1},512)]),d("div",ke,[d("div",we,[d(m,{placement:"top",title:"\u8868\u60C5",width:420,trigger:"manual",visible:i.visible,"onUpdate:visible":e[2]||(e[2]=l=>i.visible=l)},{reference:$(()=>[d(r,{value:"face-1011",size:"30px",onClick:e[1]||(e[1]=l=>i.visible=!i.visible)})]),default:$(()=>[d("div",$e,[(p(!0),u(x,null,k(i.faceList,l=>(p(),u("div",{class:"face-item",key:l.icon_id,title:l.name},[d(r,{value:"face-"+l.font_class,size:"30px",onClick:U=>i.handleInsertFace(l.font_class)},null,8,["value","onClick"])],8,["title"]))),128))])]),_:1},8,["visible"])]),d(y,{ref:"inputRef",modelValue:i.content,"onUpdate:modelValue":e[3]||(e[3]=l=>i.content=l),modelModifiers:{trim:!0},maxlength:"255",onKeyup:e[4]||(e[4]=Q(l=>i.handleSend(i.content),["enter"])),onFocus:e[5]||(e[5]=l=>i.handleFocus()),onBlur:e[6]||(e[6]=l=>i.handleBlur())},null,8,["modelValue"]),d("div",{class:"send",onClick:e[7]||(e[7]=l=>i.handleSend(i.content))},"\u53D1\u9001")])])});B.render=Pe,B.__scopeId="data-v-afcee7ca";var L=_({setup(){const i=O("startBattle"),{build:e}=ae(),n=P();return{btnList:D(()=>[{prop:"character",name:"\u89D2\u8272",icon:"icon-Character",func:()=>{const t=e.weapon(1);n.commit(j.SET_EQUIP,t),console.log(t)}},{prop:"backpack",name:"\u7269\u54C1",icon:"icon-Treasure",func:()=>{}},{prop:"battle",name:"\u6218\u6597",icon:"icon-RPGGame",func:()=>{i()}}])}}}),Un=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.btn-list[data-v-28cfd26d] {
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(3, 50px);
  gap: 20px 10px;
}
.btn-list .btn[data-v-28cfd26d] {
  height: 100%;
  width: 100%;
  cursor: pointer;
  position: relative;
}
.btn-list .btn[data-v-28cfd26d]:hover {
  box-shadow: 0 0 1px 0 #04acf7 inset;
  background: linear-gradient(to left, #04acf7, #04acf7) left top no-repeat, linear-gradient(to bottom, #04acf7, #04acf7) left top no-repeat, linear-gradient(to left, #04acf7, #04acf7) right top no-repeat, linear-gradient(to bottom, #04acf7, #04acf7) right top no-repeat, linear-gradient(to left, #04acf7, #04acf7) left bottom no-repeat, linear-gradient(to bottom, #04acf7, #04acf7) left bottom no-repeat, linear-gradient(to left, #04acf7, #04acf7) right bottom no-repeat, linear-gradient(to left, #04acf7, #04acf7) right bottom no-repeat;
  background-size: 2px 10px, 10px 2px, 2px 10px, 10px 2px, 2px 10px, 10px 2px, 2px 10px, 10px 2px;
}
.btn-list .btn[data-v-28cfd26d]:active {
  background-color: #04acf7;
  border-radius: 4px;
}
.btn-list .btn[data-v-28cfd26d]::before {
  width: 100%;
  content: attr(title);
  position: absolute;
  left: 0;
  bottom: -16px;
  font-size: 12px;
  line-height: 16px;
  pointer-events: none;
  text-align: center;
}`;const je=b();h("data-v-28cfd26d");const Ie={class:"btn-list"};v();const Ce=je((i,e,n,a,t,o)=>{const s=f("face-icon");return p(),u("div",Ie,[(p(!0),u(x,null,k(i.btnList,c=>(p(),u("div",{class:"btn",key:c.prop,title:c.name,onClick:r=>c.func()},[d(s,{value:c.icon,size:"50px"},null,8,["value"])],8,["title","onClick"]))),128))])});L.render=Ce,L.__scopeId="data-v-28cfd26d";var T=_({components:{Keyboard:E,Msg:B,Btns:L},setup(){return{}}}),Rn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.opt-grid[data-v-56322a10] {
  height: 100%;
  display: grid;
  grid-template-columns: 230px 1fr 230px;
  gap: 20px;
}`;const Ee=b();h("data-v-56322a10");const Se={class:"opt-grid"};v();const Be=Ee((i,e,n,a,t,o)=>{const s=f("Keyboard"),c=f("Msg"),r=f("Btns");return p(),u("div",Se,[d(s),d(c),d(r)])});T.render=Be,T.__scopeId="data-v-56322a10";var M=_({setup(){return{...{init(){const e=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],n=[];n.unshift(s());function a(c,r){return c=Math.ceil(c),r=Math.floor(r),Math.floor(Math.random()*(r-c+1))+c}function t(){return e[a(0,e.length-1)]}function o(){document.getElementById(t()).classList.add("selected")}function s(){return Math.floor(Date.now()/1e3)}document.addEventListener("keyup",c=>{const r=String.fromCharCode(c.keyCode),m=document.getElementById(r),y=document.querySelector(".selected");if(m.classList.add("hit"),m.addEventListener("animationend",()=>{m.classList.remove("hit")}),r===y.innerHTML){n.unshift(s());const l=n[0]-n[1];console.log(`Character per minute ${60/l}`),y.classList.remove("selected"),o()}}),o()}}}}}),zn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.keyboard[data-v-febd0608] {
  margin: auto;
  width: 950px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  box-sizing: content-box;
  border-radius: 30px;
  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);
  filter: drop-shadow(0 0 4px #fff);
}
.row[data-v-febd0608] {
  list-style: none;
  display: flex;
}
li[data-v-febd0608] {
  height: 3em;
  width: 3em;
  color: rgba(0, 0, 0, 0.7);
  border-radius: 0.4em;
  line-height: 3em;
  letter-spacing: 1px;
  margin: 0.4em;
  transition: 0.3s;
  text-align: center;
  font-size: 1em;
}
#tab[data-v-febd0608] {
  width: 5em;
}
#caps[data-v-febd0608] {
  width: 6em;
}
#left-shift[data-v-febd0608] {
  width: 8em;
}
#enter[data-v-febd0608] {
  width: 6em;
}
#right-shift[data-v-febd0608] {
  width: 8em;
}
#back[data-v-febd0608] {
  width: 5em;
}
.pinky[data-v-febd0608] {
  background-color: crimson;
  border: 2px solid crimson;
}
.pinky.selected[data-v-febd0608] {
  color: crimson;
}
.ring[data-v-febd0608] {
  background-color: coral;
  border: 2px solid coral;
}
.ring.selected[data-v-febd0608] {
  color: coral;
}
.middle[data-v-febd0608] {
  background-color: darkorange;
  border: 2px solid darkorange;
}
.middle.selected[data-v-febd0608] {
  color: darkorange;
}
.pointer1st[data-v-febd0608] {
  background-color: gold;
  border: 2px solid gold;
}
.pointer1st.selected[data-v-febd0608] {
  color: gold;
}
.pointer2nd[data-v-febd0608] {
  background-color: khaki;
  border: 2px solid khaki;
}
.pointer2nd.selected[data-v-febd0608] {
  color: khaki;
}
.fill-out-key[data-v-febd0608] {
  background-color: slategrey;
  border: 2px solid slategrey;
}
.selected[data-v-febd0608] {
  background-color: transparent;
  -webkit-animation: vibrate-1-febd0608 0.3s linear infinite both;
  animation: vibrate-1-febd0608 0.3s linear infinite both;
}

/* ----------------------------------------------
 * Generated by Animista
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info.
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */
.hit[data-v-febd0608] {
  -webkit-animation: hit-febd0608 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  animation: hit-febd0608 0.3s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
@-webkit-keyframes hit-febd0608 {
0% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
@keyframes hit-febd0608 {
0% {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
}
100% {
    -webkit-transform: scale(1);
    transform: scale(1);
}
}
@-webkit-keyframes vibrate-1-febd0608 {
0% {
    -webkit-transform: translate(0);
    transform: translate(0);
}
20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
}
40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
}
60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
}
80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
}
100% {
    -webkit-transform: translate(0);
    transform: translate(0);
}
}
@keyframes vibrate-1-febd0608 {
0% {
    -webkit-transform: translate(0);
    transform: translate(0);
}
20% {
    -webkit-transform: translate(-2px, 2px);
    transform: translate(-2px, 2px);
}
40% {
    -webkit-transform: translate(-2px, -2px);
    transform: translate(-2px, -2px);
}
60% {
    -webkit-transform: translate(2px, 2px);
    transform: translate(2px, 2px);
}
80% {
    -webkit-transform: translate(2px, -2px);
    transform: translate(2px, -2px);
}
100% {
    -webkit-transform: translate(0);
    transform: translate(0);
}
}`;const Le=b();h("data-v-febd0608");const Te={class:"keyboard"},Me=Z('<ul class="row row-0" data-v-febd0608><li class="pinky" id="esc" data-v-febd0608>ESC</li><li class="pinky" id="1" data-v-febd0608>1</li><li class="ring" id="2" data-v-febd0608>2</li><li class="middle" id="3" data-v-febd0608>3</li><li class="pointer1st" id="4" data-v-febd0608>4</li><li class="pointer2nd" id="5" data-v-febd0608>5</li><li class="pointer2nd" id="6" data-v-febd0608>6</li><li class="pointer1st" id="7" data-v-febd0608>7</li><li class="middle" id="8" data-v-febd0608>8</li><li class="ring" id="9" data-v-febd0608>9</li><li class="pinky" id="10" data-v-febd0608>0</li><li class="pinky" data-v-febd0608>-</li><li class="pinky" data-v-febd0608>+</li><li class="pinky" id="back" data-v-febd0608>BACK</li></ul><ul class="row row-1" data-v-febd0608><li class="pinky" id="tab" data-v-febd0608>TAB</li><li class="pinky" id="Q" data-v-febd0608>Q</li><li class="ring" id="W" data-v-febd0608>W</li><li class="middle" id="E" data-v-febd0608>E</li><li class="pointer1st" id="R" data-v-febd0608>R</li><li class="pointer2nd" id="T" data-v-febd0608>T</li><li class="pointer2nd" id="Y" data-v-febd0608>Y</li><li class="pointer1st" id="U" data-v-febd0608>U</li><li class="middle" id="I" data-v-febd0608>I</li><li class="ring" id="O" data-v-febd0608>O</li><li class="pinky" id="P" data-v-febd0608>P</li><li class="pinky" data-v-febd0608>[</li><li class="pinky" data-v-febd0608>]</li><li class="pinky" data-v-febd0608>\\</li></ul><ul class="row row-2" data-v-febd0608><li class="pinky" id="caps" data-v-febd0608>CAPS</li><li class="pinky" id="A" data-v-febd0608>A</li><li class="ring" id="S" data-v-febd0608>S</li><li class="middle" id="D" data-v-febd0608>D</li><li class="pointer1st" id="F" data-v-febd0608>F</li><li class="pointer2nd" id="G" data-v-febd0608>G</li><li class="pointer2nd" id="H" data-v-febd0608>H</li><li class="pointer1st" id="J" data-v-febd0608>J</li><li class="middle" id="K" data-v-febd0608>K</li><li class="ring" id="L" data-v-febd0608>L</li><li class="pinky" data-v-febd0608>:</li><li class="pinky" data-v-febd0608>&#39;&#39;</li><li class="pinky" id="enter" data-v-febd0608>ENTER</li></ul><ul class="row row-3" data-v-febd0608><li class="pinky" id="left-shift" data-v-febd0608>SHIFT</li><li class="pinky" id="Z" data-v-febd0608>Z</li><li class="ring" id="X" data-v-febd0608>X</li><li class="middle" id="C" data-v-febd0608>C</li><li class="pointer1st" id="V" data-v-febd0608>V</li><li class="pointer2nd" id="B" data-v-febd0608>B</li><li class="pointer2nd" id="N" data-v-febd0608>N</li><li class="pointer1st" id="M" data-v-febd0608>M</li><li class="middle" data-v-febd0608>,</li><li class="ring" data-v-febd0608>.</li><li class="pinky" data-v-febd0608>;</li><li class="pinky" id="right-shift" data-v-febd0608>SHIFT</li></ul>',4);v();const Ke=Le((i,e,n,a,t,o)=>(p(),u("div",Te,[Me])));M.render=Ke,M.__scopeId="data-v-febd0608";var K=_({components:{Keyboard:M},setup(){const i=O("endBattle");class e{constructor(){this.dialogShow=!1,this.dialogHidden=!1}}const n=ee(new e),a={open(){n.dialogShow=!0},close(){n.dialogShow=!1},endBattle:i};return{...ne(n),...a}}}),Yn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.mask-model[data-v-3999250e] {
  pointer-events: none;
  --cb: cubic-bezier(0.17, 0.67, 0.83, 1.64);
  --dur: 200ms;
  --height: 300px;
  will-change: background-color;
  background-color: rgba(0, 0, 0, 0);
  transition: background-color var(--dur) var(--cb);
}
.top[data-v-3999250e],
.bottom[data-v-3999250e] {
  will-change: transform;
  transition: transform var(--dur) var(--cb);
  left: 0;
  position: absolute;
  width: 100%;
}
.top[data-v-3999250e] {
  height: calc(100vh - var(--height) - 50px);
  background-color: #fff;
  top: 10px;
  transform: translateY(calc(var(--height) + 50px - 100vh));
}
.bottom[data-v-3999250e] {
  height: var(--height);
  bottom: 10px;
  transform: translateY(calc(var(--height)));
}
.dialogShow.mask-model[data-v-3999250e] {
  pointer-events: visible;
  background-color: rgba(0, 0, 0, 0.5);
}
.dialogShow .top[data-v-3999250e] {
  transform: translateY(0);
}
.dialogShow .bottom[data-v-3999250e] {
  transform: translateY(0);
}`;const Fe=b();h("data-v-3999250e");const Ue={class:"bottom"};v();const Re=Fe((i,e,n,a,t,o)=>{const s=f("Keyboard");return p(),u(te,{to:"body"},[d("div",{class:["mask-model flex-c-c",{dialogShow:i.dialogShow}]},[d("div",{class:"top",onClick:e[1]||(e[1]=(...c)=>i.endBattle&&i.endBattle(...c))}),d("div",Ue,[d(s)])],2)])});K.render=Re,K.__scopeId="data-v-3999250e";var F=_({components:{Map:C,Opt:T,Battle:K},setup(){const i=g(),e={handleStartBattle(){i.value.open()},handleEndBattle(){i.value.close()}};return X("startBattle",e.handleStartBattle),X("endBattle",e.handleEndBattle),{BattleRef:i,...e}}}),Dn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.game-main[data-v-3e1840e2] {
  --opt-height: 250px;
}
.game-main .map[data-v-3e1840e2] {
  padding: 30px 20px 10px;
}
.game-main .opt[data-v-3e1840e2] {
  padding: 10px 20px 30px;
}
.game-main .map[data-v-3e1840e2] {
  height: calc(100vh - var(--opt-height));
}
.game-main .opt[data-v-3e1840e2] {
  height: var(--opt-height);
}`;const ze=b();h("data-v-3e1840e2");const Ye={class:"game-main"},De={class:"map"},Oe={class:"opt"};v();const Xe=ze((i,e,n,a,t,o)=>{const s=f("Map"),c=f("Opt"),r=f("Battle");return p(),u("div",Ye,[d("div",De,[d(s)]),d("div",Oe,[d(c)]),d(r,{ref:"BattleRef"},null,512)])});F.render=Xe,F.__scopeId="data-v-3e1840e2";export default F;
