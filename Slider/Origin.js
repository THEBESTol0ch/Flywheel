'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */

const resolution = 64
let audioBuffer = engine.registerAudioBuffers(resolution);

export function update(value) {
	try {
			let amt = audioBuffer.average[63]
			value.x = amt
			if (amt > 0.67) {
				value.x = 0.67
			}
		} catch (error) {
			console.error("ERROR", error);
		}
	value.y = thisScene.getLayer("Flywheel").origin.y
	return value;
}