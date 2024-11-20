function Game() {}

Game.prototype.init = () => {
  this.gameWorld = new GameWorld();
};

Game.prototype.start = () => {
  PoolGame.init();

  PoolGame.mainLoop();
};

Game.prototype.mainLoop = () => {
  Canvas.clear();
  PoolGame.gameWorld.update();
  PoolGame.gameWorld.draw();

  requestAnimationFrame(PoolGame.mainLoop);
};

let PoolGame = new Game();
