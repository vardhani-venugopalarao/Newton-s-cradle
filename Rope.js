class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: { x:this.offsetX, y:this.offsetY}
        }

        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
    }
    display() {
        var point1 = this.rope.bodyA.position;
        var point2 = this.rope.bodyB.position;

        var start1X = point1.x;
        var start1Y = point1.y;

        var start2X = point2.x + this.offsetX;
        var start2Y = point2.y + this.offsetY;

        strokeWeight(4);
        line(start1X,start1Y,start2X,start2Y);
    }
}