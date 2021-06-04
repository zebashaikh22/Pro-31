const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
  


var particles = [];
var plinkos = [];


var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,780,800,20);

    div = new Divisions(0, 765, 5, 600);
    div1 = new Divisions(100, 765, 5, 600);
    div2 = new Divisions(200, 765, 5, 600);
    div3 = new Divisions(300, 765, 5, 600);
    div4 = new Divisions(400, 765, 5, 600);
    div5 = new Divisions(500, 765, 5, 600);
    div6 = new Divisions(600, 765, 5, 600);
    div7 = new Divisions(700, 765, 5, 600);
    div8 = new Divisions(795, 765, 5, 600);

    for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50){
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50){
       plinkos.push(new Plinko(j,375));
    } 
}
 


function draw() {
  background("black");
  textSize(20)
  //text("Score : "+score,20,30);
  Engine.update(engine);

  ground.display();
 
   div.display();
   div1.display();
   div2.display();
   div3.display();
   div4.display();
   div5.display();
   div6.display();
   div7.display();
   div8.display();


   for (var i = 0; i < plinkos.length; i++) {
     plinkos[i].display();
   }

   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
   for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }

   
}