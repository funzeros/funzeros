import{c as C}from"./element-plus.caa196dc.js";var S={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(k,T){(function(e,i){k.exports=i()})(C,function(){var e={};e.version="0.2.0";var i=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};e.configure=function(n){var r,t;for(r in n)t=n[r],t!==void 0&&n.hasOwnProperty(r)&&(i[r]=t);return this},e.status=null,e.set=function(n){var r=e.isStarted();n=m(n,i.minimum,1),e.status=n===1?null:n;var t=e.render(!r),o=t.querySelector(i.barSelector),a=i.speed,c=i.easing;return t.offsetWidth,P(function(s){i.positionUsing===""&&(i.positionUsing=e.getPositioningCSS()),g(o,w(n,a,c)),n===1?(g(t,{transition:"none",opacity:1}),t.offsetWidth,setTimeout(function(){g(t,{transition:"all "+a+"ms linear",opacity:0}),setTimeout(function(){e.remove(),s()},a)},a)):setTimeout(s,a)}),this},e.isStarted=function(){return typeof e.status=="number"},e.start=function(){e.status||e.set(0);var n=function(){setTimeout(function(){!e.status||(e.trickle(),n())},i.trickleSpeed)};return i.trickle&&n(),this},e.done=function(n){return!n&&!e.status?this:e.inc(.3+.5*Math.random()).set(1)},e.inc=function(n){var r=e.status;return r?(typeof n!="number"&&(n=(1-r)*m(Math.random()*r,.1,.95)),r=m(r+n,0,.994),e.set(r)):e.start()},e.trickle=function(){return e.inc(Math.random()*i.trickleRate)},function(){var n=0,r=0;e.promise=function(t){return!t||t.state()==="resolved"?this:(r===0&&e.start(),n++,r++,t.always(function(){r--,r===0?(n=0,e.done()):e.set((n-r)/n)}),this)}}(),e.render=function(n){if(e.isRendered())return document.getElementById("nprogress");h(document.documentElement,"nprogress-busy");var r=document.createElement("div");r.id="nprogress",r.innerHTML=i.template;var t=r.querySelector(i.barSelector),o=n?"-100":d(e.status||0),a=document.querySelector(i.parent),c;return g(t,{transition:"all 0 linear",transform:"translate3d("+o+"%,0,0)"}),i.showSpinner||(c=r.querySelector(i.spinnerSelector),c&&x(c)),a!=document.body&&h(a,"nprogress-custom-parent"),a.appendChild(r),r},e.remove=function(){y(document.documentElement,"nprogress-busy"),y(document.querySelector(i.parent),"nprogress-custom-parent");var n=document.getElementById("nprogress");n&&x(n)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var n=document.body.style,r="WebkitTransform"in n?"Webkit":"MozTransform"in n?"Moz":"msTransform"in n?"ms":"OTransform"in n?"O":"";return r+"Perspective"in n?"translate3d":r+"Transform"in n?"translate":"margin"};function m(n,r,t){return n<r?r:n>t?t:n}function d(n){return(-1+n)*100}function w(n,r,t){var o;return i.positionUsing==="translate3d"?o={transform:"translate3d("+d(n)+"%,0,0)"}:i.positionUsing==="translate"?o={transform:"translate("+d(n)+"%,0)"}:o={"margin-left":d(n)+"%"},o.transition="all "+r+"ms "+t,o}var P=function(){var n=[];function r(){var t=n.shift();t&&t(r)}return function(t){n.push(t),n.length==1&&r()}}(),g=function(){var n=["Webkit","O","Moz","ms"],r={};function t(s){return s.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(u,p){return p.toUpperCase()})}function o(s){var u=document.body.style;if(s in u)return s;for(var p=n.length,l=s.charAt(0).toUpperCase()+s.slice(1),f;p--;)if(f=n[p]+l,f in u)return f;return s}function a(s){return s=t(s),r[s]||(r[s]=o(s))}function c(s,u,p){u=a(u),s.style[u]=p}return function(s,u){var p=arguments,l,f;if(p.length==2)for(l in u)f=u[l],f!==void 0&&u.hasOwnProperty(l)&&c(s,l,f);else c(s,p[1],p[2])}}();function b(n,r){var t=typeof n=="string"?n:v(n);return t.indexOf(" "+r+" ")>=0}function h(n,r){var t=v(n),o=t+r;b(t,r)||(n.className=o.substring(1))}function y(n,r){var t=v(n),o;!b(n,r)||(o=t.replace(" "+r+" "," "),n.className=o.substring(1,o.length-1))}function v(n){return(" "+(n.className||"")+" ").replace(/\s+/gi," ")}function x(n){n&&n.parentNode&&n.parentNode.removeChild(n)}return e})})(S);var N=S.exports,z=`/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #29d;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #29d, 0 0 5px #29d;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color: #29d;
  border-left-color: #29d;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`;export{N};
