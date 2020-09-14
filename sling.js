class Sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    attach(bodyA){
        this.sling.bodyA = bodyA;
    }

    display(){
        var pointA = this.sling.bodyA;
        var pointB = this.pointB;
      
        strokeWeight(4);
        stroke(0);
        line(pointA, pointB); 
    }
    
}

