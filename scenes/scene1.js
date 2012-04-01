Crafty.scene("scene1", function() {
  /*
   * Platforms
   */
  Crafty.e("ABPlatform");
  //Crafty.e("ABPlatform").attr({x: 100, y: 100, w: 300});
  //Crafty.e("ABPlatform").attr({x: 200, y: ABGame.height - 2.5*ABGame.grid_size, w: 300});
  
  /*
   * Player
   */
  window.plr = Crafty.e("ABPlayer");
  
  /*
   * Screen
   */
   Crafty.e("ABScreen");
   Crafty.e("ABExit");
});


Crafty.scene("scene2", function() {
  /*
   * Platforms
   */
  Crafty.e("ABPlatform");
  Crafty.e("ABPlatform").attr({x: 200, y: ABGame.height - 2.5*ABGame.grid_size, w: 300});
  
  /*
   * Player
   */
  Crafty.e("ABPlayer");
  
  /*
   * Screen
   */
   Crafty.e("ABScreen");
   Crafty.e("ABExit");
});

Crafty.scene("scene3", function() {
  /*
   * Platforms
   */
  Crafty.e("ABPlatform");
  Crafty.e("ABPlatform").attr({x: 225, y: ABGame.height - 2.5*ABGame.grid_size, w: 100});
  Crafty.e("ABPlatform").attr({x: 25, y: ABGame.height - 8*ABGame.grid_size, w: 100});
  Crafty.e("ABPlatform").attr({x: 225, y: ABGame.height - 12*ABGame.grid_size, w: 400});
  /*
   * Player
   */
  Crafty.e("ABPlayer");
  
  /*
   * Screen
   */
   Crafty.e("ABScreen");
   Crafty.e("ABExit");
});