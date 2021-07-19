import"./pixi.js.dd61c7eb.js";import{E as X,m as q}from"./useEngin.9e3a5043.js";import{G as O,f as G}from"./@pixi.dfabe1c3.js";import{u as $,M as j,a as H}from"./index.0a6f9e2d.js";import{d as _,a as g,o as C,K as U,a1 as h,a2 as v,Y as p,e as u,a3 as b,F as x,I as k,f as s,x as R,c as Y,w as N,n as V,_ as m,P as W,i as A,a5 as J,r as Q,t as Z,E as ee,p as D}from"./@vue.e4b79c09.js";import{u as ne}from"./useEquip.7e687889.js";import"./promise-polyfill.7a7f9c83.js";import"./object-assign.24e5ba39.js";import"./eventemitter3.3bac0dbd.js";import"./earcut.c8ee28d1.js";import"./resource-loader.da9c09a4.js";import"./parse-uri.68f12d7d.js";import"./mini-signals.509d95ee.js";import"./ismobilejs.5c6954b9.js";import"./url.1ae0c968.js";import"./element-plus.4d933211.js";import"./lodash.dfc5297e.js";import"./resize-observer-polyfill.8deb1e21.js";import"./normalize-wheel.232c6e0a.js";import"./mitt.f672539e.js";import"./dayjs.39cf2b70.js";import"./async-validator.1fa0d626.js";import"./@popperjs.20e5d135.js";import"./querystring.d83c7c26.js";import"./vuex.b95b093b.js";import"./axios.19415c93.js";import"./qs.b3565f98.js";import"./side-channel.e93026fc.js";import"./get-intrinsic.09b068ae.js";import"./has-symbols.d7d9af64.js";import"./function-bind.93ccd396.js";import"./has.4e889cdf.js";import"./call-bind.0ec8bfba.js";import"./object-inspect.17a6c876.js";import"./vue-router.8665769a.js";import"./md5.a528f825.js";import"./crypt.2f2b878b.js";import"./charenc.26816e87.js";import"./is-buffer.ff293ffb.js";import"./store.33a50f5f.js";import"./nprogress.629858ae.js";import"./custom.c2760cb0.js";class I extends X{constructor(e,a){super(e);this.effectiveKey=["w","a","s","d"],this.keyPool=new Map,this.speed=1,this.players=new Map,this.colorList=[2293282,16777215,2237182,16711202],this.update=t=>{const i={x:this.roleP.x,y:this.roleP.y};this.move(t),!(this.roleP.x===i.x&&this.roleP.y===i.y)&&(this.refreshRole(),this.refreshCamera(),I.arrayBoxesIntersect(this.mapContainer.children,this.mPlayer.role)&&(this.roleP=i))},this.controlKD=t=>{window.isInput||!this.effectiveKey.includes(t.key)||this.keyPool.set(t.key,!0)},this.controlKU=t=>{!this.effectiveKey.includes(t.key)||this.keyPool.delete(t.key)},this.user=a,this.roleP.x=a.x,this.roleP.y=a.y,this.stageAdd(this.mapContainer),this.stageAdd(this.roleContainer),e.appendChild(this.app.view),this.renderMap(q),this.mPlayer=this.role(this.user.name,this.roleP),this.app.ticker.autoStart=!0,this.app.ticker.minFPS=30,this.app.ticker.maxFPS=60,this.app.ticker.add(this.update),this.app.ticker.start()}move(e){this.keyPool.has("w")&&(this.roleP.y-=this.speed*e),this.keyPool.has("a")&&(this.roleP.x-=this.speed*e),this.keyPool.has("s")&&(this.roleP.y+=this.speed*e),this.keyPool.has("d")&&(this.roleP.x+=this.speed*e)}registeredControl(){document.body.addEventListener("keydown",this.controlKD),document.body.addEventListener("keyup",this.controlKU)}cancelledControl(){document.body.removeEventListener("keydown",this.controlKD),document.body.removeEventListener("keyup",this.controlKU)}role(e,a,t=0){const i=new O;i.beginFill(this.colorList[t]),i.drawCircle(0,0,4),i.endFill(),i.x=this.calcXY(a.x),i.y=this.calcXY(a.y);const o=new G(e,{fontSize:"12px",fill:this.colorList[t]});return o.x=this.calcXY(a.x)+5,o.y=this.calcXY(a.y)-10,this.roleAdd(i),this.roleAdd(o),{role:i,text:o}}refreshRole(){this.mPlayer.role.x=this.calcXY(this.roleP.x),this.mPlayer.role.y=this.calcXY(this.roleP.y),this.mPlayer.text.x=this.calcXY(this.roleP.x)+5,this.mPlayer.text.y=this.calcXY(this.roleP.y)-10}refreshOtherRole(e,a){e.role.x=this.calcXY(a.x),e.role.y=this.calcXY(a.y),e.text.x=this.calcXY(a.x)+5,e.text.y=this.calcXY(a.y)-10}addTickEvent(e){this.app.ticker.add(()=>e(this))}stopTicker(){this.app.ticker.stop()}clearTicker(){this.app.ticker.destroy()}startTicker(){this.app.ticker.start()}updatePlayers(e){const a=[];e.forEach(t=>{if(a.push(t.id),t.id===this.user.id)return;if(!this.players.has(t.id)){const o=this.role(t.name,{x:t.x,y:t.y},1);this.players.set(t.id,o)}const i=this.players.get(t.id);this.refreshOtherRole(i,{x:t.x,y:t.y})}),this.players.forEach((t,i)=>{if(a.includes(i))return;const{role:o,text:c}=this.players.get(i);this.roleDel(o),this.roleDel(c),this.players.delete(i)})}}var S=_({setup(){const n=$(),e=g(),a=(i,o)=>{n.getters.game.updatePlayers(o.data)},t=n.getters.KBWSIns;return C(()=>{const i=new I(e.value,n.getters.userInfo);n.commit(j.SET_GAME,i),i.registeredControl(),t.on("syncUsers",a)}),U(()=>{n.getters.game?.stopTicker(),n.getters.game?.clearTicker(),n.commit(j.CLEAR_GAME),t.remove("syncUsers",a)}),{mapWrapRef:e}}}),Ln=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.map-wrap[data-v-5ad6b78e] {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}`;const ae=b();h("data-v-5ad6b78e");const te={class:"map-wrap",ref:"mapWrapRef"};v();const ie=ae((n,e,a,t,i,o)=>(p(),u("div",te,null,512)));S.render=ie,S.__scopeId="data-v-5ad6b78e";var P=_({setup(){const n=[{name:"w",keyCode:87},{name:"a",keyCode:65},{name:"s",keyCode:83},{name:"d",keyCode:68},{name:"enter",keyCode:13},{name:"space",keyCode:32}],e=n.map(({keyCode:o})=>o),a=g({}),t=o=>{window.isInput||!e.includes(o.keyCode)||(a.value[o.keyCode]=!0)},i=o=>{!e.includes(o.keyCode)||delete a.value[o.keyCode]};return C(()=>{document.body.addEventListener("keydown",t),document.body.addEventListener("keyup",i)}),U(()=>{document.body.removeEventListener("keydown",t),document.body.removeEventListener("keyup",i)}),{btnList:n,keyPool:a}}}),Tn=`@charset "UTF-8";
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
}`;const oe=b();h("data-v-15817c86");const se={class:"kb-wrap"};v();const de=oe((n,e,a,t,i,o)=>(p(),u("div",se,[(p(!0),u(x,null,k(n.btnList,c=>(p(),u("div",{class:[c.name,c.keyCode in n.keyPool?"active":""],"data-name":c.name,key:c.name},null,10,["data-name"]))),128))])));P.render=de,P.__scopeId="data-v-15817c86";var B=_({props:{value:{type:Object,required:!0}},setup(){return{...{transf(e){return e.replace(/<(\w+)[^>]*>(.*?<\/\1>)?/g,"").replace(/\[[\w\-]*\]/g,a=>`<svg class="icon" aria-hidden="true" style="font-size: 30px">
                    <use xlink:href="#face-${a.slice(1,a.length-1)}"></use>
                  </svg>`)}}}}}),En=`@charset "UTF-8";
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
}`;const ce=b();h("data-v-029c304e");const le={class:"msg-item"};v();const re=ce((n,e,a,t,i,o)=>(p(),u("div",le,[s("span",null,"["+R(n.value.time)+"]",1),s("span",null,R(n.value.name)+"\uFF1A",1),s("span",{class:"content",innerHTML:n.transf(n.value.content)},null,8,["innerHTML"])])));B.render=re,B.__scopeId="data-v-029c304e";const pe="2605792",ue="face",me="faceicon",fe="face-",_e="\u8868\u60C5\u5305",he=[{icon_id:"20574665",name:"\u53EF\u7231",font_class:"keai",unicode:"e631",unicode_decimal:58929},{icon_id:"20574666",name:"\u673A\u667A",font_class:"jizhi",unicode:"e632",unicode_decimal:58930},{icon_id:"20574667",name:"\u53EF\u601C",font_class:"kelian",unicode:"e633",unicode_decimal:58931},{icon_id:"20574668",name:"\u62A0\u9F3B",font_class:"koubi",unicode:"e634",unicode_decimal:58932},{icon_id:"20574672",name:"\u9177",font_class:"ku",unicode:"e635",unicode_decimal:58933},{icon_id:"20574675",name:"\u6D41\u6C57\u6ED1\u7A3D",font_class:"liuhanhuaji",unicode:"e636",unicode_decimal:58934},{icon_id:"20574678",name:"\u96BE\u8FC7",font_class:"nanguo",unicode:"e637",unicode_decimal:58935},{icon_id:"20574679",name:"\u8010\u514B\u5634",font_class:"naikezui",unicode:"e638",unicode_decimal:58936},{icon_id:"20574681",name:"\u6012",font_class:"nu",unicode:"e639",unicode_decimal:58937},{icon_id:"20574682",name:"\u6487\u5634",font_class:"piezui",unicode:"e63a",unicode_decimal:58938},{icon_id:"20574683",name:"\u55B5\u55B5",font_class:"miaomiao",unicode:"e63b",unicode_decimal:58939},{icon_id:"20574684",name:"\u58A8\u955C\u6ED1\u7A3D",font_class:"mojinghuaji",unicode:"e63c",unicode_decimal:58940},{icon_id:"20574685",name:"\u4EB2\u4EB2",font_class:"qinqin",unicode:"e63d",unicode_decimal:58941},{icon_id:"20574686",name:"\u55B7\u8840",font_class:"penxie",unicode:"e63e",unicode_decimal:58942},{icon_id:"20574687",name:"\u5F31",font_class:"ruo",unicode:"e63f",unicode_decimal:58943},{icon_id:"20574688",name:"\u8272",font_class:"se",unicode:"e640",unicode_decimal:58944},{icon_id:"20574689",name:"\u55B7",font_class:"pen",unicode:"e641",unicode_decimal:58945},{icon_id:"20574690",name:"\u5F3A",font_class:"qiang",unicode:"e642",unicode_decimal:58946},{icon_id:"20574691",name:"\u5657",font_class:"pu",unicode:"e643",unicode_decimal:58947},{icon_id:"20574692",name:"\u7761",font_class:"shui",unicode:"e644",unicode_decimal:58948},{icon_id:"20574693",name:"\u53D7\u8650\u6ED1\u7A3D",font_class:"shounvehuaji",unicode:"e645",unicode_decimal:58949},{icon_id:"20574695",name:"\u5410\u820C",font_class:"tushe",unicode:"e646",unicode_decimal:58950},{icon_id:"20574696",name:"\u6258\u816E",font_class:"tuosai",unicode:"e647",unicode_decimal:58951},{icon_id:"20574697",name:"\u5FAE\u7B11",font_class:"weixiao",unicode:"e648",unicode_decimal:58952},{icon_id:"20574698",name:"\u59D4\u5C48",font_class:"weiqu",unicode:"e649",unicode_decimal:58953},{icon_id:"20574699",name:"\u65E0\u8BED",font_class:"wuyu",unicode:"e64a",unicode_decimal:58954},{icon_id:"20574700",name:"\u6211\u6700\u7F8E",font_class:"wozuimei",unicode:"e64b",unicode_decimal:58955},{icon_id:"20574701",name:"\u65E0\u5948",font_class:"wunai",unicode:"e64c",unicode_decimal:58956},{icon_id:"20574706",name:"\u6342\u5634\u7B11",font_class:"wuzuixiao",unicode:"e64d",unicode_decimal:58957},{icon_id:"20574708",name:"\u7B11\u989C",font_class:"xiaoyan",unicode:"e64e",unicode_decimal:58958},{icon_id:"20574709",name:"\u6342\u8138",font_class:"wulian",unicode:"e64f",unicode_decimal:58959},{icon_id:"20574710",name:"\u5FAE\u5FAE\u4E00\u7B11",font_class:"weiweiyixiao",unicode:"e650",unicode_decimal:58960},{icon_id:"20574711",name:"\u7B11\u54ED",font_class:"xiaoku",unicode:"e651",unicode_decimal:58961},{icon_id:"20574714",name:"\u8036",font_class:"ye",unicode:"e652",unicode_decimal:58962},{icon_id:"20574719",name:"\u7591\u95EE",font_class:"yiwen",unicode:"e653",unicode_decimal:58963},{icon_id:"20574722",name:"\u9634\u9669",font_class:"yinxian",unicode:"e654",unicode_decimal:58964},{icon_id:"20574723",name:"\u518D\u89C1",font_class:"zaijian",unicode:"e655",unicode_decimal:58965},{icon_id:"20574725",name:"\u76B1\u7709",font_class:"zhoumei",unicode:"e656",unicode_decimal:58966},{icon_id:"20574727",name:"qq\u72D7\u5934",font_class:"qqgoutou",unicode:"e657",unicode_decimal:58967},{icon_id:"20574728",name:"COS \u6ED1\u7A3D",font_class:"COShuaji",unicode:"e658",unicode_decimal:58968},{icon_id:"20574729",name:"nb",font_class:"nb",unicode:"e659",unicode_decimal:58969},{icon_id:"20745947",name:"\u72D7\u5934-\u957F\u8349",font_class:"goutou-changcao",unicode:"e65a",unicode_decimal:58970},{icon_id:"20574613",name:"106",font_class:"106",unicode:"e605",unicode_decimal:58885},{icon_id:"20574614",name:"107",font_class:"107",unicode:"e606",unicode_decimal:58886},{icon_id:"20574616",name:"108",font_class:"108",unicode:"e607",unicode_decimal:58887},{icon_id:"20574618",name:"1011",font_class:"1011",unicode:"e608",unicode_decimal:58888},{icon_id:"20574619",name:"105",font_class:"105",unicode:"e604",unicode_decimal:58884},{icon_id:"20574621",name:"1015",font_class:"1015",unicode:"e609",unicode_decimal:58889},{icon_id:"20574622",name:"1014",font_class:"1014",unicode:"e60a",unicode_decimal:58890},{icon_id:"20574623",name:"1013",font_class:"1013",unicode:"e60b",unicode_decimal:58891},{icon_id:"20574625",name:"1020",font_class:"1020",unicode:"e60c",unicode_decimal:58892},{icon_id:"20574627",name:"1017",font_class:"1017",unicode:"e60d",unicode_decimal:58893},{icon_id:"20574628",name:"1010",font_class:"1010",unicode:"e60e",unicode_decimal:58894},{icon_id:"20574629",name:"109",font_class:"109",unicode:"e60f",unicode_decimal:58895},{icon_id:"20574630",name:"\u62B1\u62F3",font_class:"baoquan",unicode:"e610",unicode_decimal:58896},{icon_id:"20574631",name:"\u50B2\u6162",font_class:"aoman",unicode:"e611",unicode_decimal:58897},{icon_id:"20574632",name:"\u9119\u89C6",font_class:"bishi",unicode:"e612",unicode_decimal:58898},{icon_id:"20574633",name:"\u767D\u773C",font_class:"baiyan",unicode:"e613",unicode_decimal:58899},{icon_id:"20574634",name:"1018",font_class:"1018",unicode:"e614",unicode_decimal:58900},{icon_id:"20574635",name:"1019",font_class:"1019",unicode:"e615",unicode_decimal:58901},{icon_id:"20574637",name:"\u5472\u7259",font_class:"ziya",unicode:"e616",unicode_decimal:58902},{icon_id:"20574638",name:"\u5403\u74DC",font_class:"chigua",unicode:"e617",unicode_decimal:58903},{icon_id:"20574640",name:"\u6597\u9E21\u773C-\u6ED1\u7A3D",font_class:"doujiyan-huaji",unicode:"e618",unicode_decimal:58904},{icon_id:"20574641",name:"\u6253\u8138",font_class:"dalian",unicode:"e619",unicode_decimal:58905},{icon_id:"20574642",name:"\u4E8C\u54C8-\u76EF",font_class:"erha-ding",unicode:"e61a",unicode_decimal:58906},{icon_id:"20574643",name:"\u53D1\u5446",font_class:"fadai",unicode:"e61b",unicode_decimal:58907},{icon_id:"20574644",name:"\u5927\u54ED",font_class:"daku",unicode:"e61c",unicode_decimal:58908},{icon_id:"20574645",name:"\u4E8C\u54C8",font_class:"erha",unicode:"e61d",unicode_decimal:58909},{icon_id:"20574646",name:"\u53D1\u706B",font_class:"fahuo",unicode:"e61e",unicode_decimal:58910},{icon_id:"20574647",name:"\u72D7\u5934-\u539F\u8C05",font_class:"goutou-yuanliang",unicode:"e61f",unicode_decimal:58911},{icon_id:"20574648",name:"\u72D7\u5934",font_class:"goutou",unicode:"e620",unicode_decimal:58912},{icon_id:"20574649",name:"\u72D7\u5934-\u5475\u65A5",font_class:"goutou-hechi",unicode:"e621",unicode_decimal:58913},{icon_id:"20574650",name:"\u5BB3\u7F9E",font_class:"haixiu",unicode:"e622",unicode_decimal:58914},{icon_id:"20574651",name:"\u5475\u5475",font_class:"hehe",unicode:"e623",unicode_decimal:58915},{icon_id:"20574652",name:"\u6C57",font_class:"han",unicode:"e624",unicode_decimal:58916},{icon_id:"20574653",name:"\u559D\u8336",font_class:"hecha",unicode:"e625",unicode_decimal:58917},{icon_id:"20574654",name:"\u54C8\u54C8\u54C8",font_class:"hahaha",unicode:"e626",unicode_decimal:58918},{icon_id:"20574655",name:"\u9ED1\u7EBF",font_class:"heixian",unicode:"e627",unicode_decimal:58919},{icon_id:"20574656",name:"\u72D7\u5934-\u7B11\u54ED",font_class:"goutou-xiaoku",unicode:"e628",unicode_decimal:58920},{icon_id:"20574658",name:"\u559D\u9152",font_class:"hejiu",unicode:"e62a",unicode_decimal:58922},{icon_id:"20574659",name:"\u6B22\u547C",font_class:"huanhu",unicode:"e62b",unicode_decimal:58923},{icon_id:"20574661",name:"\u6ED1\u7A3D",font_class:"huaji",unicode:"e62d",unicode_decimal:58925},{icon_id:"20574662",name:"\u56AF\u54C8",font_class:"huoha",unicode:"e62e",unicode_decimal:58926},{icon_id:"20574663",name:"\u574F\u7B11",font_class:"huaixiao",unicode:"e62f",unicode_decimal:58927},{icon_id:"20574664",name:"\u60CA\u8BB6",font_class:"jingya",unicode:"e630",unicode_decimal:58928}];var ve={id:pe,name:ue,font_family:me,css_prefix_text:fe,description:_e,glyphs:he},L=_({components:{MsgItem:B},setup(){const n=$(),{delayAS:e}=H(),a=g(""),t=g(!1),i=g(0),o=g(),c=g(),d={clearContent(){a.value=""},handleSend(f){!f||(e(()=>{n.state.user.KBWSIns?.send({type:"chat",data:{content:f}}),this.clearContent()},200),t.value=!1)},handleFocus(){window.isInput=!0,t.value=!1},handleBlur(){i.value=o.value.$el.children[0].selectionStart,window.isInput=!1},scrollToBottom(){V(()=>{c.value.wrap.scrollTop=c.value.wrap.scrollHeight})},handleInsertFace(f){f&&(a.value=`${a.value.slice(0,i.value)}[${f}]${a.value.slice(i.value)}`)}},l=Y(()=>n.state.user.msgList);return N(()=>l.value.length,d.scrollToBottom),C(()=>{d.scrollToBottom()}),{faceList:ve.glyphs,visible:t,scrollRef:c,inputRef:o,content:a,msgList:l,...d}}}),Mn=`@charset "UTF-8";
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
}`;const w=b();h("data-v-afcee7ca");const be={class:"msg-wrap"},ge={class:"list p-12"},ye={class:"input"},xe={class:"face"},ke={class:"face-grid"};v();const we=w((n,e,a,t,i,o)=>{const c=m("MsgItem"),d=m("el-scrollbar"),l=m("face-icon"),f=m("el-popover"),y=m("el-input");return p(),u("div",be,[s("div",ge,[s(d,{ref:"scrollRef"},{default:w(()=>[(p(!0),u(x,null,k(n.msgList,(r,z)=>(p(),u(c,{value:r,key:"msg_item_"+z},null,8,["value"]))),128))]),_:1},512)]),s("div",ye,[s("div",xe,[s(f,{placement:"top",title:"\u8868\u60C5",width:420,trigger:"manual",visible:n.visible,"onUpdate:visible":e[2]||(e[2]=r=>n.visible=r)},{reference:w(()=>[s(l,{value:"face-1011",size:"30px",onClick:e[1]||(e[1]=r=>n.visible=!n.visible)})]),default:w(()=>[s("div",ke,[(p(!0),u(x,null,k(n.faceList,r=>(p(),u("div",{class:"face-item",key:r.icon_id,title:r.name},[s(l,{value:"face-"+r.font_class,size:"30px",onClick:z=>n.handleInsertFace(r.font_class)},null,8,["value","onClick"])],8,["title"]))),128))])]),_:1},8,["visible"])]),s(y,{ref:"inputRef",modelValue:n.content,"onUpdate:modelValue":e[3]||(e[3]=r=>n.content=r),modelModifiers:{trim:!0},maxlength:"255",onKeyup:e[4]||(e[4]=W(r=>n.handleSend(n.content),["enter"])),onFocus:e[5]||(e[5]=r=>n.handleFocus()),onBlur:e[6]||(e[6]=r=>n.handleBlur())},null,8,["modelValue"]),s("div",{class:"send",onClick:e[7]||(e[7]=r=>n.handleSend(n.content))},"\u53D1\u9001")])])});L.render=we,L.__scopeId="data-v-afcee7ca";var T=_({setup(){const n=A("startBattle"),{build:e}=ne(),a=$();return{btnList:Y(()=>[{prop:"character",name:"\u89D2\u8272",icon:"icon-Character",func:()=>{const i=e.weapon(1);a.commit(j.SET_EQUIP,i),console.log(i)}},{prop:"backpack",name:"\u7269\u54C1",icon:"icon-Treasure",func:()=>{}},{prop:"battle",name:"\u6218\u6597",icon:"icon-RPGGame",func:()=>{n()}}])}}}),Kn=`@charset "UTF-8";
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
}`;const $e=b();h("data-v-28cfd26d");const je={class:"btn-list"};v();const Ce=$e((n,e,a,t,i,o)=>{const c=m("face-icon");return p(),u("div",je,[(p(!0),u(x,null,k(n.btnList,d=>(p(),u("div",{class:"btn",key:d.prop,title:d.name,onClick:l=>d.func()},[s(c,{value:d.icon,size:"50px"},null,8,["value"])],8,["title","onClick"]))),128))])});T.render=Ce,T.__scopeId="data-v-28cfd26d";var E=_({components:{Keyboard:P,Msg:L,Btns:T},setup(){return{}}}),Fn=`@charset "UTF-8";
/* \u6539\u53D8\u4E3B\u9898\u8272\u53D8\u91CF */
.opt-grid[data-v-56322a10] {
  height: 100%;
  display: grid;
  grid-template-columns: 230px 1fr 230px;
  gap: 20px;
}`;const Ie=b();h("data-v-56322a10");const Se={class:"opt-grid"};v();const Pe=Ie((n,e,a,t,i,o)=>{const c=m("Keyboard"),d=m("Msg"),l=m("Btns");return p(),u("div",Se,[s(c),s(d),s(l)])});E.render=Pe,E.__scopeId="data-v-56322a10";var M=_({setup(){return{...{init(){const e=[..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],a=[];a.unshift(c());function t(d,l){return d=Math.ceil(d),l=Math.floor(l),Math.floor(Math.random()*(l-d+1))+d}function i(){return e[t(0,e.length-1)]}function o(){document.getElementById(i()).classList.add("selected")}function c(){return Math.floor(Date.now()/1e3)}document.addEventListener("keyup",d=>{const l=String.fromCharCode(d.keyCode),f=document.getElementById(l),y=document.querySelector(".selected");if(f.classList.add("hit"),f.addEventListener("animationend",()=>{f.classList.remove("hit")}),l===y.innerHTML){a.unshift(c());const r=a[0]-a[1];console.log(`Character per minute ${60/r}`),y.classList.remove("selected"),o()}}),o()}}}}}),zn=`@charset "UTF-8";
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
}`;const Be=b();h("data-v-febd0608");const Le={class:"keyboard"},Te=J('<ul class="row row-0" data-v-febd0608><li class="pinky" id="esc" data-v-febd0608>ESC</li><li class="pinky" id="1" data-v-febd0608>1</li><li class="ring" id="2" data-v-febd0608>2</li><li class="middle" id="3" data-v-febd0608>3</li><li class="pointer1st" id="4" data-v-febd0608>4</li><li class="pointer2nd" id="5" data-v-febd0608>5</li><li class="pointer2nd" id="6" data-v-febd0608>6</li><li class="pointer1st" id="7" data-v-febd0608>7</li><li class="middle" id="8" data-v-febd0608>8</li><li class="ring" id="9" data-v-febd0608>9</li><li class="pinky" id="10" data-v-febd0608>0</li><li class="pinky" data-v-febd0608>-</li><li class="pinky" data-v-febd0608>+</li><li class="pinky" id="back" data-v-febd0608>BACK</li></ul><ul class="row row-1" data-v-febd0608><li class="pinky" id="tab" data-v-febd0608>TAB</li><li class="pinky" id="Q" data-v-febd0608>Q</li><li class="ring" id="W" data-v-febd0608>W</li><li class="middle" id="E" data-v-febd0608>E</li><li class="pointer1st" id="R" data-v-febd0608>R</li><li class="pointer2nd" id="T" data-v-febd0608>T</li><li class="pointer2nd" id="Y" data-v-febd0608>Y</li><li class="pointer1st" id="U" data-v-febd0608>U</li><li class="middle" id="I" data-v-febd0608>I</li><li class="ring" id="O" data-v-febd0608>O</li><li class="pinky" id="P" data-v-febd0608>P</li><li class="pinky" data-v-febd0608>[</li><li class="pinky" data-v-febd0608>]</li><li class="pinky" data-v-febd0608>\\</li></ul><ul class="row row-2" data-v-febd0608><li class="pinky" id="caps" data-v-febd0608>CAPS</li><li class="pinky" id="A" data-v-febd0608>A</li><li class="ring" id="S" data-v-febd0608>S</li><li class="middle" id="D" data-v-febd0608>D</li><li class="pointer1st" id="F" data-v-febd0608>F</li><li class="pointer2nd" id="G" data-v-febd0608>G</li><li class="pointer2nd" id="H" data-v-febd0608>H</li><li class="pointer1st" id="J" data-v-febd0608>J</li><li class="middle" id="K" data-v-febd0608>K</li><li class="ring" id="L" data-v-febd0608>L</li><li class="pinky" data-v-febd0608>:</li><li class="pinky" data-v-febd0608>&#39;&#39;</li><li class="pinky" id="enter" data-v-febd0608>ENTER</li></ul><ul class="row row-3" data-v-febd0608><li class="pinky" id="left-shift" data-v-febd0608>SHIFT</li><li class="pinky" id="Z" data-v-febd0608>Z</li><li class="ring" id="X" data-v-febd0608>X</li><li class="middle" id="C" data-v-febd0608>C</li><li class="pointer1st" id="V" data-v-febd0608>V</li><li class="pointer2nd" id="B" data-v-febd0608>B</li><li class="pointer2nd" id="N" data-v-febd0608>N</li><li class="pointer1st" id="M" data-v-febd0608>M</li><li class="middle" data-v-febd0608>,</li><li class="ring" data-v-febd0608>.</li><li class="pinky" data-v-febd0608>;</li><li class="pinky" id="right-shift" data-v-febd0608>SHIFT</li></ul>',4);v();const Ee=Be((n,e,a,t,i,o)=>(p(),u("div",Le,[Te])));M.render=Ee,M.__scopeId="data-v-febd0608";var K=_({components:{Keyboard:M},setup(){const n=A("endBattle");class e{constructor(){this.dialogShow=!1,this.dialogHidden=!1}}const a=Q(new e),t={open(){a.dialogShow=!0},close(){a.dialogShow=!1},endBattle:n};return{...Z(a),...t}}}),Un=`@charset "UTF-8";
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
}`;const Me=b();h("data-v-3999250e");const Ke={class:"bottom"};v();const Fe=Me((n,e,a,t,i,o)=>{const c=m("Keyboard");return p(),u(ee,{to:"body"},[s("div",{class:["mask-model flex-c-c",{dialogShow:n.dialogShow}]},[s("div",{class:"top",onClick:e[1]||(e[1]=(...d)=>n.endBattle&&n.endBattle(...d))}),s("div",Ke,[s(c)])],2)])});K.render=Fe,K.__scopeId="data-v-3999250e";var F=_({components:{Map:S,Opt:E,Battle:K},setup(){const n=g(),e={handleStartBattle(){n.value.open()},handleEndBattle(){n.value.close()}};return D("startBattle",e.handleStartBattle),D("endBattle",e.handleEndBattle),{BattleRef:n,...e}}}),Rn=`@charset "UTF-8";
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
}`;const ze=b();h("data-v-3e1840e2");const Ue={class:"game-main"},Re={class:"map"},Ye={class:"opt"};v();const Ae=ze((n,e,a,t,i,o)=>{const c=m("Map"),d=m("Opt"),l=m("Battle");return p(),u("div",Ue,[s("div",Re,[s(c)]),s("div",Ye,[s(d)]),s(l,{ref:"BattleRef"},null,512)])});F.render=Ae,F.__scopeId="data-v-3e1840e2";export default F;
