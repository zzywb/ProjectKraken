/**
 * Engine Core
 * 
 * @since v1.0.0
 */
var delta = 0;
var lastRun = 0;

var fps = 0;
var fpsUpdateInterval = 1000;
var fpsTimer = 0;
var frames = 0;

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var game_running = true;