import{D as f}from"./get-intrinsic.09b068ae.js";import{D as m}from"./function-bind.93ccd396.js";var s={exports:{}};(function(a){var t=m,n=f,e=n("%Function.prototype.apply%"),l=n("%Function.prototype.call%"),o=n("%Reflect.apply%",!0)||t.call(l,e),p=n("%Object.getOwnPropertyDescriptor%",!0),r=n("%Object.defineProperty%",!0),d=n("%Math.max%");if(r)try{r({},"a",{value:1})}catch(u){r=null}a.exports=function(y){var i=o(t,l,arguments);if(p&&r){var g=p(i,"length");g.configurable&&r(i,"length",{value:1+d(0,y.length-(arguments.length-1))})}return i};var c=function(){return o(t,e,arguments)};r?r(a.exports,"apply",{value:c}):a.exports.apply=c})(s);var _=f,v=s.exports,x=v(_("String.prototype.indexOf")),b=function(t,n){var e=_(t,!!n);return typeof e=="function"&&x(t,".prototype.")>-1?v(e):e};export{b as c};
