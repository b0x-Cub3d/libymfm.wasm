"use strict";(self.webpackChunkwasm_vgm_player=self.webpackChunkwasm_vgm_player||[]).push([[269],{269:(e,t,n)=>{n.r(t);var r,a,o,i,l,c,u,f,_,s,d,g=n(944),m=n(629),y=768,h=576,p="#00a040",w="#e60012",v="16px sans-serif",k=null,b=0,x=[],A=44100,T=null,E=null,j=null;(_=document.getElementById("screen")).setAttribute("width",y),_.setAttribute("height",h),(window.devicePixelRatio?window.devicePixelRatio:1)>1&&window.screen.width<y&&(_.style.width="320px",_.style.heigth="240px"),s=_.getContext("2d"),function(){if(""!=location.hash){var e=location.hash.match(/^#s=(\d+)/);null!=e&&((A=parseInt(e[1]))!=A||44100!=A&&48e3!=A&&88200!=A&&96e3!=A)&&(A=44100)}}(),d=(T=new(window.AudioContext||window.webkitAudioContext)({sampleRate:A})).createScriptProcessor(0,2,2),o=d?d.bufferSize:2048,console.log(o),T=null,i=2*A/o,fetch("./vgm/ym2612.vgm").then((function(e){return e.arrayBuffer()})).then((function(e){L(e)})).then((function(){_.addEventListener("click",O,!1),_.addEventListener("dragover",(function(e){return C(e),_.style.border="4px dotted #333333",!1}),!1),_.addEventListener("dragleave",(function(e){return C(e),_.style.border="none",!1})),_.addEventListener("drop",D,!1),r=1,a=q({track_name:"WebAssembly 👾 VGM Player",track_name_j:"",game_name:"",game_name_j:"YM2612 sample VGM",track_author:"@h1romas4",track_author_j:""}),P()}));var M=function(e,t){var n=(y-s.measureText(e).width)/2;s.fillText(e,n,t)},P=function(){s.fillStyle="rgb(0, 0, 0)",s.fillRect(0,0,y,h),s.font="bold 28px sans-serif",s.fillStyle=w,M("WebAssembly 🎮 VGM Player",160),s.fillStyle=p,s.font="15px sans-serif",M("YM2151 | YM2203 | YM2149 | YM2413 | YM2612 | SN76489(MD) | PWM(32x) | SEGAPCM",224),s.font="20px sans-serif",M("🎵 DRAG AND DROP VGM(vgm/vgz) HEAR",256),M("OR CLICK(TAP) TO PLAY SAMPLE VGM",320),V()},C=function(e){e.preventDefault(),e.stopPropagation()},D=function e(t){C(t),_.removeEventListener("drop",e,!1),_.style.border="none";var n={},a=t.dataTransfer.files;return[].forEach.call(a,(function(t){var o=new FileReader;o.onload=function(){n[t.name]=o.result,Object.keys(n).length>=a.length&&(_.addEventListener("drop",e,!1),x=[],Object.keys(n).sort().forEach((function(e){x.push(n[e])})),r=x.length,S())},o.readAsArrayBuffer(t)})),!1},S=function e(){x.length<=0||(L(x.shift())?O():e())},q=function(e){return e.game_track_name=[e.game_name,e.track_name].filter((function(e){return""!=e})).join(" | "),e.game_track_name_j=[e.game_name_j,e.track_name_j].filter((function(e){return""!=e})).join(" / "),e.track_author_full=[e.track_author,e.track_author_j].filter((function(e){return""!=e})).join(" - "),s.font=v,e.game_track_name_left=(y-s.measureText(e.game_track_name).width)/2,e.game_track_name_j_left=(y-s.measureText(e.game_track_name_j).width)/2,e.track_author_full_left=(y-s.measureText(e.track_author_full).width)/2,e},L=function(e){return null!=k&&k.free(),k=new m.n9(A,o,e.byteLength),new Uint8Array(g.memory.buffer,k.get_seq_data_ref(),e.byteLength).set(new Uint8Array(e)),k.init()?(a=q(JSON.parse(k.get_seq_gd3())),!0):(k.free(),!1)},R=function(){null!=c&&c.disconnect(),null!=l&&l.disconnect(),null!=E&&E.disconnect(),c=null,E=null,l=null},O=function e(){_.removeEventListener("click",e,!1),R(),null==T&&(T=new(window.AudioContext||window.webkitAudioContext)({sampleRate:A})),E=T.createScriptProcessor(o,2,2),b=0;var t=!1;E.onaudioprocess=function(e){if(t)return R(),void S();var n;try{n=k.play()}catch(e){alert("ymfm:\n\nAn unexpected error has occurred. System has stoped. Please reload brwoser.\n\n".concat(e)),t=!0}e.outputBuffer.getChannelData(0).set(new Float32Array(g.memory.buffer,k.get_sampling_l_ref(),o)),e.outputBuffer.getChannelData(1).set(new Float32Array(g.memory.buffer,k.get_sampling_r_ref(),o)),n>=2&&(0==b&&n>2?t=!0:(0==b&&(l.gain.setValueAtTime(1,T.currentTime),l.gain.linearRampToValueAtTime(0,T.currentTime+2)),++b>i&&(t=!0)))},l=T.createGain(),E.connect(l),l.connect(T.destination),l.gain.setValueAtTime(1,T.currentTime),c=T.createAnalyser(),f=c.frequencyBinCount,u=new Uint8Array(f),c.getByteTimeDomainData(u),l.connect(c),null!=j&&(window.cancelAnimationFrame(j),j=null),B()},B=function e(){if(j=window.requestAnimationFrame(e),s.fillStyle="rgb(0, 0, 0)",s.fillRect(0,0,y,h),null!=c){c.getByteFrequencyData(u),s.lineWidth=1,s.beginPath(),s.strokeStyle=w;var t=Math.round(f/192);s.setLineDash([2,1]),s.lineWidth=4;for(var n=0;n<f;n+=t)s.beginPath(),s.moveTo(n+2,h),s.lineTo(n+2,h-1.5*u[n]),s.stroke();s.stroke()}s.font="12px monospace",s.fillStyle=p,r>=1&&M("Track "+(r-x.length)+" / "+r,192),s.font=v,s.fillText(a.game_track_name,a.game_track_name_left,224),s.fillText(a.game_track_name_j,a.game_track_name_j_left,256),s.fillText(a.track_author_full,a.track_author_full_left,288),V()},V=function(){if(44100!=A){var e=" HD:"+A+" ";s.font="16px sans-serif";var t=s.measureText(e);s.fillStyle=p,s.fillRect(y-t.width,0,y,18),s.fillStyle="rgb(0, 0, 0)",s.fillText(e,y-t.width,16)}}},913:(e,t,n)=>{n.d(t,{Cf:()=>r,UX:()=>a,yU:()=>o,Vn:()=>i,lO:()=>l,NM:()=>c,H4:()=>u});var r=function(e,t,n,r){console.log("fd_seek: ".concat(e,", ").concat(t,", ").concat(n,", ").concat(r))},a=function(e,t,n,r){console.log("fd_write: ".concat(e,", ").concat(t,", ").concat(n,", ").concat(r))},o=function(e){console.log("fd_close: ".concat(e))},i=function(e,t){console.log("environ_sizes_get: ".concat(e,", ").concat(t))},l=function(e){console.log("proc_exit: ".concat(e))},c=function(e,t){console.log("environ_get: ".concat(e,", ").concat(t))},u=function(e,t){return console.log("random_get: ".concat(e,", ").concat(t)),0}},629:(e,t,n)=>{n.d(t,{n9:()=>h,h9:()=>p,Dz:()=>w,kF:()=>v,ug:()=>k,Or:()=>b});var r=n(944);function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e=n.hmd(e);var o=new Array(32).fill(void 0);function i(e){return o[e]}o.push(void 0,null,!0,!1);var l=o.length;var c=new("undefined"==typeof TextDecoder?(0,e.require)("util").TextDecoder:TextDecoder)("utf-8",{ignoreBOM:!0,fatal:!0});c.decode();var u=null;function f(){return null!==u&&u.buffer===r.memory.buffer||(u=new Uint8Array(r.memory.buffer)),u}function _(e,t){return c.decode(f().subarray(e,e+t))}var s=null;function d(){return null!==s&&s.buffer===r.memory.buffer||(s=new Int32Array(r.memory.buffer)),s}var g=0,m=new("undefined"==typeof TextEncoder?(0,e.require)("util").TextEncoder:TextEncoder)("utf-8"),y="function"==typeof m.encodeInto?function(e,t){return m.encodeInto(e,t)}:function(e,t){var n=m.encode(e);return t.set(n),{read:e.length,written:n.length}},h=function(){function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var o=r.wgmplay_from(t,n,a);return e.__wrap(o)}var t,n,o;return t=e,o=[{key:"__wrap",value:function(t){var n=Object.create(e.prototype);return n.ptr=t,n}}],(n=[{key:"__destroy_into_raw",value:function(){var e=this.ptr;return this.ptr=0,e}},{key:"free",value:function(){var e=this.__destroy_into_raw();r.__wbg_wgmplay_free(e)}},{key:"get_seq_data_ref",value:function(){return r.wgmplay_get_seq_data_ref(this.ptr)}},{key:"get_sampling_l_ref",value:function(){return r.wgmplay_get_sampling_l_ref(this.ptr)}},{key:"get_sampling_r_ref",value:function(){return r.wgmplay_get_sampling_r_ref(this.ptr)}},{key:"get_seq_header",value:function(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.wgmplay_get_seq_header(e,this.ptr);var t=d()[e/4+0],n=d()[e/4+1];return _(t,n)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n)}}},{key:"get_seq_gd3",value:function(){try{var e=r.__wbindgen_add_to_stack_pointer(-16);r.wgmplay_get_seq_gd3(e,this.ptr);var t=d()[e/4+0],n=d()[e/4+1];return _(t,n)}finally{r.__wbindgen_add_to_stack_pointer(16),r.__wbindgen_free(t,n)}}},{key:"init",value:function(){return 0!==r.wgmplay_init(this.ptr)}},{key:"play",value:function(){return r.wgmplay_play(this.ptr)>>>0}}])&&a(t.prototype,n),o&&a(t,o),e}();function p(){return function(e){l===o.length&&o.push(o.length+1);var t=l;return l=o[t],o[t]=e,t}(new Error)}function w(e,t){var n=function(e,t,n){if(void 0===n){var r=m.encode(e),a=t(r.length);return f().subarray(a,a+r.length).set(r),g=r.length,a}for(var o=e.length,i=t(o),l=f(),c=0;c<o;c++){var u=e.charCodeAt(c);if(u>127)break;l[i+c]=u}if(c!==o){0!==c&&(e=e.slice(c)),i=n(i,o,o=c+3*e.length);var _=f().subarray(i+c,i+o);c+=y(e,_).written}return g=c,i}(i(t).stack,r.__wbindgen_malloc,r.__wbindgen_realloc),a=g;d()[e/4+1]=a,d()[e/4+0]=n}function v(e,t){try{console.error(_(e,t))}finally{r.__wbindgen_free(e,t)}}function k(e){var t;i(t=e),function(e){e<36||(o[e]=l,l=e)}(t)}function b(e,t){throw new Error(_(e,t))}},944:(e,t,n)=>{var r=n.w[e.id];e.exports=r,n(913),n(629),r[""]()}}]);