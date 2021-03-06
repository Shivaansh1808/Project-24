const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBody,groundBody,binBody;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	paperBody = new Paper();
	groundBody = new Ground();
	binBody = new Bin();
	
	Engine.run(engine);

	
}


function draw() {
  rectMode(CENTER);
  background(0);

  paperBody.display();
  groundBody.display();
  binBody.display();

	fill("orange");
	textSize(20);
	text("Up Arrow  =  Apply Force Upwards", 100, 300);
	text("Down Arrow  =  Apply Force Downwards", 100, 330);
	textSize(30);
	text("Over Here", 590, 300);
	text("!", 650, 330);
	text("!", 650, 340);
	text("!", 650, 350);
	text("!", 650, 360);
	text("!", 650, 370);
	text("!", 650, 380);
	text("!", 650, 390);
	text("!", 650, 400);
	text("!", 650, 410);
	text("!", 650, 420);
	text("!", 650, 430);
	text("!", 650, 440);
	text("!", 650, 450);
	text("!", 650, 460);
	text("!", 650, 470);
	text("!", 650, 480);
	text("!", 650, 490);
	text("!", 650, 500);
	text("!", 650, 510);
	text("!", 650, 520);
	text("!", 650, 530);
	text("!", 650, 540);
	text("!", 650, 557);
	text("!", 650, 569);
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paperBody.body, paperBody.body.position, {x: 10, y: -10});

	}
	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paperBody.body, paperBody.body.position, {x: -10, y: 10});

	}
}

