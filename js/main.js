'use strict';

/**
 * I don't know what this does yet.
 * @since 1.0.0-alpha
 */
window.requestAnimFrame = (function () {
	return window.requestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.mozRequestAnimationFrame ||
		window.oRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback, element) {
			window.setTimeout(function () {

				callback(+performance.now());

			}, 1000 / 60);
		};
})();

(function (window, document) {

	/**
	 * Variables
	 *
	 * @since 1.0.0-alpha
	 */
	var delta = 0;
	var lastRun = 0;

	var fps = 0;
	var fpsUpdateInterval = 1000;
	var fpsTimer = 0;
	var frames = 0;

	var canvas = document.getElementById('canvas');
	var width = canvas.width;
	var height = canvas.height;
	var game_running = true;
	var show_fps = true;
	var context = null;

	/**
	 * Determine if the canvas is supported, get the context and warn the user 
	 * otherwise.
	 */
	if (canvas.getContext) {
		context = canvas.getContext('2d');
	} else {
		// TODO: Design error message
		alert('Your browser does not support the html5 canvas!');
	}

	function showFPS() {

		context.fillStyle = 'Black';
		context.font = 'normal 16pt Arial';
		context.fillText('FPS: ' + fps.toFixed(2), 10, 26);

	}

	function FPS(delta) {

		fpsTimer += delta;
		frames++;

		if (fpsTimer > fpsUpdateInterval) {
			fps = frames;
			frames = 0;
			fpsTimer -= fpsUpdateInterval;
		}

	}

	(function gameLoop() {

		// Compute the time it took to render the last frame
		delta = (performance.now() - lastRun);

		FPS(delta);

		// Clear screen
		context.clearRect(0, 0, width, height);

		if (show_fps) showFPS();

		if (game_running) requestAnimFrame(gameLoop);

		context.fillStyle = 'green';
		context.fillRect(10, 10, 50, 50);

		lastRun = performance.now();

	})();

})(this, this.document);