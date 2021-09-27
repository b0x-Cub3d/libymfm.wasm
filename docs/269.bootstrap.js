"use strict";(self.webpackChunkwasm_vgm_player=self.webpackChunkwasm_vgm_player||[]).push([[269],{269:(e,n,t)=>{t.r(n);var r,a,o,i,l,c,u,f,_=t(944),s=t(629),d=2048,g=44100,m=768,y=576,h="#00a040",p="16px sans-serif",w=null,v=0,k=[],b=null,x=null,A=null;(u=document.getElementById("screen")).setAttribute("width",m),u.setAttribute("height",y),(window.devicePixelRatio?window.devicePixelRatio:1)>1&&window.screen.width<m&&(u.style.width="320px",u.style.heigth="240px"),f=u.getContext("2d"),fetch("./vgm/ym2612.vgm").then((function(e){return e.arrayBuffer()})).then((function(e){P(e)})).then((function(){u.addEventListener("click",L,!1),u.addEventListener("dragover",(function(e){return E(e),u.style.border="4px dotted #333333",!1}),!1),u.addEventListener("dragleave",(function(e){return E(e),u.style.border="none",!1})),u.addEventListener("drop",M,!1),r=1,a=D({track_name:"WebAssembly 👾 VGM Player",track_name_j:"",game_name:"",game_name_j:"YM2612 sample VGM",track_author:"@h1romas4",track_author_j:""}),b=new(window.AudioContext||window.webkitAudioContext)({sampleRate:g}),b=null,j()}));var T=function(e,n){var t=(m-f.measureText(e).width)/2;f.fillText(e,t,n)},j=function(){f.fillStyle="rgb(0, 0, 0)",f.fillRect(0,0,m,y),f.font="20px sans-serif",f.fillStyle=h,T("WebAssembly 👾 VGM Player",160),f.font="16px sans-serif",T("YM2151 | YM2203 | YM2149 | YM2413 | YM2612 | SN76489(MD) | PWM(32x)",224),f.font="20px sans-serif",T("🎵 DRAG AND DROP VGM(vgm/vgz) HEAR",256),T("OR CLICK(TAP) TO PLAY SAMPLE VGM",320)},E=function(e){e.preventDefault(),e.stopPropagation()},M=function e(n){E(n),u.removeEventListener("drop",e,!1),u.style.border="none";var t={},a=n.dataTransfer.files;return[].forEach.call(a,(function(n){var o=new FileReader;o.onload=function(){t[n.name]=o.result,Object.keys(t).length>=a.length&&(u.addEventListener("drop",e,!1),k=[],Object.keys(t).sort().forEach((function(e){k.push(t[e])})),r=k.length,C())},o.readAsArrayBuffer(n)})),!1},C=function e(){k.length<=0||(P(k.shift())?L():e())},D=function(e){return e.game_track_name=[e.game_name,e.track_name].filter((function(e){return""!=e})).join(" | "),e.game_track_name_j=[e.game_name_j,e.track_name_j].filter((function(e){return""!=e})).join(" / "),e.track_author_full=[e.track_author,e.track_author_j].filter((function(e){return""!=e})).join(" - "),f.font=p,e.game_track_name_left=(m-f.measureText(e.game_track_name).width)/2,e.game_track_name_j_left=(m-f.measureText(e.game_track_name_j).width)/2,e.track_author_full_left=(m-f.measureText(e.track_author_full).width)/2,e},P=function(e){return null!=w&&w.free(),w=new s.n9(g,d,e.byteLength),new Uint8Array(_.memory.buffer,w.get_seq_data_ref(),e.byteLength).set(new Uint8Array(e)),w.init()?(a=D(JSON.parse(w.get_seq_gd3())),!0):(w.free(),!1)},q=function(){null!=i&&i.disconnect(),null!=o&&o.disconnect(),null!=x&&x.disconnect(),i=null,x=null,o=null},L=function e(){u.removeEventListener("click",e,!1),q(),null==b&&(b=new(window.AudioContext||window.webkitAudioContext)({sampleRate:g})),x=b.createScriptProcessor(d,2,2),v=0;var n=!1;x.onaudioprocess=function(e){if(n)return q(),void C();var t;try{t=w.play()}catch(e){alert("ymfm:\n\nAn unexpected error has occurred. System has stoped. Please reload brwoser.\n\n".concat(e)),n=!0}e.outputBuffer.getChannelData(0).set(new Float32Array(_.memory.buffer,w.get_sampling_l_ref(),d)),e.outputBuffer.getChannelData(1).set(new Float32Array(_.memory.buffer,w.get_sampling_r_ref(),d)),t>=2&&(0==v&&t>2?n=!0:(0==v&&(o.gain.setValueAtTime(1,b.currentTime),o.gain.linearRampToValueAtTime(0,b.currentTime+2)),++v>43.06640625&&(n=!0)))},o=b.createGain(),x.connect(o),o.connect(b.destination),o.gain.setValueAtTime(1,b.currentTime),i=b.createAnalyser(),c=i.frequencyBinCount,l=new Uint8Array(c),i.getByteTimeDomainData(l),o.connect(i),null!=A&&(window.cancelAnimationFrame(A),A=null),R()},R=function e(){if(A=window.requestAnimationFrame(e),f.fillStyle="rgb(0, 0, 0)",f.fillRect(0,0,m,y),null!=i){i.getByteFrequencyData(l),f.lineWidth=1,f.beginPath(),f.strokeStyle="#e60012";var n=Math.round(c/192);f.setLineDash([2,1]),f.lineWidth=4;for(var t=0;t<c;t+=n)f.beginPath(),f.moveTo(t+2,y),f.lineTo(t+2,y-1.5*l[t]),f.stroke();f.stroke()}f.font="12px monospace",f.fillStyle=h,r>=1&&T("Track "+(r-k.length)+" / "+r,192),f.font=p,f.fillText(a.game_track_name,a.game_track_name_left,224),f.fillText(a.game_track_name_j,a.game_track_name_j_left,256),f.fillText(a.track_author_full,a.track_author_full_left,288)}},913:(e,n,t)=>{t.d(n,{Cf:()=>r,UX:()=>a,yU:()=>o,Vn:()=>i,lO:()=>l,NM:()=>c,H4:()=>u});var r=function(e,n,t,r){console.log("fd_seek: ".concat(e,", ").concat(n,", ").concat(t,", ").concat(r))},a=function(e,n,t,r){console.log("fd_write: ".concat(e,", ").concat(n,", ").concat(t,", ").concat(r))},o=function(e){console.log("fd_close: ".concat(e))},i=function(e,n){console.log("environ_sizes_get: ".concat(e,", ").concat(n))},l=function(e){console.log("proc_exit: ".concat(e))},c=function(e,n){console.log("environ_get: ".concat(e,", ").concat(n))},u=function(e,n){return console.log("random_get: ".concat(e,", ").concat(n)),0}},629:(e,n,t)=>{t.d(n,{n9:()=>h,z1:()=>p,h9:()=>w,Dz:()=>v,kF:()=>k,ug:()=>b,Or:()=>x});var r=t(944);function a(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e=t.hmd(e);var o=new Array(32).fill(void 0);function i(e){return o[e]}o.push(void 0,null,!0,!1);var l=o.length;var c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var u=null;function f(){return null!==u&&u.buffer===r.memory.buffer||(u=new Uint8Array(r.memory.buffer)),u}function _(e,n){return c.decode(f().subarray(e,e+n))}var s=null;function d(){return null!==s&&s.buffer===r.memory.buffer||(s=new Int32Array(r.memory.buffer)),s}var g=0,m=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),y="function"==typeof m.encodeInto?function(e,n){return m.encodeInto(e,n)}:function(e,n){var t=m.encode(e);return n.set(t),{read:e.length,written:t.length}},h=function(){function e(n,t,a){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e);var o=r.wgmplay_from(n,t,a);return e.__wrap(o)}var n,t,o;return n=e,o=[{key:"__wrap",value:function(n){var t=Object.create(e.prototype);return t.ptr=n,t}}],(t=[{key:"__destroy_into_raw",value:function(){var e=this.ptr;return this.ptr=0,e}},{key:"free",value:function(){var e=this.__destroy_into_raw();r.__wbg_wgmplay_free(e)}},{key:"get_seq_data_ref",value:function(){return r.wgmplay_get_seq_data_ref(this.ptr)}},{key:"get_sampling_l_ref",value:function(){return r.wgmplay_get_sampling_l_ref(this.ptr)}},{key:"get_sampling_r_ref",value:function(){return r.wgmplay_get_sampling_r_ref(this.ptr)}},{key:"get_seq_header",value:function(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.wgmplay_get_seq_header(e,this.ptr);var n=d()[e/4+0],t=d()[e/4+1];return _(n,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t)}}},{key:"get_seq_gd3",value:function(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.wgmplay_get_seq_gd3(e,this.ptr);var n=d()[e/4+0],t=d()[e/4+1];return _(n,t)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(n,t)}}},{key:"init",value:function(){return 0!==r.wgmplay_init(this.ptr)}},{key:"play",value:function(){return r.wgmplay_play(this.ptr)>>>0}}])&&a(n.prototype,t),o&&a(n,o),e}();function p(e,n){console.log(_(e,n))}function w(){return function(e){l===o.length&&o.push(o.length+1);var n=l;return l=o[n],o[n]=e,n}(new Error)}function v(e,n){var t=function(e,n,t){if(void 0===t){var r=m.encode(e),a=n(r.length);return f().subarray(a,a+r.length).set(r),g=r.length,a}for(var o=e.length,i=n(o),l=f(),c=0;c<o;c++){var u=e.charCodeAt(c);if(u>127)break;l[i+c]=u}if(c!==o){0!==c&&(e=e.slice(c)),i=t(i,o,o=c+3*e.length);var _=f().subarray(i+c,i+o);c+=y(e,_).written}return g=c,i}(i(n).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),a=g;d()[e/4+1]=a,d()[e/4+0]=t}function k(e,n){try{console.error(_(e,n))}finally{r.__wbindgen_free(e,n)}}function b(e){var n;i(n=e),function(e){e<36||(o[e]=l,l=e)}(n)}function x(e,n){throw new Error(_(e,n))}},944:(e,n,t)=>{var r=t.w[e.id];e.exports=r,t(629),t(913),r[""]()}}]);