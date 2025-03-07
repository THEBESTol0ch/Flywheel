'use strict';

/**
 * @param {Number} value - for property 'lifetime'
 * @return {Number} - update current property value
 */
const resolution = 64
let audioBuffer = engine.registerAudioBuffers(resolution);

export function update(value) {
	let amt = audioBuffer.average[60]
	if (amt > 0.7) {
		value = amt + 0.2 * 1.3
	} else {
		value = 0.2
	}
	return value;
}