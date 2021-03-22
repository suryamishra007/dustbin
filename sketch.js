
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papper,dustbin,ground;
var dustbinI,db

function preload()
{
	dustbinI = loadImage("tdb.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	db = createSprite(550,525,5,5);
	db.addImage(dustbinI);
	db.scale = 0.2;


	papper = new Papper(200,500,50);
	ground = new Dustbin(400,600,800,20)

	dustbin1 = new Dustbin(500,525,20,100);
	dustbin2 = new Dustbin(600,525,20,100);
	dustbin3 = new Dustbin(550,575,125,20);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  papper.display();
  ground.display();
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  
  drawSprites();


}
function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(papper.body,papper.body.position,{x:70,y:-100})
	}
}



