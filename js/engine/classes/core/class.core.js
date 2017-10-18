class Core {
  constructor(width, height) {
    this.delta = 0;
    this.lastRun = 0;
    this.canvas = this.createHiDPICanvas(width, height);
    this.context = canvas.getContext('2d');
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

  pixelRatio() {
    var context = document.createElement("canvas").getContext("2d")
    var dpr = devicePixelRatio || 1;
    var bsr = context.webkitBackingStorePixelRatio ||
              context.mozBackingStorePixelRatio ||
              context.msBackingStorePixelRatio ||
              context.oBackingStorePixelRatio ||
              context.backingStorePixelRatio || 1;
    return dpr/bsr;
  }

  createHiDPICanvas(w, h, ratio) {
    if(!ratio)
      ratio = this.pixelRatio();
    var can = document.getElementById('canvas');
        can.width = w * ratio;
        can.height = h * ratio;
        can.style.width = w + "px";
        can.style.height = h + "px";
        can.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
    return can;
  }
}