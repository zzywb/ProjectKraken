/**
 * Circle Shape
 * 
 * @param {*obj} args 
 * @since v1.0.0
 */
function Circle(args) {
  this.position = {
    x: args.position.x,
    y: args.position.y
  };
  this.radius = args.radius;
  this.fillColor = args.fillColor;
  this.strokeWidth = args.strokeWidth;
  this.strokeColor = args.strokeColor;

  this.draw = function (context) {

    // Draw path
    context.beginPath();
    context.arc(
      this.position.x + this.radius,
      this.position.y + this.radius,
      this.radius,
      0,
      2 * Math.PI
    );

    // Draw fill
    context.fillStyle = this.fillColor;
    context.fill();

    // Drae stroke
    context.lineWidth = this.strokeWidth;
    context.strokeStyle = this.strokeColor;
    context.stroke();

  }

  return this;
}