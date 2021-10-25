function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},i=n.parcelRequire546c;null==i&&((i=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequire546c=i),i.register("bXuNP",(function(t,n){var a,r;e(t.exports,"register",(()=>a),(e=>a=e)),e(t.exports,"resolve",(()=>r),(e=>r=e));var i={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i("bXuNP").register(JSON.parse('{"iUJgi":"index.fa78ce22.js","cHc5m":"wgm_worklet_processor.ed3f5c00.js","bktC1":"libymfm_bg.b990d7a9.wasm"}')),i.register("544ZB",(function(n,a){e(n.exports,"WgmController",(()=>l),(e=>l=e));var r=i("hWdwC");class l{constructor(e,t,n,a){this.module=e,this.samplingRate=t,this.loopMaxCount=n,this.feedOutSecond=a,this.feedOutRemain=Math.floor(t*a/128),this.context=null,this.worklet=null,this.gain=null,this.analyser=null,this.analyserBuffer=null,this.analyserBufferLength=null}async prepare(e){this.context=e,await this.context.audioWorklet.addModule(t(r))}init(e){this.worklet=new AudioWorkletNode(this.context,"wgm-worklet-processor",{numberOfInputs:1,numberOfOutputs:1,outputChannelCount:[2],processorOptions:{module:this.module,samplingRate:this.samplingRate,chunkSize:128,loopMaxCount:this.loopMaxCount,feedOutRemain:this.feedOutRemain}}),this.callback=null,this.worklet.port.onmessage=e=>this.dispatch(e),this.send({message:"compile"},(()=>{this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.worklet.connect(this.gain),this.analyser=this.context.createAnalyser(),this.analyserBufferLength=this.analyser.frequencyBinCount,this.analyserBuffer=new Uint8Array(this.analyserBufferLength),this.analyser.getByteTimeDomainData(this.analyserBuffer),this.gain.connect(this.analyser),e()}))}ready(){return null!=this.worklet}create(e,t){this.send({message:"create",vgmdata:e},t)}play(e){this.send({message:"play"},e)}getByteFrequencyData(){return this.analyser.getByteFrequencyData(this.analyserBuffer),this.analyserBuffer}getAnalyserBufferLength(){return this.analyserBufferLength}feedout(){const e=this.context.currentTime;this.gain.gain.setValueAtTime(1,e),this.gain.gain.linearRampToValueAtTime(0,e+this.feedOutSecond),this.gain.gain.setValueAtTime(1,e+this.feedOutSecond)}async dispatch(e){switch(e.data.message){case"callback":null!=this.callback&&await this.callback(e.data.data);break;case"feedout":this.feedout()}}send(e,t){this.callback=null!=t?t:null,this.worklet.port.postMessage(e)}}})),i.register("hWdwC",(function(e,t){e.exports=i("kPq84").getBundleURL("iUJgi")+i("bXuNP").resolve("cHc5m")})),i.register("kPq84",(function(t,n){var a;e(t.exports,"getBundleURL",(()=>a),(e=>a=e));var r={};function i(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),r[e]=t),t}}));var l=i("544ZB");let s,o=null;let u,c,f,h,d=[],m=44100,g=null;f=document.getElementById("screen"),f.setAttribute("width",768),f.setAttribute("height",576),(window.devicePixelRatio?window.devicePixelRatio:1)>1&&window.screen.width<768&&(f.style.width="320px",f.style.heigth="240px"),h=f.getContext("2d");var _;_=i("kPq84").getBundleURL("iUJgi")+i("bXuNP").resolve("bktC1"),async function(){if(""!=location.hash){const e=location.hash.match(/^#s=(\d+)/);null!=e&&(m=parseInt(e[1]),(m!=m||44100!=m&&48e3!=m&&88200!=m&&96e3!=m)&&(m=44100))}let e=await fetch(new URL(_));e=new Uint8Array(await e.arrayBuffer()),s=new l.WgmController(e,m,2,2),o=new(window.AudioContext||window.webkitAudioContext)({sampleRate:m}),await s.prepare(o),p()}();const p=()=>{h.fillStyle="rgb(0, 0, 0)",h.fillRect(0,0,768,576),h.font="bold 28px sans-serif",h.fillStyle="#e60012",T("WebAssembly 🎮 VGM Player",160),h.fillStyle="#00a040",h.font="15px sans-serif",T("YM2151 | YM2203 | YM2149 | YM2413 | YM2612 | SN76489(MD) | PWM(32x) | SEGAPCM",224),h.font="20px sans-serif",T("🎵 DRAG AND DROP VGM(vgm/vgz) HEAR",256),T("OR CLICK(TAP) TO PLAY SAMPLE VGM",320),R(),f.addEventListener("dragover",(function(e){return w(e),f.style.border="4px dotted #333333",!1}),!1),f.addEventListener("dragleave",(function(e){return w(e),f.style.border="none",!1})),f.addEventListener("drop",k,!1),f.addEventListener("click",y,!1)},y=async()=>{f.removeEventListener("click",y,!1),c=v({track_name:"WebAssembly 👾 VGM Player",track_name_j:"",game_name:"",game_name_j:"YM2612 sample VGM",track_author:"@h1romas4",track_author_j:""});const e=await fetch("./vgm/ym2612.vgm"),t=await e.arrayBuffer();b(t,c)},w=function(e){e.preventDefault(),e.stopPropagation()},k=e=>{w(e),f.removeEventListener("click",y,!1),f.removeEventListener("drop",k,!1),f.style.border="none";let t={},n=e.dataTransfer.files;return[].forEach.call(n,(function(e){let a=new FileReader;a.onload=function(){t[e.name]=a.result,Object.keys(t).length>=n.length&&(f.addEventListener("drop",k,!1),d=[],Object.keys(t).sort().forEach((function(e){d.push(t[e])})),u=d.length,x())},a.readAsArrayBuffer(e)})),!1},x=function(){d.length<=0||b(d.shift())},b=function(e,t){const n=()=>{s.create(e,(e=>{null==t&&(c=v(e)),null!=g&&(window.cancelAnimationFrame(g),g=null),A(),s.play(x)}))};s.ready()?n():(o.resume(),s.init((()=>{setTimeout(n,100)})))},v=function(e){return e.game_track_name=[e.game_name,e.track_name].filter((e=>""!=e)).join(" | "),e.game_track_name_j=[e.game_name_j,e.track_name_j].filter((e=>""!=e)).join(" / "),e.track_author_full=[e.track_author,e.track_author_j].filter((e=>""!=e)).join(" - "),h.font="16px sans-serif",e.game_track_name_left=(768-h.measureText(e.game_track_name).width)/2,e.game_track_name_j_left=(768-h.measureText(e.game_track_name_j).width)/2,e.track_author_full_left=(768-h.measureText(e.track_author_full).width)/2,e},A=function(){g=window.requestAnimationFrame(A),h.fillStyle="rgb(0, 0, 0)",h.fillRect(0,0,768,576);let e=s.getByteFrequencyData(),t=s.getAnalyserBufferLength();h.lineWidth=1,h.beginPath(),h.strokeStyle="#e60012";let n=Math.round(t/192);h.setLineDash([2,1]),h.lineWidth=4;for(var a=0;a<t;a+=n)h.beginPath(),h.moveTo(a+2,576),h.lineTo(a+2,576-1.5*e[a]),h.stroke();h.stroke(),h.font="12px monospace",h.fillStyle="#00a040",u>=1&&T("Track "+(u-d.length)+" / "+u,192),h.font="16px sans-serif",h.fillText(c.game_track_name,c.game_track_name_left,224),h.fillText(c.game_track_name_j,c.game_track_name_j_left,256),h.fillText(c.track_author_full,c.track_author_full_left,288),R()},R=function(){if(44100==m)return;const e=" HD:"+m+" ";h.font="16px sans-serif";const t=h.measureText(e);h.fillStyle="#00a040",h.fillRect(768-t.width,0,768,18),h.fillStyle="rgb(0, 0, 0)",h.fillText(e,768-t.width,16)},T=function(e,t){let n=(768-h.measureText(e).width)/2;h.fillText(e,n,t)};
//# sourceMappingURL=index.fa78ce22.js.map