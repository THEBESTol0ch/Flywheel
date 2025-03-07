'use strict';

/**
 * @param {Number} value - for property 'size'
 * @return {Number} - update current property value
 */

const resolution = 64
let audioBuffer = engine.registerAudioBuffers(resolution);

export function update(value) {
	let amt = audioBuffer.average[60]
	value = amt * 1.3
	return value;
}