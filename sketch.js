var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var ground1,chain,chain2,chain3,chain4,chain5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
   bobObject1=new Bobs(400,400)
   bobObject2=new Bobs(420,400)
   bobObject3=new Bobs(440,400)
   bobObject4=new Bobs(460,400)
   bobObject5=new Bobs(480,400)
 ground1=new Ground(470,200,200,10)
 
 

chain=new Rope(bobObject1.body,ground1.body,40*-2,0)
chain2=new Rope(bobObject2.body,ground1.body,40*-1,0)
chain3=new Rope(bobObject3.body,ground1.body,0,0)
chain4=new Rope(bobObject4.body,ground1.body,40*1,0)
chain5=new Rope(bobObject5.body,ground1.body,40*2,0)
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  ground1.display()
  chain.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  
  bobObject4.display()
  bobObject5.display()
  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:+85,y:-85})
  }
}



