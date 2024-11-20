function GameWorld() {
  this.stick = new Stick();
}

GameWorld.prototype.update = () => {
  this.stick.update();
};

GameWorld.prototype.draw = () => {
  Canvas.drawImage(sprites.background, { x: 0, y: 0 });
  this.stick.draw();
};
