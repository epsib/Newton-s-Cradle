class Rope{
     constructor(bodyA, pointB){
        var options = {
             bodyA: bodyA,
             pointB: pointB,
             stiffness:0.03,
             length:199
         }
         this.chain = Constraint.create(options)
         this.pointB = pointB
         World.add(world,this.chain)
     }
display(){
    var pointA = this.chain.bodyA.position
    var pointB = this.pointB
    strokeWeight(2)
    line(pointA.x, pointA.y, pointB.x, pointB.y)

}
}