/*
 * Define a custom player component
 */
Crafty.c("ABPlayer", {
     init: function() {
         this.addComponent("2D, DOM, Color, Collision, Multiway, Keyboard, Gravity, Jumper, SpriteAnimation, sandSpr")
         this.w = 75;    // width
         this.h = 75;    // height
         this.color("#FF0000");
         this.x = 10;
         this.y = ABGame.height - this.h - ABGame.grid_size;
         this.multiway(4, {LEFT_ARROW: 180, RIGHT_ARROW: 0 });
                  
         /*
          * Player state
          */
         this.max_hp = 1000.0;
         this.cur_hp = this.max_hp;
         
         this.health_bar = Crafty.e("ABPlayerHealth");
         
         this.flipped = false;         
         this.sandTickRate = 2;
         
         
         this.gravity("ABPlatform");
         this.jumper();
        
         this.bind("EnterFrame", this._playerEnterKeyFrame);
         
         this.bind("Jumped", this.flipp);
         
         this.origin(this.w / 2, this.h / 2);
         
         this.animate('SandTick', 0, 0, 10);
         //this.animate('SandTick',30,0, -1);
    },

    /* 
     *  Player entity update loop
     */
    _playerEnterKeyFrame: function () {
            
      this.harm(this.sandTickRate);
      
      
      var hpRatio = this.cur_hp / this.max_hp;
      this.health_bar.setHp(hpRatio);      
      
      var frameSize = this.w;
     this.__coord[0] = Math.round(hpRatio * 10) * frameSize;
           
      if(this.cur_hp <= 0) {
        ABGame.gameOver();
      }
    },
     
     
     harm: function(harmVal) {
       this.cur_hp -= harmVal;
     },
     
     flipp: function() {
       this.flipped = !this.flipped;
       //invert HP
       this.cur_hp = (this.max_hp - this.cur_hp);
       
       //this.rotation = (this.flipped)?180:0;
     },
     
     
     toString: function() {
       return "ABPlayer";
     }
});




Crafty.c("ABPlayerHealth", {
  
  init: function() {
    this.addComponent("2D, DOM, Color");
    
    this.max_width = 300;
    this.w = this.max_width;
    this.h = 20;
    this.x = 15;
    this.y = 15;
    this.z = 100;
    
    this.color("#00FF00")
    
    var border = 2;
    Crafty.e("2D, DOM, Color").attr({w: this.w+2*border, h: this.h+2*border, x: this.x-border, y: this.y-border, z: 1}).color("#000000");
  },
  
  setHp: function(hpRatio) {
    this.w = hpRatio * this.max_width;
  },
  
  toString: function() {
    return "hpbar";
  }
  
});







/**
 *
 */
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
        this.trigger('Jumped');
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


 