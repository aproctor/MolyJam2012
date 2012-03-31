/*
 * Define a custom player component
 */
Crafty.c("ABPlayer", {
     init: function() {
         this.addComponent("2D, DOM, Color, Collision, Multiway, Keyboard, Gravity, Jumper")
         this.w = 32;    // width
         this.h = 32;    // height
         this.color("#FF0000");
         this.x = 100;
         this.y = 100;
         this.multiway(4, {LEFT_ARROW: 180, RIGHT_ARROW: 0 });
         
         this.gravity("ABPlatform");
         this.jumper();
     },
     
     
     harm: function() {
       
     },
     
     
     toString: function() {
       return "ABPlayer";
     }
});

Crafty.c("Jumper", {
    init: function() {
      this.requires("Keyboard");
      this.jumpSpeed = 6;
      this._jumping = false;
      this._jy = 0;
      this.hangtime = 500;
      this._anti = null;
    },
     
    jumper: function(comp, jumpSpeed) { 
      this._anti = comp || this._anti;
      
      this.jumpSpeed = jumpSpeed || this.jumpSpeed;
      
      this.bind("KeyDown", function() {
        if(this.isDown("UP_ARROW") || this.isDown("W") || this.isDown("SPACEBAR")) {
          this.jump();
         }
      });
      
      /*
       * Update keyframes
       */
      this.bind("EnterFrame", this._jumperEnterKeyFrame);
    },
    
    _jumperEnterKeyFrame: function () {
			if (this._jumping === true) {
				this._jy = this.jumpSpeed;
				this.y -= this._jy;
			} else {
  			this._jy = 0;
  			return;
  		}

      /* Project into the future to see if this jump will hit a platform */
  		var pos = this.pos();
  		pos._y--;
  		pos.x = pos._x;
  		pos.y = pos._y;
  		pos.w = pos._w;
  		pos.h = pos._h;
  		
  		var hit = false;
  		var q = Crafty.map.search(pos);
  		for (var i = 0; i < q.length; i++) {
  		  var obj = q[i];
  		  
  			//check for an intersection directly below the player
  			if (obj !== this && obj.has(this._anti) && obj.intersect(pos)) {
  				hit = obj;
  				hit.color("#FFFFFF")
  				break;
  			}
  		}
  		
  		if(hit) {
  		  this.stopJump();
  		}
		},
    
    jump: function() {
      if(this._falling === false && this._jumping === false) {
        this._jumping = true;
        var self = this;
        setTimeout(function(){self.stopJump();}, this.hangtime);
      }
    },
    
    stopJump: function() {
      this._jumping = false;
      this._gy = 0;
    },
    
		toString: function() {
		  return "Jumper";
		}
});


 