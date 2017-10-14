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

var speed = new Vector2(5, 5);
var currentSpeed = new Vector2(0, 0);
var sum = 0;

(function (window, document) {

  function update(delta) {

    FPSCounter.update(delta);

    currentSpeed.x = 0;
    currentSpeed.y = 0;

    if (Input.getKeyDown('up')) {
      currentSpeed.y = -speed.y;
    }
    else if (Input.getKeyDown('down')) {
      currentSpeed.y = speed.y;
    }
    else {
      currentSpeed.y = 0;
    }

    if (Input.getKeyDown('left')) {
      currentSpeed.x = -speed.x;
    }
    else if (Input.getKeyDown('right')) {
      currentSpeed.x = speed.x;
    }
    else {
      currentSpeed.x = 0;
    }


    var mag = Math.hypot(currentSpeed.x, currentSpeed.y);
    if(currentSpeed.x) {
      currentSpeed.x = currentSpeed.x / mag * speed.x;
    }
    if(currentSpeed.y) {
      currentSpeed.y = currentSpeed.y / mag * speed.y;
    }

    circ.position.x += currentSpeed.x;
    circ.position.y += currentSpeed.y;

    

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