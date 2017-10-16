var circ = new Circle(width/2 - 50, height/2 - 50, 50, 'red', 5, 'green');
var rect = new Rectangle(0, 0, 200, 100, 'white', 10, 'blue');
var trin = new Triangle(0, 0, 0, 100, 100, 100);
var text = new Text(20,30, 'Welcome', '50px', 'Arial', 'red');

(function (window, document) {

  function update(delta) {

    FPSCounter.update(delta);

  }

  function draw() {

    // Clear screen
    context.clearRect(0, 0, width, height);

    // Draw
    text.draw(context);
    // circ.draw(context);
    // rect.draw(context);
    // trin.draw(context);

    // Show FPS
    FPSCounter.draw(context);

  }

  function loop(gameTime) {

    delta = gameTime - lastRun;

    update(delta);

    draw();

    if (game_running)
      window.requestAnimationFrame(loop);

    lastRun = gameTime;

  }

  window.requestAnimationFrame(loop);

})(this, this.document);