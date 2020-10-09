
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint 

function preload()
{
	
}

function setup() {
	createCanvas(500, 300);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(120,242.5,40)
	bobObject2 = new Bob(160,242.5,40)
	bobObject3 = new Bob(200, 242.5, 40)
	bobObject4 = new Bob(240,242.5,40)
	bobObject5 = new Bob(280,242.5,40)
	roof = new Roof(200,30,350,25)
	rope1 = new Rope(bobObject1.body, {x:120,y:30})
	rope2 = new Rope(bobObject2.body, {x:160, y:30})
	rope3 = new Rope(bobObject3.body,{x:200, y:30})
	rope4 = new Rope(bobObject4.body,{x:240,y:30})
	rope5 = new Rope(bobObject5.body,{x:280,y:30})



	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(255);
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
 
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-90, y:-50});
	}
}



