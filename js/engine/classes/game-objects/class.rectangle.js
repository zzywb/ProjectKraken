class Rectangle extends GameObject {
  constructor(x, y, w, h, fillColor, strokeWidth, strokeColor) {
    super(x, y);
    this.w = w;
    this.h = h;
    this.fillColor = fillColor;
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
  }

  draw(context) {
    // Draw path
    context.beginPath();
    context.rect(
      this.x + this.strokeWidth/2,
      this.y + this.strokeWidth/2,
      this.w,
      this.h
    );
    context.closePath();

    // Draw fill
    context.fillStyle = this.fillColor;
    context.fill();

    // Draw stroke
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.strokeColor;
    context.stroke();
  }
}