class FPSCounter extends GameObject {
  constructor(x, y) {
    super(x, y);
    this.text = new Text(this.x, this.y, 'FPS: NaN', '50px', 'Arial', 'white');
    this.fps = 0;
    this.fpsTimer = 0;
    this.frames = 0;
    this.fpsUpdateInterval = 500;
  }

  draw(context) {
    this.text.draw(context);
  }

  update(delta) {
    this.fpsTimer += delta;
    this.frames++;
    
    if (this.fpsTimer > this.fpsUpdateInterval) {
      this.fps = this.frames*1000/this.fpsUpdateInterval;
      this.frames = 0;
      this.fpsTimer -= this.fpsUpdateInterval;
      this.text.string = 'FPS: ' + this.fps;
    }
  }
}