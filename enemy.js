class Enemy{
    constructor(x, y, width, height) {
      var options = {
       
        'restitution':0.8,
          'friction':1.0,
          'density' : 1.0
          
      }
      
  
     
      
  this.image = loadImage("enemy.png");
      this.body = Matter.Bodies.rectangle(x, y, width,height, options);
      this.x = x
      this.y = y
     this.widht = width
      this.height = height
      this.visibility = 255
  
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
      var angle = this.body.angle;
  
      if(this.body.speed < 5){ 
        push(); 
        translate(pos.x, pos.y); 
        rotate(angle); 
       /* rectMode(CENTER); 
        rect(0,0,this.width, this.height); 
        */
        imageMode(CENTER);
      image(this.image, 0, 0, this.height, this.height,  this.width, this.width);
        pop(); 
      } else{ 
        World.remove(world, this.body); 
        push(); 
        translate(pos.x, pos.y); 
        this.visibility = this.visibility - 5; 
        tint(255,this.visibility); 
        image(this.image, 0, 0, this.height, this.height,  this.width, this.width);
        pop(); 
      }
  
      
      }
      Score(){
  
        if (this.visibility<0 && this.visibility>= -1005) {
          score++
        }
        
        }
      
  }
  
  