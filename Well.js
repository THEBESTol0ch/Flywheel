'use strict';

/**
 * @param {Boolean} value - for property 'visible'
 * @return {Boolean} - update current property value
 */
export function update(value) {
	if (thisScene.getLayer("Slider").origin.x != 0) {
		thisLayer.getChildren()[0].getAnimation("ApplyEffect").play()
		thisLayer.getChildren()[0].getChildren()[0].getAnimation("ApplyEffect").play()
	} else {
		thisLayer.getChildren()[0].getAnimation("ApplyEffect").pause()
		thisLayer.getChildren()[0].getChildren()[0].getAnimation("ApplyEffect").pause()
	}
	return value;
}
