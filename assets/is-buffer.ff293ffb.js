/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var r=function(f){return f!=null&&(n(f)||t(f)||!!f._isBuffer)};function n(f){return!!f.constructor&&typeof f.constructor.isBuffer=="function"&&f.constructor.isBuffer(f)}function t(f){return typeof f.readFloatLE=="function"&&typeof f.slice=="function"&&n(f.slice(0,0))}export{r as D};
