class Rope {
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
      this.rope = Matter.Constraint.create(options);
      World.add(world,this.rope);

    }
    display(){
        point1 = this.rope.bodyA.position;
        point2 = this.rope.bodyB.position;

        strockWeight(2);

        var Anchor1X = point1.x;
        var Anchor1X = point1.y;

        var Anchor2X = point2.x + this.offsetX;
        var Anchor2X = point2.y + this.offsetY;

      line(achore1X,Achore2X,Achore2Y);
    }
   
}