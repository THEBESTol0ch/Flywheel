'use strict';

/**
 * @param {Vec3} value - for property 'origin'
 * @return {Vec3} - update current property value
 */
export function update(value) {
	value.y = thisScene.getLayer("Flywheel").origin.y
	return value;
}
