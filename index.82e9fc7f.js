var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var d={id:e,exports:{}};return n[e]=d,r.call(d.exports,d,d.exports),d.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var d=r("9dxg1");document.addEventListener("DOMContentLoaded",(()=>{(0,d.fetchBreeds)()}));const o=document.querySelector(".breed-select");o.addEventListener("change",(()=>{const e=o.value;(0,d.fetchCatByBreed)(e)}));
//# sourceMappingURL=index.82e9fc7f.js.map