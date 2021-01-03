
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var boy,boyImage,backImage,mangos
function preload()
{
	boyImage=loadImage("Plucking Mangoes/boy.png")
}

function setup() {
	createCanvas(9000, 5000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1= new Mango(740,100,50);
	mango1.scale=0.1
	mango2= new Mango(600,100,50);
	mango3= new Mango(760,150,50);
	mango4= new Mango(600,250,50);
	tree=new Trees(600,600,70,150);
	surface=new Grounds(400,1200,10000,20);
	rock=new Stone(500,50,50);
	slingKing = new Slingshot(rock.body,{x:200,y:100});
	boy=createSprite(160,1070,20,20);
	boy.scale=0.1
	boy.addImage("boy",boyImage)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("orange");
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango2.display();
  surface.display();
  rock.display();

  detectCollision(rock,mango1);
  detectCollision(rock,mango2);
  detectCollision(rock,mango3);
  detectCollision(rock,mango4);

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(rock.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingKing.fly();
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(rock.body,{x:235,y:420})
		launcherObject.attach(rock.body);
	}
}
function detectCollision(rock,mangos){
mangoBodyPosition=mangos.body.position;
rockBodyPosition=rock.body.position;

var distance=dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

if(distance<=mangos.r+rock.r){
	Matter.Body.setStatic(mangos.body,false)
}
}

