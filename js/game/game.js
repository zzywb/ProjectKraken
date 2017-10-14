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
    x: width / 2 - 15,
    y: height / 2 - 15
  },
  radius: 30,
  fillColor: 'red',
  strokeWidth: 5,
  strokeColor: 'green',
});

var speed = 5;
var sum = 0;

(function (window, document) {

  function update(delta) {

    FPSCounter.update(delta);

    if (Input.getKeyDown('up')) {
      circ.position.y -= speed;
    }
    if (Input.getKeyDown('down')) {
      circ.position.y += speed;
    }
    if (Input.getKeyDown('left')) {
      circ.position.x -= speed;
    }
    if (Input.getKeyDown('right')) {
      circ.position.x += speed;
    }

    // var mag = Math.hypot(circ.position.x, circ.position.y);
    // x /= mag;
    // y /= mag;

    circ.strokeWidth = 2 + Math.abs(10 * Math.sin(sum += delta / 1000));

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