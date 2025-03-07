'use strict';

/**
 * @param {Boolean} value - for property 'visible'
 * @return {Boolean} - update current property value
 */
export function init(value) {
	const children = thisLayer.getChildren();
	let index = 0;
	engine.setInterval(() => {
		if (thisScene.getLayer("Slider").origin.x != 0) {
			children[index].getAnimation("ApplyEffect").stop();
			children[index].getChildren()[0].getAnimation("ApplyEffect").stop();

			children[index].getAnimation("ApplyEffect").play();
			children[index].getChildren()[0].getAnimation("ApplyEffect").play();
		}
		index = (index + 1) % children.length;
	}, 100);
	return value;
}