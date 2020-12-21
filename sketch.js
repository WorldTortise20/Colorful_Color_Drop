const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
var engine, world;

var particles = [];
var plinkos = [];
var divides = [];
var divideHeight = 300;


function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,800);

  ground = new Ground (width/2,790,width,20);
  d1 = new Divide(400,400,20,100);
  y1 = new Roll (300,400,10);
  w1 = new Wall (300,500)

  for(var k = 0; k<=width; k= k+80){
    divides.push(new Divide(k,height-divideHeight/2,10,divideHeight));
  }

  for(var i = 15; i<=width; i= i+55){
    plinkos.push(new Wall(i,75));
  }

  for(var l = 10; l<=width; l= l+49){
    plinkos.push(new Wall(l,175));
  }

  for(var m = 15; m<=width; m= m+55){
    plinkos.push(new Wall(m,275));
  }

  for(var n = 10; n<=width; n= n+49){
    plinkos.push(new Wall(n,375));
  }

  
}

function draw() {
  Engine.update(engine);
  background("black");  
  sR();
  ground.display();
  //d1.display();
  //y1.display();
  //w1.display();
  
  for(var a = 0; a<divides.length; a++){
    divides[a].display();
  }
  
  for(var b = 0;b<plinkos.length;b++){
    plinkos[b].display();
  }

  for(var c = 0;c<plinkos.length;c++){
    plinkos[c].display();
  }

  for(var d = 0;d<plinkos.length;d++){
    plinkos[d].display();
  }
  
  for(var e = 0;e<plinkos.length;e++){
    plinkos[e].display();
  }
  
  for(var f = 0;f<particles.length;f++){
    particles[f].display();
  }
  
  drawSprites();
}

function sR(){
  if(frameCount%40===0){
    particles.push(new Roll(random(40,380),10,10))
  }
}