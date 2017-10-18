/**
 * Engine Core
 * 
 * @since v1.0.0
*/

var keyMap = {
  fire1: [' ', 'Enter'],
  up:    ['w', 'ArrowUp'],
  down:  ['s', 'ArrowDown'],
  left:  ['a', 'ArrowLeft'],
  right: ['d', 'ArrowRight']
};

let fpsCounter = new FPSCounter(0, 0);
let input = new Input(keyMap);
let core = new Core(600, 400);
