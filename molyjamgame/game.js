var ABGame = {
  DEBUG: {
    ALL: false,
    ABScreen: false,
    
    hitboxes: false
  },
  
  width: 1600,
  height: 1300,
  grid_size: 25,
  
  pVelocity: 50,
  
  curScene: 0,
  scenes: ['splash',
    'scene1', 
    'scene2',
    /* NEW SCENES HERE */
    'game_over'],
  
  restart: function() {
    this.curScene = 0;
    this.nextScene();
  },
  
  nextScene: function() {
    this.curScene += 1;
    if(this.curScene < this.scenes.length) {
      Crafty.scene(this.scenes[this.curScene]);
    }
  },
  
  gameOver: function() {
    Crafty.scene('game_over');
  },
  
  toString: function() {
    return "ABGame";
  }
};


window.onload = (function() {
  Crafty.init(ABGame.width, ABGame.height);
  Crafty.load(["images/105.jpeg","images/hp.png"], function() {
    Crafty.sprite(75, "images/105.jpeg", {
      playerSpr: [0,0]
    });
    Crafty.sprite(75, "images/hp.png", {
      sandSpr: [0,0]
    });
  });
  Crafty.scene("splash");
});