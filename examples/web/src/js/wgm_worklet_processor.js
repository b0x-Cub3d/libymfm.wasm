// license:BSD-3-Clause
// copyright-holders:Hiromasa Tanaka
import { AUDIO_WORKLET_SAMPLING_CHUNK, NOW_PLAYING_RING, END_OF_MUSIC_CHUNK, FEED_OUT_START_CHUNK } from './const.js'

/**
 * WgmWorkletProcessor
 */
class WgmWorkletProcessor extends AudioWorkletProcessor {
    /**
     * Constructor
     *
     * @param {*} options
     */
    constructor(options) {
        super();
        // instance status
        this.play = false;
        this.playring = null;
        this.playringBefore = null;
        this.chunkStep = null;
        this.chunkCount = null;
        this.chunkSteps = options.processorOptions.chunkSteps;
        // shared memory
        this.ringL1 = new Float32Array(options.processorOptions.ringL1);
        this.ringR1 = new Float32Array(options.processorOptions.ringR1);
        this.ringL2 = new Float32Array(options.processorOptions.ringL2);
        this.ringR2 = new Float32Array(options.processorOptions.ringR2);
        this.status = new Int32Array(options.processorOptions.status);
        // message dispatch
        this.port.onmessage = (event) => this.dispatch(event);
    }

    /**
     * Waveform generation process
     *
     * @param {*} inputs
     * @param {*} outputs
     * @param {*} parameters
     * @return {boolean} next stage
     */
    process(inputs, outputs, parameters) { // eslint-disable-line no-unused-vars
        // stop music
        if(!this.play) return true;

        // notify buffering next ring
        if(this.playring != this.playringBefore) {
            Atomics.store(this.status, NOW_PLAYING_RING, this.playring);
            Atomics.notify(this.status, NOW_PLAYING_RING, /* watcher count */ 1);
            this.playringBefore = this.playring;
        }

        let chunkL;
        let chunkR;
        if(this.playring == 1) {
            chunkL = this.ringL1;
            chunkR = this.ringR1;
        } else {
            chunkL = this.ringL2;
            chunkR = this.ringR2;
        }

        // set sampling
        let pointer = this.chunkStep * AUDIO_WORKLET_SAMPLING_CHUNK;
        outputs[0][0].set(chunkL.slice(pointer, pointer + AUDIO_WORKLET_SAMPLING_CHUNK));
        outputs[0][1].set(chunkR.slice(pointer, pointer + AUDIO_WORKLET_SAMPLING_CHUNK));

        // step chunk step per AudioWorklet chunk
        this.chunkStep++;
        // next chunk
        if(this.chunkStep >= this.chunkSteps) {
            // end of music
            if(this.status[END_OF_MUSIC_CHUNK] != 0
                && this.status[END_OF_MUSIC_CHUNK] <= this.chunkCount) {
                this.play = false;
                this.port.postMessage({"message": "callback", "data": "endofplay"});
            } else if(this.status[FEED_OUT_START_CHUNK] != 0
                && this.status[FEED_OUT_START_CHUNK] <= this.chunkCount) {
                // feedout
                this.port.postMessage({"message": "feedout"});
            }
            // change ring
            this.playring = this.playring == 1? 2: 1;
            // clear chunk step
            this.chunkStep = 0;
            // count chunk
            this.chunkCount++;
        }

        return true;
    }

    /**
     * Message dispatcher
     *
     * @param {*} event
     */
    async dispatch(event) {
        switch(event.data.message) {
            case 'play': {
                // init status
                this.playring = 1;
                this.playringBefore = null;
                this.chunkCount = 1; // 1:first buffer
                this.chunkStep = 0;
                // start play
                this.play = true;
                break;
            }
            case 'stop': {
                this.play = false;
                Atomics.store(this.status, NOW_PLAYING_RING, /* break loop */ 3);
                Atomics.notify(this.status, NOW_PLAYING_RING, /* watcher count */ 1);
                this.port.postMessage({"message": "callback", "data": "clear wait"});
            }
        }
    }
}

registerProcessor('wgm-worklet-processor', WgmWorkletProcessor);
