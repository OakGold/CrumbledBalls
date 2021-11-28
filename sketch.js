var ball;

var leftGround;
var rightGround;
var ground

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

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	};
	
	ball=Bodies.circle(20,20,30,ball_options)
	World.add(world,ball)


	//Create the Bodies Here.
	ground=new Ground(400,725,800,70)
leftGround=new Ground(700,700,20,150)
rightGround=new Ground(780,700,20,150)

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode===32){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}

}


function draw() {
  rectMode(CENTER);
  background(0);
  
ground.display()
leftGround.display()
rightGround.display()

  drawSprites();
 ellipse(ball.position.x,ball.position.y, 20,20)
}



