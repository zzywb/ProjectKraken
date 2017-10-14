/**
 * Engine Core
 * 
 * @since v1.0.0
 */

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

  /**
   * The game loop
   * 
   * @since v1.0.0
   */
  this.gameLoop = function gameLoop() {
    
    // Compute the time it took to render the last frame
    delta = (performance.now() - lastRun);
    context.clearRect(0, 0, width, height);
    
    // Show FPS
    FPS(delta);
    
    // Drawing on canvas
    draw(context);
   
    // Clear screen
    if (game_running)
      requestAnimFrame(gameLoop);
  
    // Draw the fps
    if (show_fps)
      showFPS();
    
    lastRun = performance.now();
    
  };

  this.gameLoop();

})(this, this.document);