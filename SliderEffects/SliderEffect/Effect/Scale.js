'use strict';

let scaleY = 0;

/**
 * @param {Vec3} value - for property 'scale'
 * @param {AnimationEvent} event - info about the event
 * @return {Vec3} - update current property value
 */
export function animationEvent(event, value) {
	if (event.name == "EffectStarted") {
		scaleY = 0.001 + (thisLayer.getParent().origin.x / 100) * 4;
	}
}

/**
 * @param {Vec3} value - for property 'scale'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.y = scaleY;
	return value;
}
