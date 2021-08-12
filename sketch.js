const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  
  ground=new Ground(400,390,800,10);

  box1 =new Box(100,100,50,50);
  box2 =new Box(100,100,50,50);
  box3 =new Box(100,100,50,50);
  box4 =new Box(100,100,50,50);
  box5 =new Box(100,100,50,50);
  box6 =new Box(100,100,50,50);
  box7 =new Box(100,100,50,50);

  ball=new Ball(400,100,30);

  rope=new Rope(ball.body,{x:400,y:50});
  rectMode(CENTER)
  ellipseMode(RADIUS);
  angleMode(RADIANS);
}

function draw() {
  background(255,255,255);
  Engine.update(engine); 
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  ball.display();
  rope.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}