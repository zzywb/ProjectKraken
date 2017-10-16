class Triangle extends GameObject {
  constructor(x1, y1, x2, y2, x3, y3, fillColor, strokeWidth, strokeColor) {
    super(x1, y1);
    this.x2 = x2;
    this.y2 = y2;
    this.x3 = x3;
    this.y3 = y3;
    this.fillColor = fillColor;
    this.strokeWidth = strokeWidth;
    this.strokeColor = strokeColor;
  }

  draw(context) {
    // Draw path
    context.beginPath();
    context.moveTo(this.x, this.y);
    context.lineTo(this.x2, this.y2);
    context.lineTo(this.y3, this.y3);
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