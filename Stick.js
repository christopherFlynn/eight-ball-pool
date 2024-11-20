function Stick() {
  this.position = { x: 0, y: 400 };
}

Stick.prototype.update = () => {};

Stick.prototype.draw = () => {
  Canvas.drawImage(sprites.stick, this.position);
};
