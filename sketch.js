var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var steel,iron,bronze;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	steel=createSprite(400,655,200,20);
	steel.shapeColor="red";
	iron=createSprite(300,620,15,100);
	iron.shapeColor="red";
	bronze=createSprite(500,620,15,100);
    bronze.shapeColor="red";
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 20, { isStatic:true});
	World.add(world, packageBody);
	packageSprite=createSprite(packageBody.position.x,packageBody.position.y,10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}



