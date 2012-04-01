Crafty.scene("splash", function() {
  Crafty.e("2D, DOM, Text").attr({x:250, y:130, w: 300, size: 38, z: 20 }).text("Click to play...");
  Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, h: ABGame.height, w: ABGame.width}).bind("Click", function() {
      ABGame.nextScene();
    });
});


Crafty.scene("game_over", function() {
  Crafty.e("2D, DOM, Text").attr({x:250, y:130, w: 300, size: 38, z: 20}).text("GAME OVER");
  Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, h: ABGame.height, w: ABGame.width }).bind("Click", function() {
      ABGame.restart();
    });
});