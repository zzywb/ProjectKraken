class Text extends GameObject {
  constructor(x, y, text, size, font, color) {
    super(x, y);
    this.text = text;
    this.size = size;
    this.font = font;
    this.color = color;
  }

  draw(context) {
    // Set font
    context.font = 'normal ' + this.size + ' ' + this.font;

    // Draw fill
    context.fillStyle = this.color;
    context.fillText(this.text, this.x, this.y);
    context.fill();
  }
}