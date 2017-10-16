class Text extends GameObject {
  constructor(x, y, string, size, font, color) {
    super(x, y);
    this.string  = string;
    this.size = size;
    this.font = font;
    this.color = color;
  }

  draw(context) {
    // Set font
    context.font = 'normal ' + this.size + ' ' + this.font;

    // Draw fill
    context.textBaseline = 'top';
    context.fillStyle = this.color;
    context.fillText(this.string, this.x, this.y);
    context.fill();
  }
}