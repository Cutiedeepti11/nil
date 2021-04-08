const Engine = Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine , world ;
var ground ;
var ball;

function setup() {
  createCanvas(800,400);
  engine= Engine.create();
  world = engine.world;
var options={
  isStatic:true
}

  ground =Bodies.rectangle(100 ,350, 1500 ,10,options);
  World.add(world,ground);
  var BallOption={
    restitution:100.0
  }
ball=Bodies.circle(40,40,10,BallOption)
World.add(world,ball)



  console.log(ground);


  
}
function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1500,10)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10)
};