(self.webpackChunkwasm_vgm_player=self.webpackChunkwasm_vgm_player||[]).push([[159],{159:(e,t,n)=>{"use strict";n.r(t);var r,a,o,c,i,l,u,f,_=n(182),s=n(858),d=4096,g=44100,m=768,y=576,h="#00a040",p="16px sans-serif",w=null,v=0,k=[],b=null,x=null,A=null;(u=document.getElementById("screen")).setAttribute("width",m),u.setAttribute("height",y),(window.devicePixelRatio?window.devicePixelRatio:1)>1&&window.screen.width<m&&(u.style.width="320px",u.style.heigth="240px"),f=u.getContext("2d"),fetch("./vgm/ym2612.vgm").then((function(e){return e.arrayBuffer()})).then((function(e){P(e)})).then((function(){u.addEventListener("click",L,!1),u.addEventListener("dragover",(function(e){return E(e),u.style.border="4px dotted #333333",!1}),!1),u.addEventListener("dragleave",(function(e){return E(e),u.style.border="none",!1})),u.addEventListener("drop",M,!1),r=1,a=D({track_name:"WebAssembly 👾 VGM Player",track_name_j:"",game_name:"",game_name_j:"YM2612 sample VGM",track_author:"@h1romas4",track_author_j:""}),b=new(window.AudioContext||window.webkitAudioContext)({sampleRate:g}),j()}));var T=function(e,t){var n=(m-f.measureText(e).width)/2;f.fillText(e,n,t)},j=function(){f.fillStyle="rgb(0, 0, 0)",f.fillRect(0,0,m,y),f.font="20px sans-serif",f.fillStyle=h,T("WebAssembly 👾 VGM Player",160),f.font="16px sans-serif",T("YM2151 | YM2203 | YM2149 | YM2413 | YM2612 | SN76489(MD) | PWM(32x)",224),f.font="20px sans-serif",T("🎵 DRAG AND DROP VGM(vgm/vgz) HEAR",256),T("OR CLICK(TAP) TO PLAY SAMPLE VGM",320)},E=function(e){e.preventDefault(),e.stopPropagation()},M=function e(t){E(t),u.removeEventListener("drop",e,!1),u.style.border="none";var n={},a=t.dataTransfer.files;return[].forEach.call(a,(function(t){var o=new FileReader;o.onload=function(){n[t.name]=o.result,Object.keys(n).length>=a.length&&(u.addEventListener("drop",e,!1),k=[],Object.keys(n).sort().forEach((function(e){k.push(n[e])})),r=k.length,C())},o.readAsArrayBuffer(t)})),!1},C=function e(){k.length<=0||(P(k.shift())?L():e())},D=function(e){return e.game_track_name=[e.game_name,e.track_name].filter((function(e){return""!=e})).join(" | "),e.game_track_name_j=[e.game_name_j,e.track_name_j].filter((function(e){return""!=e})).join(" / "),e.track_author_full=[e.track_author,e.track_author_j].filter((function(e){return""!=e})).join(" - "),f.font=p,e.game_track_name_left=(m-f.measureText(e.game_track_name).width)/2,e.game_track_name_j_left=(m-f.measureText(e.game_track_name_j).width)/2,e.track_author_full_left=(m-f.measureText(e.track_author_full).width)/2,e},P=function(e){return null!=w&&w.free(),w=new _.n9(g,d,e.byteLength),new Uint8Array(s.memory.buffer,w.get_seq_data_ref(),e.byteLength).set(new Uint8Array(e)),w.init()?(a=D(JSON.parse(w.get_seq_gd3())),!0):(w.free(),!1)},q=function(){null!=c&&c.disconnect(),null!=o&&o.disconnect(),null!=x&&x.disconnect(),null!=b&&b.close(),c=null,x=null,o=null,b=null},L=function e(){u.removeEventListener("click",e,!1),q(),b=new(window.AudioContext||window.webkitAudioContext)({sampleRate:g}),x=b.createScriptProcessor(d,2,2),v=0;var t=!1;x.onaudioprocess=function(e){if(t)return q(),void C();var n;try{n=w.play()}catch(e){alert("ymfm:\n\nAn unexpected error has occurred. System has stoped. Please reload brwoser.\n\n".concat(e)),t=!0}e.outputBuffer.getChannelData(0).set(new Float32Array(s.memory.buffer,w.get_sampling_l_ref(),d)),e.outputBuffer.getChannelData(1).set(new Float32Array(s.memory.buffer,w.get_sampling_r_ref(),d)),n>=2&&(0==v&&n>2?t=!0:(0==v&&(o.gain.setValueAtTime(1,b.currentTime),o.gain.linearRampToValueAtTime(0,b.currentTime+2)),++v>21.533203125&&(t=!0)))},o=b.createGain(),x.connect(o),o.connect(b.destination),o.gain.setValueAtTime(1,b.currentTime),c=b.createAnalyser(),l=c.frequencyBinCount,i=new Uint8Array(l),c.getByteTimeDomainData(i),o.connect(c),null!=A&&(window.cancelAnimationFrame(A),A=null),R()},R=function e(){if(A=window.requestAnimationFrame(e),f.fillStyle="rgb(0, 0, 0)",f.fillRect(0,0,m,y),null!=c){c.getByteFrequencyData(i),f.lineWidth=1,f.beginPath(),f.strokeStyle="#e60012";var t=Math.round(l/192);f.setLineDash([2,1]),f.lineWidth=4;for(var n=0;n<l;n+=t)f.beginPath(),f.moveTo(n+2,y),f.lineTo(n+2,y-1.5*i[n]),f.stroke();f.stroke()}f.font="12px monospace",f.fillStyle=h,r>=1&&T("Track "+(r-k.length)+" / "+r,192),f.font=p,f.fillText(a.game_track_name,a.game_track_name_left,224),f.fillText(a.game_track_name_j,a.game_track_name_j_left,256),f.fillText(a.track_author_full,a.track_author_full_left,288)}},913:(e,t,n)=>{"use strict";n.d(t,{Cf:()=>r,UX:()=>a,yU:()=>o,y3:()=>c,oI:()=>i,m1:()=>l,fo:()=>u});var r=function(e,t,n,r){console.log("fd_seek: ".concat(e,", ").concat(t,", ").concat(n,", ").concat(r))},a=function(e,t,n,r){console.log("fd_write: ".concat(e,", ").concat(t,", ").concat(n,", ").concat(r))},o=function(e){console.log("fd_close: ".concat(e))},c=function(e,t){console.log("fd_fdstat_get: ".concat(e,", ").concat(t))},i=function(e,t,n,r,a,o,c,i,l){console.log("path_open: ".concat(e,", ").concat(t,", ").concat(n,", ").concat(r,", ").concat(a,", ").concat(o,", ").concat(c,", ").concat(i,", ").concat(l))},l=function(e,t,n,r,a,o,c,i,l){console.log("fd_fdstat_set_flags: ".concat(e,", ").concat(t,", ").concat(n,", ").concat(r,", ").concat(a,", ").concat(o,", ").concat(c,", ").concat(i,", ").concat(l))},u=function(e,t,n,r){console.log("fd_fdstat_get: ".concat(e,", ").concat(t,", ").concat(n,", ").concat(r))}},182:(e,t,n)=>{"use strict";n.d(t,{n9:()=>h,z1:()=>p,h9:()=>w,Dz:()=>v,kF:()=>k,ug:()=>b,Or:()=>x});var r=n(858);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e=n.hmd(e);var o=new Array(32).fill(void 0);function c(e){return o[e]}o.push(void 0,null,!0,!1);var i=o.length;var l=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();var u=null;function f(){return null!==u&&u.buffer===r.memory.buffer||(u=new Uint8Array(r.memory.buffer)),u}function _(e,t){return l.decode(f().subarray(e,e+t))}var s=null;function d(){return null!==s&&s.buffer===r.memory.buffer||(s=new Int32Array(r.memory.buffer)),s}var g=0,m=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),y="function"==typeof m.encodeInto?function(e,t){return m.encodeInto(e,t)}:function(e,t){var n=m.encode(e);return t.set(n),{read:e.length,written:n.length}},h=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=r.wgmplay_from(t,n,a);return e.__wrap(o)}var t,n,o;return t=e,o=[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}],(n=[{key:"__destroy_into_raw",value:function(){var e=this.ptr;return this.ptr=0,e}},{key:"free",value:function(){var e=this.__destroy_into_raw();r.__wbg_wgmplay_free(e)}},{key:"get_seq_data_ref",value:function(){return r.wgmplay_get_seq_data_ref(this.ptr)}},{key:"get_sampling_l_ref",value:function(){return r.wgmplay_get_sampling_l_ref(this.ptr)}},{key:"get_sampling_r_ref",value:function(){return r.wgmplay_get_sampling_r_ref(this.ptr)}},{key:"get_seq_header",value:function(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.wgmplay_get_seq_header(e,this.ptr);var t=d()[e/4+0],n=d()[e/4+1];return _(t,n)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n)}}},{key:"get_seq_gd3",value:function(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.wgmplay_get_seq_gd3(e,this.ptr);var t=d()[e/4+0],n=d()[e/4+1];return _(t,n)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n)}}},{key:"init",value:function(){return 0!==r.wgmplay_init(this.ptr)}},{key:"play",value:function(){return r.wgmplay_play(this.ptr)>>>0}}])&&a(t.prototype,n),o&&a(t,o),e}();function p(e,t){console.log(_(e,t))}function w(){return function(e){i===o.length&&o.push(o.length+1);var t=i;return i=o[t],o[t]=e,t}(new Error)}function v(e,t){var n=function(e,t,n){if(void 0===n){var r=m.encode(e),a=t(r.length);return f().subarray(a,a+r.length).set(r),g=r.length,a}for(var o=e.length,c=t(o),i=f(),l=0;l<o;l++){var u=e.charCodeAt(l);if(u>127)break;i[c+l]=u}if(l!==o){0!==l&&(e=e.slice(l)),c=n(c,o,o=l+3*e.length);var _=f().subarray(c+l,c+o);l+=y(e,_).written}return g=l,c}(c(t).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),a=g;d()[e/4+1]=a,d()[e/4+0]=n}function k(e,t){try{console.error(_(e,t))}finally{r.__wbindgen_free(e,t)}}function b(e){var t;c(t=e),function(e){e<36||(o[e]=i,i=e)}(t)}function x(e,t){throw new Error(_(e,t))}},858:(e,t,n)=>{"use strict";var r=n.w[e.id];e.exports=r,n(182),n(913),r[""]()}}]);