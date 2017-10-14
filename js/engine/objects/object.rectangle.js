/**
 * Rectangle Object
 * 
 * @since v1.0.0
 */
function Rectangle(args) {
  GameObject.call(this, args);

  this.width = args.width;
  this.height = args.height;
  this.fillColor = args.fillColor;
  this.strokeWidth = args.strokeWidth;
  this.strokeColor = args.strokeColor;
  this.strokeCorners = args.strokeCorners;

  this.draw = function () {

    // Draw stroke
    context.strokeStyle = this.strokeColor;
    context.lineWidth = this.strokeWidth * 2;
    context.lineJoin = this.strokeCorners;
    context.strokeRect(
      this.position.x + this.strokeWidth,
      this.position.y + this.strokeWidth,
      this.width,
      this.height
    );

    // Draw fill
    context.fillStyle = this.fillColor;
    context.fillRect(
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );

  }

  return this;
}