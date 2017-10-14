'use strict';

/**
 * I don't know what this does yet.
 * @since 1.0.0
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
	 * Configuration
	 *
	 * @since 1.0.0
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

		context.fillStyle = 'white';
		context.font = 'normal 16pt Arial';
		context.fillText('FPS: ' + fps.toFixed(2), 10, 30);

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
	
	var rect = new Rectangle({
		position: {
			x: 0,
			y: 0
		},
		width: 100,
		height: 100,
		fillColor: 'pink',
		strokeWidth: 10,
		strokeColor: 'white',
		strokeCorners: 'round'
	});

	var circ = new Circle({
		position: {
			x: 0,
			y: 0
		},
		radius: 30,
		fillColor: 'red',
		strokeWidth: 5,
		strokeColor: 'green',
	});

	(function gameLoop() {

		// Compute the time it took to render the last frame
		delta = (performance.now() - lastRun);

		FPS(delta);

		// Clear screen
		context.clearRect(0, 0, width, height);






		// Draw a rectangle
		rect.draw(context);

		console.log(Input.getKeyDown('fire1'));
    
		// Draw a circle
		circ.draw(context);


		
		
		if (game_running) requestAnimFrame(gameLoop);

		// Draw the fps
		if (show_fps) showFPS();
		
		lastRun = performance.now();
		
	})();

})(this, this.document);