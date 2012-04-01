Crafty.scene("splash", function() {
  Crafty.background('rgb(127,127,127)');
  Crafty.e("2D, DOM, Text").attr({x:250, y:130, w: 300 }).text("Click to play...");
  Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, h: ABGame.height, w: ABGame.width }).bind("Click", function() {
      ABGame.nextScene();
    });
});


Crafty.scene("game_over", function() {
  Crafty.background('rgb(127,127,127)');
  Crafty.e("2D, DOM, Text").attr({x:250, y:130, w: 300 }).text("GAME OVER");
  Crafty.e("2D, DOM, Mouse").attr({x:0, y:0, h: ABGame.height, w: ABGame.width }).bind("Click", function() {
      ABGame.restart();
    });
});