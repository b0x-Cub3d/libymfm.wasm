(()=>{var e,t,r,n,o,i,a,s,c,u,l,d,f,p,b={466:(e,t,r)=>{r.e(159).then(r.bind(r,159)).catch((function(e){return console.error("Error importing `index.js`:",e)}))}},m={};function h(e){var t=m[e];if(void 0!==t)return t.exports;var r=m[e]={id:e,loaded:!1,exports:{}};return b[e](r,r.exports,h),r.loaded=!0,r.exports}h.m=b,h.c=m,h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.f={},h.e=e=>Promise.all(Object.keys(h.f).reduce(((t,r)=>(h.f[r](e,t),t)),[])),h.u=e=>e+".bootstrap.js",h.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),h.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="wasm-vgm-player:",h.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var a,s;if(void 0!==o)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var l=c[u];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==t+o){a=l;break}}a||(s=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,h.nc&&a.setAttribute("nonce",h.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var d=(t,n)=>{a.onerror=a.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),s&&document.head.appendChild(a)}},h.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;h.g.importScripts&&(e=h.g.location+"");var t=h.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),h.p=e})(),(()=>{var e={179:0};h.f.j=(t,r)=>{var n=h.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=h.p+h.u(t),a=new Error;h.l(i,(r=>{if(h.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,a,s]=r,c=0;for(n in a)h.o(a,n)&&(h.m[n]=a[n]);for(s&&s(h),t&&t(r);c<i.length;c++)o=i[c],h.o(e,o)&&e[o]&&e[o][0](),e[i[c]]=0},r=self.webpackChunkwasm_vgm_player=self.webpackChunkwasm_vgm_player||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),d={},f={858:function(){return{"./libymfm_bg.js":{__wbg_log_29b08a701c97413f:function(e,t){return void 0===r&&(r=h.c[182].exports),r.z1(e,t)},__wbg_new_59cb74e423758ede:function(){return void 0===a&&(a=h.c[182].exports),a.h9()},__wbg_stack_558ba5917b466edd:function(e,t){return void 0===s&&(s=h.c[182].exports),s.Dz(e,t)},__wbg_error_4bb6c2a97407129a:function(e,t){return void 0===c&&(c=h.c[182].exports),c.kF(e,t)},__wbindgen_object_drop_ref:function(e){return void 0===u&&(u=h.c[182].exports),u.ug(e)},__wbindgen_throw:function(e,t){return void 0===l&&(l=h.c[182].exports),l.Or(e,t)}},wasi_snapshot_preview1:{fd_seek:function(e,t,r,o){return void 0===n&&(n=h.c[913].exports),n.Cf(e,t,r,o)},fd_write:function(e,t,r,n){return void 0===o&&(o=h.c[913].exports),o.UX(e,t,r,n)},fd_close:function(e){return void 0===i&&(i=h.c[913].exports),i.yU(e)}}}}},p={159:[858]},h.w={},h.f.wasm=function(e,t){(p[e]||[]).forEach((function(r,n){var o=d[r];if(o)t.push(o);else{var i,a=f[r](),s=fetch(h.p+""+{159:{858:"ba1ca7f1ffa88fa019ef"}}[e][r]+".module.wasm");i=a&&"function"==typeof a.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(s),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(s,a):s.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)})),t.push(d[r]=i.then((function(e){return h.w[r]=(e.instance||e).exports})))}}))},h(466)})();