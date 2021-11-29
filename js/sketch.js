const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper;

//function preload(){
//    paper.addImage("assetes/paper.png")
//}
function setup(){
    
    var canvas = createCanvas(800,400);
    
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(400,380,900,20)
    
    Engine.run(engine)
    //console.log(paper)
}

function draw(){
    background(0);
   // Engine.update(engine);
    ground.display();
    trash.display();
    dustbinObj1.display();
    dustbinObj2.display();
    dustbinObj3.display();

}

function keyPressed(){
    if(keyCode === 32){
     console.log(trash)
        Matter.Body.applyForce(trash.body,trash.body.position,{x:0,y:0})
    }
}
