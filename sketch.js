var boy, boy_Img;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	boy_Img = loadImage("Sprites/boy.png");	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height, width, 50);

	tree = new Tree(600, 445, 10, 10);

	stone = new Stone(150,550,30);

	mango1 = new Mango(750, 300, 30);	
	mango2 = new Mango(800, 327, 30);
	mango3 = new Mango(1028, 372, 30);
	mango4 = new Mango(848, 433, 30);
	mango5 = new Mango(867, 243, 30);
	mango6 = new Mango(972, 416, 30);
	mango7 = new Mango(711, 375, 30);
	mango8 = new Mango(662, 344, 30);
	mango9 = new Mango(856, 306, 30);
	mango10 = new Mango(894, 416, 30);
	mango11 = new Mango(932, 324, 30);
	mango12 = new Mango(749, 436, 30);

	boy = Bodies.rectangle(200, 625, 110, 90, {isStatic:true});

	sling = new Sling(stone.body, {x:150,y:600});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(75,255,255);

  text("PRESS SPACE TO THROW AGAIN",100,100);

  imageMode(CENTER);
  image(boy_Img, boy.position.x, boy.position.y, 175, 175);

  Engine.update(engine);
  
  ground.display(); 

  tree.display(); 

  stone.display();

  sling.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);

  drawSprites();
 
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}
  
function mouseReleased() {
	sling.fly();
}

function detectCollision(lStone, lMango){
  mangoPosition = lMango.body.position;
  stonePosition = lStone.body.position;

  var distance = dist(stonePosition.x, stonePosition.y, mangoPosition.x, mangoPosition.y);
      if(distance <= lMango.r + lStone.r){
        Matter.Body.setStatic(lMango.body, false);
    }
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:150,y:600});
    sling.attach(stone.body);      
  }
}
