// license:BSD-3-Clause
// copyright-holders:Hiromasa Tanaka
import { WgmController } from "./wgm_main_thread";

/**
 * AudioWorklet Player
 */
let player;

/**
 * Audio context
 */
let audioContext = null;

/**
 * VGM setting
 */
const DEFAULT_SAMPLING_RATE = 44100;
const LOOP_MAX_COUNT = 2;
const FEED_OUT_SECOND = 2;

/**
 * Canvas settings
 */
const CANVAS_WIDTH = 768;
const CANVAS_HEIGHT = 576;
const COLOR_MD_GREEN = '#00a040';
const COLOR_MD_RED = '#e60012';
const FONT_MAIN_STYLE = '16px sans-serif';

/**
 * VGM member
 */
let playlist = [];
let totalPlaylistCount;
let musicMeta;
let samplingRate = DEFAULT_SAMPLING_RATE;

/**
 * Canvas member
 */
let canvas;
let canvasContext;
let animId = null;

/**
 * Canvas setting
 */
(function() {
    canvas = document.getElementById('screen');
    canvas.setAttribute('width', CANVAS_WIDTH);
    canvas.setAttribute('height', CANVAS_HEIGHT);
    let pixelRatio = window.devicePixelRatio ? window.devicePixelRatio : 1;
    if(pixelRatio > 1 && window.screen.width < CANVAS_WIDTH) {
        canvas.style.width = 320 + "px";
        canvas.style.heigth = 240 + "px";
    }
    canvasContext = canvas.getContext('2d');
})();

/**
 * Initialize system
 */
(async function() {
    /**
     * Switch sampling rate for test (ex. https://.../#s=48000)
     *
     *  let context = new AudioContext({ sampleRate: samplingRate })
     *
     * (2021/9)
     * Support Firefox only. (I haven't confirmed anything other than Linux platform)
     * In other browsers, the setting works, but the native connection to the audio interface drops to 44100Hz.
     * There is probably some downsampling going on inside the browser.
     * Also, the setting itself may be invalid in Safari.
     */
    if(location.hash != "") {
        const sample = location.hash.match(/^#s=(\d+)/);
        if(sample != null) {
            samplingRate = parseInt(sample[1]);
            if(samplingRate != samplingRate /* isNan */
                || !(samplingRate == 44100 || samplingRate == 48000 || samplingRate == 88200 || samplingRate == 96000)) {
                samplingRate = DEFAULT_SAMPLING_RATE;
            }
        }
    }

    /**
     * Pre-fetch WebAssemby binary module
     */
    let module = await fetch(new URL('../wasm/libymfm_bg.wasm', import.meta.url));
    module = new Uint8Array(await module.arrayBuffer())
    player = new WgmController(module, samplingRate, LOOP_MAX_COUNT, FEED_OUT_SECOND);

    /**
     * Start event loop
     */
     start();
})();

/**
 * Start event loop
 */
const start = () => {
    canvasContext.fillStyle = 'rgb(0, 0, 0)';
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    canvasContext.font = 'bold 28px sans-serif';
    canvasContext.fillStyle = COLOR_MD_RED;
    fillTextCenterd("WebAssembly 🎮 VGM Player", CANVAS_HEIGHT / 2 - 32 * 4);
    canvasContext.fillStyle = COLOR_MD_GREEN;
    canvasContext.font = '15px sans-serif';
    fillTextCenterd("YM2151 | YM2203 | YM2149 | YM2413 | YM2612 | SN76489(MD) | PWM(32x) | SEGAPCM", CANVAS_HEIGHT / 2 - 32 * 2);
    canvasContext.font = '20px sans-serif';
    fillTextCenterd("🎵 DRAG AND DROP VGM(vgm/vgz) HEAR", CANVAS_HEIGHT / 2 - 32 * 1);
    fillTextCenterd("OR CLICK(TAP) TO PLAY SAMPLE VGM", CANVAS_HEIGHT / 2 + 32 * 1);
    printStatus();
    // Set UI event
    canvas.addEventListener('dragover', function(e) {
        prevent(e);
        canvas.style.border = '4px dotted #333333';
        return false;
    }, false);
    canvas.addEventListener('dragleave', function(e) {
        prevent(e);
        canvas.style.border = 'none';
        return false;
    });
    // drag to play
    canvas.addEventListener('drop', onDrop, false);
    // for sample music data
    canvas.addEventListener('click', sample, false);
};

/**
 * Sample music
 */
const sample = async () => {
    // sample music one time
    canvas.removeEventListener('click', sample, false);
    // it takes precedence over VGM metadata
    musicMeta = createGd3meta({
        track_name: "WebAssembly 👾 VGM Player",
        track_name_j: "",
        game_name: "",
        game_name_j: "YM2612 sample VGM",
        track_author: "@h1romas4",
        track_author_j: ""
    });
    const response = await fetch('./vgm/ym2612.vgm');
    const bytes = await response.arrayBuffer();
    play(bytes, musicMeta);
}

/**
 * Event prevent
 *
 * @param {*} e
 */
const prevent = function(e) {
    e.preventDefault();
    e.stopPropagation();
};

/**
 * Drag and Drop
 *
 * @param {*} ev
 * @returns false (prevent event)
 */
const onDrop = (ev) => {
    prevent(ev);
    // sample music one time
    canvas.removeEventListener('click', sample, false);
    // pause the drop event
    canvas.removeEventListener('drop', onDrop, false);
    canvas.style.border = 'none';
    let filelist = {};
    let files = ev.dataTransfer.files;
    [].forEach.call(files, function(file) {
        let reader = new FileReader();
        reader.onload = function() {
            filelist[file.name] = reader.result;
            if(Object.keys(filelist).length >= files.length) {
                // resume the drop event
                canvas.addEventListener('drop', onDrop, false);
                playlist = [];
                Object.keys(filelist).sort().forEach(function(key) {
                    playlist.push(filelist[key]);
                });
                totalPlaylistCount = playlist.length;
                next();
            }
        };
        reader.readAsArrayBuffer(file);
    });
    return false;
};

/**
 * Play next playlist
 */
const next = function() {
    if(playlist.length <= 0) return;
    play(playlist.shift());
}

/**
 * Play VGM
 *
 * @param {*} vgmfile
 * @param {*} altMeta
 */
const play = async function(vgmfile, altMeta) {
    // Worklet exchange callbacks
    const start = () => {
        player.create(vgmfile, (gd3) => {
            if(altMeta == null) {
                musicMeta = createGd3meta(gd3);
            }
            if(animId != null) {
                window.cancelAnimationFrame(animId);
                animId = null;
            }
            player.play(next);
            draw();
        });
    };
    // iOS only sounds AudioContext that created by the click event.
    if(audioContext == null) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: samplingRate });
        // 100ms wait for Chromium stunby
        await player.init(audioContext, () => { setTimeout(start, 100) });
    } else {
        start();
    }
};

