
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, stone,ground, launcherObject;
var mango1,mango2,mango3;
var boy,boyImg;

function preload()
{
	boyImg = loadImage("Images/boy.png");
}

function setup()
 {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy = createSprite(200,615);
	boy.addImage(boyImg);
	boy.scale = 0.1;
	tree = new Tree(650,500,30,300);
	ground = new Ground(400,670,800,20);
	mango1 = new Mangoes(650,400,15);
	mango2 = new Mangoes(600,400,15);
	mango3 = new Mangoes(650,370,15);
	stone = new Stone(150,550,20);
	shot = new Shot(stone.body,{x:150,y:550});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  tree.display();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  stone.display();
  shot.display();
  detectcollision(stone,mango1);
  detectcollision(stone,mango2)
  
  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    shot.fly();
}
function detectcollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:150,y:550})
		shot.attach(stone.body);
	}
}