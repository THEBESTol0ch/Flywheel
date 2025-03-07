'use strict';

/**
 * @param {Vec3} value - for property 'angles'
 * @return {Vec3} - update current property value
 */

let audioData = engine.registerAudioBuffers(16);
let rotationSpeed = 0; // persistent velocity

export function update(value) {
  // Get beat amplitude (you might adjust the index or scale as needed)
  let beat = audioData.average[0];
  
  // Add energy from the beat to the rotation speed
  rotationSpeed += engine.frametime * beat * 1000;
  
  // Apply friction to gradually slow down the cube over time
  rotationSpeed *= 0.98; // Adjust the decay factor for desired slowdown
  
  // Update the cube's rotation using the momentum
  value.x -= engine.frametime * rotationSpeed;
  
  return value;
}

