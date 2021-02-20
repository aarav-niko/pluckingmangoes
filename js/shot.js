class Shot{
    constructor(bodyA, pointB){
        var option={
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.01,
            length: 5
        }
        this.pointB = pointB;
        this.shot = Constraint.create(option);
        World.add(world, this.shot);
    }
    attach(body){
		this.shot.bodyA=body;
	}
    
    fly(){
        this.shot.bodyA = null;
    }
    display(){
        if(this.shot.bodyA){
        var pointA = this.shot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}