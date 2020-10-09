class Bob {
    constructor(x, y, radius) {
        var options1 = {
            isStatic:false,
            //restitution:0.3,
            //friction:0.5,
            density:0.5
        }
        this.body = Matter.Bodies.circle(x,y,radius,options1);
        this.radius = radius;      
        World.add(world,this.body);
    

    } 
display() {
   var pos= this.body.position
   var angle  = this.body.angle
   push();
   translate(pos.x,pos.y)
   //rotate(angle)
   fill("red")
   ellipseMode(RADIUS);
   ellipse(0,0,this.radius, this.radius)
   pop();
}
};