var circ = new Circle(2, 3, 5);

(function (window, document) {

  function update(delta) {

    FPSCounter.update(delta);

  }

  function draw() {

    // Clear screen
    context.clearRect(0, 0, width, height);

    // Draw a circle if fire1 pressed
    circ.draw(context);

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