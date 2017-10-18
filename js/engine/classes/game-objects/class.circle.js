class Circle extends GameObject {
  constructor(x, y, r, fillColor, strokeWidth, strokeColor) {
    super(x, y);
    this.r = r;
    this.fillColor = fillColor;
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
  }

  draw(context) {
    // Draw path
    context.beginPath();
    context.arc(
      this.x + this.r + this.strokeWidth/2,
      this.y + this.r + this.strokeWidth/2,
      this.r,
      0,
      2 * Math.PI,
      false
    );
    context.closePath();

    // Draw fill
    context.fillStyle = this.fillColor;
    context.fill();

    // Drae stroke
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.strokeColor;
    context.stroke();
  }
}