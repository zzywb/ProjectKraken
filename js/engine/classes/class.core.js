class Core {
  constructor(width, height) {
    this.delta = 0;
    this.lastRun = 0;
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');
    this.canvas.width = width;
    this.canvas.height = height;
    this.game = new Game(this.canvas.width, this.canvas.height);
    this.gameTime = 0;

    window.requestAnimationFrame(this.loop.bind(this));
  }

  update(delta) {
    update(delta);
    fpsCounter.update(delta);
  }

  draw(context) {
    draw(context);
    context.clearRect(0, 0, this.game.width, this.game.height);
    fpsCounter.draw(context);
  }

  loop(gameTime) {
    this.delta = gameTime - this.lastRun;
    
    this.update(this.delta);

    this.draw(this.context);

    loop();

    if (this.game.running)
      window.requestAnimationFrame(this.loop.bind(this));

    this.lastRun = gameTime;
  }
}