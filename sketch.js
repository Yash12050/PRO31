const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var ground;
function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,800,480,5);

  for(var k = 0; k <=width; k = k+80){
    divisions.push(new division(k,height-150,10,300));
  }
  for(var j = 0; j <= width; j=j+50){
    plinkos.push(new Plinko(j,75));
  }
  for(var j = 15; j<=width-10;l=j+50){
    plinkos.push(new Plinko(j,175));
  }
  for(var j = 0; j <= width; j=j+50){
    plinkos.push(new Plinko(j,275));
  }
  for(var j = 15; j<=width-10;l=j+50){
    plinkos.push(new Plinko(j,375));
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10));
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  
  for (var j = 0; j< particles.length; j++){
    particles[j].display();
  }
  for (var k = 0; k<divisions.length;k++){
    divisions[k].display();
  }
  for(var j = 0; j< plinkos.length; j++){
    plinkos[j].display();
  }

  ground.display();
  
}