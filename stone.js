class Stone {
    constructor(x, y, r) {
      var options = {
    
        'restitution':0,
          'friction':2,
          'density' : 3
      }
      
      this.x = x
      this.y = y
      this.r = r
    //  this.diameter = 50
      
 //this.image = loadImage("ball.png");
      this.body = Matter.Bodies.circle(x, y, (this.r)/2, options);
      

      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      
     var angle = this.body.angle;
    // rotate(angle)
     
     //push();
      //translate(pos.x, pos.y);
     
    
      fill("grey");
     ellipse(pos.x, pos.y , 40,40);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.diameter, this.diameter);
     //pop();
    }
  };
 
  