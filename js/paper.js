class Paper{
    constructor(x,y,width,height){
        var options = {
            //'frictionAir':0,
            'friction':0.5,
           // 'frictionStatic':1,
           // 'inertia': Infinity,
           'isStatic':false,
            'restitution':1.5,
            'density':1.2
        }
        this.paper = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        this.image = loadImage("assets/paper.png");
        World.add(world,this.paper);
        
        
    }
    display(){
 
//         push();
//         translate(this.paper.position.x, this.paper.position.y);
//        // imageMode(CENTER);
//        // image(this.image, 0, 0,this.width, this.height);
//        rectMode(CENTER)
// 			strokeWeight(3);
// 			fill(255,0,255)
// rect(0,0,this.width, this.height);
//        pop();

      rect(this.paper.position.x, this.paper.position.y,this.width, this.height);
    }
}