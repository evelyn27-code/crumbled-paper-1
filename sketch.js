
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dumper1,ground1,waste1;
var world;


function setup() {
	createCanvas(1365, 600);
 rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

  dumper1= new dumper(1100,580,200,20);
  dumper2= new dumper(1000,580,30,250);
  dumper3= new dumper(1200,580,30,250);

  ground1 = new Ground(700,594,1365,10);
 waste1 = new Waste(300,580,42)


 Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background("pink");

  dumper1.display();
  dumper2.display();
  dumper3.display();

  ground1.display();
  waste1.display();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(waste1.body,waste1.body.position,{x:85,y:-85});
    }
  
   }

