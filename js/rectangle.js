function rectangle(x, y, width, height, color) {
  this.position = {
    x: x,
    y: y
  };
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function (context) {
    context.fillStyle = 'blue';
    context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }

  return this;
}