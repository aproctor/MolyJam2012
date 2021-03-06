var ABGame = {
  DEBUG: {
    ALL: false,
    ABScreen: false,
    
    hitboxes: false
  },
  
  width: 750,
  height: 750,
  grid_size: 25,
  
  max_lives: 1,
  cur_lives: 1,
  
  curScene: 0,
  scenes: ['splash',
    'scene1-1', 'scene1-2', 'scene1-3', 'scene1-4', 'scene1-5',
    /* NEW SCENES HERE */
    'game_over'],
    
  tile: 'images/tile.jpg',
  
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
  
  restartScene: function() {
    Crafty.scene(this.scenes[this.curScene]);
  },
  
  gameOver: function() {
    Crafty.scene('game_over');
  },
  
  toString: function() {
    return "ABGame";
  }
};

/**
 * On page load
 */
window.onload = (function() {
  Crafty.init(ABGame.width, ABGame.height);
  Crafty.background('#FFF7AB');
  Crafty.load(["images/105.jpeg","images/hp.png", "images/tile.jpg"], function() {
    Crafty.sprite(75, "images/105.jpeg", {
      playerSpr: [0,0]
    });
    Crafty.sprite(75, "images/hp.png", {
      sandSpr: [0,0]
    });
  });
  Crafty.scene("splash");
});