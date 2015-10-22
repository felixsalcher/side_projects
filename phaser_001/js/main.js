var game = new Phaser.Game(640, 480);

var BallGame = function() {
    this.player1 = null;
    this.player2 = null;
    this.floor = null;
    this.ball = null;
    this.separator = null;
    
    this.cursors = null;
};

BallGame.prototype = {
  preload: function() {
      this.load.image("player", "assets/player.png");
      this.load.image("floor", "assets/field.png");
      this.load.image('ball', "assets/ball.png");
      this.load.image("separator", "assets/separator.png");

  },
  create: function() {
      this.cursors = this.input.keyboard.createCursorKeys();
      this.physics.startSystem(Phaser.Physics.ARCADE);
      
      
      this.player1 = this.add.sprite(0,0,'player');
      this.player2 = this.add.sprite(0,0,'player');
      this.ball = this.add.sprite(0,0,'ball');
      this.floor = this.add.sprite(0, 0, 'floor');
      this.separator = this.add.sprite(0,0,'separator');
      
      
      this.floor.x = this.world.width / 2 - this.floor.width / 2;
      this.floor.y = this.world.height / 2 - this.floor.height / 2;
      
      this.separator.x = this.world.width / 2 - this.separator.width / 2;
      this.separator.y = this.world.height / 2 - this.floor.height / 2 - this.separator.height;
      
      this.player1.y = this.player2.y = this.world.height / 2 - this.floor.height / 2 - this.player1.height;
      this.player1.x = this.world.width / 2 - this.floor.width / 4;
      this.player2.x = this.world.width / 2 + this.floor.width / 4;
      
      this.physics.arcade.enable(this.player1);
      this.player1.body.bounce.y = 0;
      this.player1.body.gravity.y = 300;
      this.player1.body.collideWorldBounds = true;
  },
  update: function() {
  }
};

game.state.add("Game", BallGame, true);
