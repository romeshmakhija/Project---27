const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var ground,pendulum;

function setup() {
  createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(290,100,210,20);
  pendulum = new Pendulum(315,190,40);
  slingshot = new Slingshot(pendulum.body,{x:295,y:100});

}

function draw() {
  background(0); 
  Engine.update(engine);

  ground.display();
  pendulum.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum.body,{x:mouseX,y:mouseY});
}

