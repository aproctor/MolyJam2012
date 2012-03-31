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
