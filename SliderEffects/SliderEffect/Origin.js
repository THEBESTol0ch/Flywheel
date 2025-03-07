'use strict';

/**
 * @param {Boolean} value - for property 'visible'
 * @return {Boolean} - update current property value
 */
export function update(value) {
	value.y = thisScene.getLayer("Flywheel").origin.y;
	return value;
}