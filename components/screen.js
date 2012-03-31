/*
 * Define a custom screen component to listen for click events
 */
Crafty.c("ABScreen", {
     init: function() {
         this.addComponent("2D, DOM, Mouse, Color")
         this.w = ABGame.width ;
         this.h = ABGame.height;
         this.x = 0;
         this.y = 0;
         
         if(ABGame.DEBUG.ALL === true || ABGame.DEBUG.ABScreen === true) {
           this.color("#AA00FF");
         }
     }
});

Crafty.c("ABPlatform", {
  init: function() {
    this.addComponent("2D, DOM, Color, Collision")
    this.w = ABGame.width;
    this.h = ABGame.grid_size;
    this.x = 0;
    this.y = ABGame.height - ABGame.grid_size;
    
    this.color("#00AA00");
  }
});

Crafty.c("ABExit", {
  init: function() {
    this.addComponent("2D, DOM,Color, Collision")
    this.w = ABGame.grid_size;
    this.h = ABGame.height;
    this.x = ABGame.width - ABGame.grid_size;
    this.y = 0;
    
    if(this.)
    this.color("#00AAFF");
    this.onHit('ABPlayer', function(){
        ABGame.nextScene();
    });
  }
});