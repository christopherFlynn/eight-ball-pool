function Canvas2d() {
  this._canvas = document.getElementById("screen");
  this._canvasContext = this._canvas.getContext("2d");
}

Canvas2d.prototype.clear = () => {
  this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
};

Canvas2d.prototype.drawImage = (image, position) => {
  this._canvasContext.drawImage(image, position.x, position.y);
};

let Canvas = new Canvas2d();
