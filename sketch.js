
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	rect1 = createSprite(650,650,200,20);
	 rect1.shapeColor="red";

	 rect2 = createSprite(550,610,20,100);
	 rect2.shapeColor="red";
	 
	 rect3 = createSprite(750,610,20,100);
	 rect3.shapeColor="red";

	 groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	ground = Bodies.rectangle(width/2, 610, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 rect3 = Bodies.rectangle(700, 610, 20, 100 , {isStatic:true} );
	 World.add(world, rect3);

	 rect1 = Bodies.rectangle(500, 610, 20, 100 , {isStatic:true} );
	 World.add(world, rect1);

	paper = new Paper(50,500,20);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
	rectMode(CENTER);
    background(0);

     paper.display();
  
     drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-35});
	}
}