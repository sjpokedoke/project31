const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
	createCanvas(480, 800);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(240, 795, 480, 10)
  for (var k = 0; k <=width; k=k+80){
    divisions.push(new Ground(k, height-divisionHeight/2,10,divisionHeight))
  }
  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j=j+50) {
    plinkos.push(new Plinko(j, 275));
  }
  for (var j = 15; j <= width-10; j=j+50) {
    plinkos.push(new Plinko(j, 375));
  }


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  for(var k = 0; k<divisions.length; k++){
    divisions[k].display()
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  for(var j = 0; j<plinkos.length; j++){
    plinkos[j].display()
  }
  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-10, width/2+10), 11, 10))
  }
  for(var j = 0; j<particles.length; j++){
    particles[j].display()
  }
}



