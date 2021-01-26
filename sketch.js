var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var divisions=[];
var plinkos = [];

var divisionHeight=300;
var particle;
var score =0;
var count=0;



function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {

  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500      500         500        100        100         100        200         200         200          1000",27,562);
  Engine.update(engine);
 text(mouseX+","+mouseY,mouseX,mouseY);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   

   if(particle!=null){

          particle.display();

          if(particle.body.position.y>530){
            var xPos=particle.body.position.x;
              if(xPos<250) {
                  score=score+500;  
                  particle=null;            
                
              }
              else if(xPos>250 && xPos<486){
                  score=score+100;
                  particle=null;
              }
              else if(xPos>486 && xPos<723){
                  score=score+200;
                  particle=null;
              } else {
                
                 score=score+1000;
                 particle=null;
              }
          }
    }
}

function mousePressed(){

    if(count<=4){
      
      particle= new Particle(mouseX, 10,10,10);
    
          count = count+1;
    }
  
}



