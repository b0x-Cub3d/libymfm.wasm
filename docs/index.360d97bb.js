function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=r.parcelRequire546c;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},r.parcelRequire546c=i),i.register("bXuNP",(function(t,r){var n,a;e(t.exports,"register",(()=>n),(e=>n=e)),e(t.exports,"resolve",(()=>a),(e=>a=e));var i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},a=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("bXuNP").register(JSON.parse('{"iUJgi":"index.360d97bb.js","cHc5m":"wgm_worklet_processor.abebf595.js","cywbx":"wgm_worker.73fcbd72.js","bktC1":"libymfm_bg.b990d7a9.wasm"}')),i.register("544ZB",(function(r,n){e(r.exports,"WgmController",(()=>o),(e=>o=e));var a=i("bdp79"),s=i("hWdwC");class o{constructor(e,t,r){this.module=e,this.worklet=null,this.worker=null,this.callback=null,this.sharedRingL=[],this.sharedRingR=[],this.sharedStatus=null,this.samplingRate=t,this.loopMaxCount=r,this.chunkSize=a.AUDIO_WORKLET_SAMPLING_CHUNK*a.BUFFERING_CHUNK_COUNT,this.feedOutRemain=1,this.feedOutSecond=Math.ceil(this.chunkSize*this.feedOutRemain/t),this.context=null,this.gain=null,this.analyser=null,this.analyserBuffer=null,this.analyserBufferLength=null}async prepare(e,r){this.context=e;try{for(let e=0;e<a.BUFFER_RING_COUNT;e++)this.sharedRingL[e]=new SharedArrayBuffer(4*this.chunkSize),this.sharedRingR[e]=new SharedArrayBuffer(4*this.chunkSize);this.sharedStatus=new SharedArrayBuffer(1024)}catch(e){return!1}return this.worker=new Worker(i("5JiMz"),{type:"module"}),this.worker.onmessage=e=>this.dispatch(e),this.sendWorker({message:"compile",shared:{ringL:this.sharedRingL,ringR:this.sharedRingR,status:this.sharedStatus}},(async()=>{await this.context.audioWorklet.addModule(t(s)),r()})),!0}init(){this.worklet=new AudioWorkletNode(this.context,"wgm-worklet-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{ringL:this.sharedRingL,ringR:this.sharedRingR,status:this.sharedStatus,chunkSteps:a.BUFFERING_CHUNK_COUNT}}),this.worklet.port.onmessage=e=>this.dispatch(e),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.worklet.connect(this.gain),this.analyser=this.context.createAnalyser(),this.analyserBufferLength=this.analyser.frequencyBinCount,this.analyserBuffer=new Uint8Array(this.analyserBufferLength),this.analyser.getByteTimeDomainData(this.analyserBuffer),this.gain.connect(this.analyser)}ready(){return null!=this.worklet}create(e,t){this.sendWorklet({message:"stop"},(()=>{this.sendWorker({message:"create",vgmdata:e,options:{samplingRate:this.samplingRate,chunkSize:this.chunkSize,loopMaxCount:this.loopMaxCount,feedOutRemain:this.feedOutRemain}},t)}))}play(e){this.sendWorker({message:"start"}),this.sendWorklet({message:"play"},e)}getByteFrequencyData(){return this.analyser.getByteFrequencyData(this.analyserBuffer),this.analyserBuffer}getAnalyserBufferLength(){return this.analyserBufferLength}feedout(){const e=this.context.currentTime;this.gain.gain.setValueAtTime(1,e),this.gain.gain.linearRampToValueAtTime(0,e+this.feedOutSecond/2),this.gain.gain.setValueAtTime(1,e+this.feedOutSecond)}async dispatch(e){switch(e.data.message){case"callback":null!=this.callback&&await this.callback(e.data.data);break;case"feedout":this.feedout()}}sendWorklet(e,t){this.callback=null!=t?t:null,this.worklet.port.postMessage(e)}sendWorker(e,t){this.callback=null!=t?t:null,this.worker.postMessage(e)}}})),i.register("bdp79",(function(t,r){e(t.exports,"AUDIO_WORKLET_SAMPLING_CHUNK",(()=>n)),e(t.exports,"BUFFERING_CHUNK_COUNT",(()=>a)),e(t.exports,"BUFFER_RING_COUNT",(()=>i));const n=128,a=768,i=4})),i.register("hWdwC",(function(e,t){e.exports=i("kPq84").getBundleURL("iUJgi")+i("bXuNP").resolve("cHc5m")})),i.register("kPq84",(function(t,r){var n,a;e(t.exports,"getBundleURL",(()=>n),(e=>n=e)),e(t.exports,"getOrigin",(()=>a),(e=>a=e));var i={};function s(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),i[e]=t),t},a=function(e){var t=(""+e).match(/(https?|file|ftp):\/\/[^/]+/);if(!t)throw new Error("Origin not found");return t[0]}})),i.register("5JiMz",(function(e,t){var r=i("hxJhJ"),n=i("kPq84");let a=n.getBundleURL("iUJgi")+i("bXuNP").resolve("cywbx");e.exports=r(a,n.getOrigin(a),!0)})),i.register("hxJhJ",(function(e,t){e.exports=function(e,t,r){if(t===self.location.origin)return e;var n=r?"import "+JSON.stringify(e)+";":"importScripts("+JSON.stringify(e)+");";return URL.createObjectURL(new Blob([n],{type:"application/javascript"}))}}));var s=i("544ZB");let o,l=null;let u,c,h,f,d=[],g=44100,m=null;h=document.getElementById("screen"),h.setAttribute("width",768),h.setAttribute("height",576),(window.devicePixelRatio?window.devicePixelRatio:1)>1&&window.screen.width<768&&(h.style.width="320px",h.style.heigth="240px"),f=h.getContext("2d");var p;p=i("kPq84").getBundleURL("iUJgi")+i("bXuNP").resolve("bktC1"),async function(){if(""!=location.hash){const e=location.hash.match(/^#s=(\d+)/);null!=e&&(g=parseInt(e[1]),(g!=g||44100!=g&&48e3!=g&&88200!=g&&96e3!=g)&&(g=44100))}let e=await fetch(new URL(p));e=new Uint8Array(await e.arrayBuffer()),o=new s.WgmController(e,g,2),l=new(window.AudioContext||window.webkitAudioContext)({sampleRate:g}),await o.prepare(l,(()=>{_()}))||y()}();const _=()=>{w(),f.fillStyle="#00a040",f.font="15px sans-serif",B("YM2151 | YM2203 | YM2149 | YM2413 | YM2612 | SN76489(MD) | PWM(32x) | SEGAPCM",224),f.font="20px sans-serif",B("🎵 DRAG AND DROP VGM(vgm/vgz) HEAR",256),B("OR CLICK(TAP) TO PLAY SAMPLE VGM",320),O(),h.addEventListener("dragover",(function(e){return x(e),h.style.border="4px dotted #333333",!1}),!1),h.addEventListener("dragleave",(function(e){return x(e),h.style.border="none",!1})),h.addEventListener("drop",R,!1),h.addEventListener("click",k,!1)},y=()=>{w(),B("System initialize error.",224),f.font="20px sans-serif",f.fillStyle="#00a040",crossOriginIsolated?(B("Your browser does not support SharedArrayBuffer.",288),B("SharedArrayBuffer is supported by Firefox or Chromium systems.",320)):B("crossOriginIsolated is not set on the server.",288)},w=()=>{f.fillStyle="rgb(0, 0, 0)",f.fillRect(0,0,768,576),f.font="bold 28px sans-serif",f.fillStyle="#e60012",B("WebAssembly 🎮 VGM Player",160)},k=async()=>{h.removeEventListener("click",k,!1),c=S({track_name:"WebAssembly 👾 VGM Player",track_name_j:"",game_name:"",game_name_j:"YM2612 sample VGM",track_author:"@h1romas4",track_author_j:""});const e=await fetch("./vgm/ym2612.vgm"),t=await e.arrayBuffer();v(t,c)},x=function(e){e.preventDefault(),e.stopPropagation()},R=e=>{x(e),h.removeEventListener("click",k,!1),h.removeEventListener("drop",R,!1),h.style.border="none";let t={},r=e.dataTransfer.files;return[].forEach.call(r,(function(e){let n=new FileReader;n.onload=function(){t[e.name]=n.result,Object.keys(t).length>=r.length&&(h.addEventListener("drop",R,!1),d=[],Object.keys(t).sort().forEach((function(e){d.push(t[e])})),u=d.length,b())},n.readAsArrayBuffer(e)})),!1},b=function(){d.length<=0||v(d.shift())},v=function(e,t){o.ready()||(l.resume(),o.init()),o.create(e,(e=>{null==t&&(c=S(e)),null!=m&&(window.cancelAnimationFrame(m),m=null),A(),o.play(b)}))},S=function(e){return e.game_track_name=[e.game_name,e.track_name].filter((e=>""!=e)).join(" | "),e.game_track_name_j=[e.game_name_j,e.track_name_j].filter((e=>""!=e)).join(" / "),e.track_author_full=[e.track_author,e.track_author_j].filter((e=>""!=e)).join(" - "),f.font="16px sans-serif",e.game_track_name_left=(768-f.measureText(e.game_track_name).width)/2,e.game_track_name_j_left=(768-f.measureText(e.game_track_name_j).width)/2,e.track_author_full_left=(768-f.measureText(e.track_author_full).width)/2,e},A=function(){m=window.requestAnimationFrame(A),f.fillStyle="rgb(0, 0, 0)",f.fillRect(0,0,768,576);let e=o.getByteFrequencyData(),t=o.getAnalyserBufferLength();f.lineWidth=1,f.beginPath(),f.strokeStyle="#e60012";let r=Math.round(t/192);f.setLineDash([2,1]),f.lineWidth=4;for(var n=0;n<t;n+=r)f.beginPath(),f.moveTo(n+2,576),f.lineTo(n+2,576-1.5*e[n]),f.stroke();f.stroke(),f.font="12px monospace",f.fillStyle="#00a040",u>=1&&B("Track "+(u-d.length)+" / "+u,192),f.font="16px sans-serif",f.fillText(c.game_track_name,c.game_track_name_left,224),f.fillText(c.game_track_name_j,c.game_track_name_j_left,256),f.fillText(c.track_author_full,c.track_author_full_left,288),O()},O=function(){if(44100==g)return;const e=" HD:"+g+" ";f.font="16px sans-serif";const t=f.measureText(e);f.fillStyle="#00a040",f.fillRect(768-t.width,0,768,18),f.fillStyle="rgb(0, 0, 0)",f.fillText(e,768-t.width,16)},B=function(e,t){let r=(768-f.measureText(e).width)/2;f.fillText(e,r,t)};
//# sourceMappingURL=index.360d97bb.js.map
