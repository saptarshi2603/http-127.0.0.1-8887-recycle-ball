
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject,ground,basket1,basket2,basket3

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);
 rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject=new Paper(200,47,70)
ground = new Ground(600,500,1200,20)
basket1= new Basket(600,450,20,100)
basket2=new Basket(500,490,200,20)
World.add(world,ground);
 basket3=new Basket(400,450,20,100)




  Engine.run(engine)
Engine.update(engine)

}


function draw() {
  
  background(0);
  paperObject.display();
  ground.display();
  basket1.display();
  basket2.display()
  basket3.display()

 drawSprites();
 }
 function keyPressed() {  
if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paperObject.body,paperObject.body.position,
  {x:650,y:-550}); 
 }
 }

