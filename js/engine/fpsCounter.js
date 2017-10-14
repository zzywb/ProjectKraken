/**
 * FPS Counter
 * 
 * @since v1.0.0
 */
var fpsCounter = new (function() {

  this.draw = function (context) {
    context.fillStyle = 'white';
    context.font = 'normal 16pt Arial';
    context.fillText('FPS: ' + fps.toFixed(2), 10, 30);
  }

  this.update = function (delta) {
    fpsTimer += delta;
    frames++;

    if (fpsTimer > fpsUpdateInterval) {
      fps = frames;
      frames = 0;
      fpsTimer -= fpsUpdateInterval;
    }
  }

  return this;
})();