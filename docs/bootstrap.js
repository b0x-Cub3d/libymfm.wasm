(()=>{var e,t,r,n,o,i,a,c,s,u,d,l,p,f,b,m,v,g,h,_={466:(e,t,r)=>{r.e(269).then(r.bind(r,269)).catch((function(e){return console.error("Error importing `index.js`:",e)}))}},y={};function w(e){var t=y[e];if(void 0!==t)return t.exports;var r=y[e]={id:e,loaded:!1,exports:{}};return _[e](r,r.exports,w),r.loaded=!0,r.exports}w.m=_,w.c=y,w.d=(e,t)=>{for(var r in t)w.o(t,r)&&!w.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},w.f={},w.e=e=>Promise.all(Object.keys(w.f).reduce(((t,r)=>(w.f[r](e,t),t)),[])),w.u=e=>e+".bootstrap.js",w.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),w.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),w.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="wasm-vgm-player:",w.l=(r,n,o,i)=>{if(e[r])e[r].push(n);else{var a,c;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var d=s[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){a=d;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,w.nc&&a.setAttribute("nonce",w.nc),a.setAttribute("data-webpack",t+o),a.src=r),e[r]=[n];var l=(t,n)=>{a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),t)return t(n)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}},w.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;w.g.importScripts&&(e=w.g.location+"");var t=w.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),w.p=e})(),(()=>{var e={179:0};w.f.j=(t,r)=>{var n=w.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=e[t]=[r,o]));r.push(n[2]=o);var i=w.p+w.u(t),a=new Error;w.l(i,(r=>{if(w.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+t,t)}};var t=(t,r)=>{var n,o,[i,a,c]=r,s=0;if(i.some((t=>0!==e[t]))){for(n in a)w.o(a,n)&&(w.m[n]=a[n]);c&&c(w)}for(t&&t(r);s<i.length;s++)o=i[s],w.o(e,o)&&e[o]&&e[o][0](),e[i[s]]=0},r=self.webpackChunkwasm_vgm_player=self.webpackChunkwasm_vgm_player||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),v={},g={944:function(){return{"./libymfm_bg.js":{__wbg_log_29b08a701c97413f:function(e){return void 0===r&&(r=w.c[629].exports),r.z1(e)},__wbg_new_59cb74e423758ede:function(){return void 0===a&&(a=w.c[629].exports),a.h9()},__wbg_stack_558ba5917b466edd:function(e,t){return void 0===c&&(c=w.c[629].exports),c.Dz(e,t)},__wbg_error_4bb6c2a97407129a:function(e){return void 0===s&&(s=w.c[629].exports),s.kF(e)},__wbindgen_object_drop_ref:function(e){return void 0===u&&(u=w.c[629].exports),u.ug(e)},__wbindgen_throw:function(e,t){return void 0===d&&(d=w.c[629].exports),d.Or(e,t)}},wasi_snapshot_preview1:{fd_seek:function(e,t,r,o){return void 0===n&&(n=w.c[913].exports),n.Cf(e,t,r,o)},fd_write:function(e,t,r,n){return void 0===o&&(o=w.c[913].exports),o.UX(e,t,r,n)},fd_close:function(e){return void 0===i&&(i=w.c[913].exports),i.yU(e)},environ_sizes_get:function(e,t){return void 0===l&&(l=w.c[913].exports),l.Vn(e,t)},proc_exit:function(e){return void 0===p&&(p=w.c[913].exports),p.lO(e)},environ_get:function(e,t){return void 0===f&&(f=w.c[913].exports),f.NM(e,t)},fd_write:function(e,t,r,n){return void 0===b&&(b=w.c[913].exports),b.UX(e,t,r,n)},random_get:function(e,t){return void 0===m&&(m=w.c[913].exports),m.H4(e,t)}}}}},h={269:[944]},w.w={},w.f.wasm=function(e,t){(h[e]||[]).forEach((function(r,n){var o=v[r];if(o)t.push(o);else{var i,a=g[r](),c=fetch(w.p+""+{269:{944:"07e32767a105856abf1a"}}[e][r]+".module.wasm");i=a&&"function"==typeof a.then&&"function"==typeof WebAssembly.compileStreaming?Promise.all([WebAssembly.compileStreaming(c),a]).then((function(e){return WebAssembly.instantiate(e[0],e[1])})):"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(c,a):c.then((function(e){return e.arrayBuffer()})).then((function(e){return WebAssembly.instantiate(e,a)})),t.push(v[r]=i.then((function(e){return w.w[r]=(e.instance||e).exports})))}}))},w(466)})();