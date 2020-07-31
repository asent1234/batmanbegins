class Umbrella {  
    constructor(x, y){
        var options = {
            'restitution':0.5,
            'friction':1.0,
            'density':1.0,
            'isStatic' : true
        }
        this.body = Bodies.circle(x, y, 100, options);
        this.radius = 200
	    World.add(world, this.body);
        this.image = loadImage("umbrella (1).png")
        
        
   }
   display(){
    //fill(34,34,34)
    imageMode(CENTER);
    //ellipseMode(CENTER)
    //ellipse(this.body.position.x, this.body.position.y, this.radius) 
    //ellipse(56, 46, 55, 55)  
    image(this.image, this.body.position.x, this.body.position.y, 200, 200)
   }
}