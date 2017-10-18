let rect = new Rectangle(30, 30, 50, 60, 'white', 5, 'blue');

function update(delta) {

  if (input.getKeyDown('up')) {
    rect.y -= 5;
  }
  if (input.getKeyDown('down')) {
    rect.y += 5;
  }
  if (input.getKeyDown('left')) {
    rect.x -= 5;
  }
  if (input.getKeyDown('right')) {
    rect.x += 5;
  }

}

function draw(context) {
  rect.draw(context);
}

function loop(gameTime) {}