/**
 * Create GD3 meta
 *
 * @param {*} meta
 * @returns
 */
 const createGd3meta = function(meta) {
    meta.game_track_name = [meta.game_name, meta.track_name].filter(str => str != "").join(" | ");
    meta.game_track_name_j = [meta.game_name_j, meta.track_name_j].filter(str => str != "").join(" / ");
    meta.track_author_full = [meta.track_author, meta.track_author_j].filter(str => str != "").join(" - ");
    canvasContext.font = FONT_MAIN_STYLE;
    meta.game_track_name_left = (CANVAS_WIDTH - canvasContext.measureText(meta.game_track_name).width) / 2;
    meta.game_track_name_j_left = (CANVAS_WIDTH - canvasContext.measureText(meta.game_track_name_j).width) / 2;
    meta.track_author_full_left = (CANVAS_WIDTH - canvasContext.measureText(meta.track_author_full).width) / 2;
    return meta;
};

/**
 * Draw
 */
const draw = function() {
    animId = window.requestAnimationFrame(draw);
    canvasContext.fillStyle = 'rgb(0, 0, 0)';
    canvasContext.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    let audioAnalyserBuffer = player.getByteFrequencyData();
    let audioAnalyserBufferLength = player.getAnalyserBufferLength();

    canvasContext.lineWidth = 1;
    canvasContext.beginPath();
    canvasContext.strokeStyle = COLOR_MD_RED;

    let width = 4;
    let step =  Math.round(audioAnalyserBufferLength / (CANVAS_WIDTH / width));
    canvasContext.setLineDash([2, 1]);
    canvasContext.lineWidth = width ;
    for(var i = 0; i < audioAnalyserBufferLength; i += step) {
        canvasContext.beginPath();
        canvasContext.moveTo(i + 2, CANVAS_HEIGHT);
        canvasContext.lineTo(i + 2, CANVAS_HEIGHT - (audioAnalyserBuffer[i] * 1.5));
        canvasContext.stroke();
    }
    canvasContext.stroke();

    canvasContext.font = "12px monospace";
    canvasContext.fillStyle = COLOR_MD_GREEN;
    if(totalPlaylistCount >= 1) {
        fillTextCenterd("Track " + (totalPlaylistCount - playlist.length) + " / " + totalPlaylistCount, CANVAS_HEIGHT / 2 - 96);
    }
    canvasContext.font = FONT_MAIN_STYLE;
    canvasContext.fillText(musicMeta.game_track_name, musicMeta.game_track_name_left, CANVAS_HEIGHT / 2 - 64);
    canvasContext.fillText(musicMeta.game_track_name_j, musicMeta.game_track_name_j_left, CANVAS_HEIGHT / 2 - 32);
    canvasContext.fillText(musicMeta.track_author_full, musicMeta.track_author_full_left, CANVAS_HEIGHT / 2);
    printStatus();
}

/**
 * Print status
 */
 const printStatus = function() {
    if(samplingRate == 44100) return;

    const status = " HD:" + samplingRate + " ";
    canvasContext.font = '16px sans-serif';
    const measure = canvasContext.measureText(status);
    canvasContext.fillStyle = COLOR_MD_GREEN;
    canvasContext.fillRect(CANVAS_WIDTH - measure.width, 0, CANVAS_WIDTH, 18);
    canvasContext.fillStyle = 'rgb(0, 0, 0)';
    canvasContext.fillText(status, CANVAS_WIDTH - measure.width, 16);
}

/**
 * Fill text center
 *
 * @param {*} str
 * @param {*} height
 */
 const fillTextCenterd = function(str, height) {
    let left = (CANVAS_WIDTH - canvasContext.measureText(str).width) / 2;
    canvasContext.fillText(str, left, height);
}