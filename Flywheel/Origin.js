'use strict';

export var scriptProperties = createScriptProperties()
	.addSlider({
		name: 'beatSensitivity',
		label: 'Beat sensitivity',
		value: 0.8,
		min: 0,
		max: 3,
		integer: false
	})
	.finish();

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */

const resolution = 16
let audioBuffer = engine.registerAudioBuffers(resolution);

export function update(value) {
	try {
			let amt = audioBuffer.average[0]
			if (amt > scriptProperties.beatSensitivity) {
				//thisObject.getAnimation("BeatAnimation").stop()
				//thisScene.getLayer("Piston_1_2").getAnimation("BeatAnimation").stop()
				//thisScene.getLayer("Piston_1_1").getAnimation("BeatAnimation").stop()
				//thisScene.getLayer("Piston_2_2").getAnimation("BeatAnimation").stop()
				//thisScene.getLayer("Piston_2_1").getAnimation("BeatAnimation").stop()

				thisObject.getAnimation("BeatAnimation").play()
				thisScene.getLayer("Piston_1_2").getAnimation("BeatAnimation").play()
				thisScene.getLayer("Piston_1_1").getAnimation("BeatAnimation").play()
				thisScene.getLayer("Piston_2_2").getAnimation("BeatAnimation").play()
				thisScene.getLayer("Piston_2_1").getAnimation("BeatAnimation").play()
			}
		} catch (error) {
			console.error("ERROR", error);
		}
	return value;
}
