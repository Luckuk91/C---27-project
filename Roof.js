class Roof {

  constructor(x,y,width,hight) {
      this.body = Bodies.rectangel(x,y,width,hight,{isStatic:true});
      this.width = width;
      this.hight = hight;
      World.add(world,this.body);

}

display(){
    push();
    rectMode(CENTER);
    FILL(128,128,128);
    RECT(this.BODY.positions.X,this.body.positions.y,this.width,this.hight);
    pop();
}
}