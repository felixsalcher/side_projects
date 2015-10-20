var game = new Phaser.Game(640, 480);

var SmallGame = function() {
  this.logo = null;
};

SmallGame.prototype = {
  preload: function() {
    console.log("test");
    this.load.image("logo", "assets/phaser-logo-small.png")
  },
  create: function() {
    console.log("create");
    this.logo = this.add.sprite(0,0, 'logo');
  },
  update: function() {
    console.log("update stuff");
  }
}

game.state.add("Game", SmallGame, true);
