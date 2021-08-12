class Rope {
    constructor(bodyA,pointB){
        var options={
           bodyA:bodyA,
           pointB:pointB,
           "length":250,
           "stiffness":1.2,

        }
        this.rope=Constraint.create (options);
        this.bodyA=bodyA;
        this.pointB=pointB;
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        console.log("hello");
    }
}