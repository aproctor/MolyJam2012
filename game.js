var ABGame = {
  DEBUG: {
    ALL: false,
    ABScreen: false,
    
    hitboxes: false
  },
  width: 600,
  height: 300,
  grid_size: 25,
  
  pVelocity: 50,
  
  curScene: 0,
  scenes: ['splash','scene1'],
  
  nextScene: function() {
    this.curScene += 1;
    if(this.curScene < this.scenes.length) {
      Crafty.scene(this.scenes[this.curScene]);
    }
  },
  
  toString: function() {
    return "ABGame";
  }
};


window.onload = (function() {
  Crafty.init(ABGame.width, ABGame.height);
  Crafty.scene("splash");
});