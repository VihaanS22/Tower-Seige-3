class Sling{
    constructor(bodyA, pointB){
        var options = {
        
         stiffness: 0.007,
            length: 20,
         //  damping: 0.1,
           bodyA: bodyA,
           pointB: pointB,
        }
        this.pointB = pointB

        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body
        
        
        }

    fly(){

        this.sling.bodyA = null;

    }

    display(){
      if(this.sling.bodyA){
      stroke ("black")
      strokeWeight(4)
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}  
}