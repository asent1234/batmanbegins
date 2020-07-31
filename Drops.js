class Drop {  
    constructor(x, y, radius){
        var options = {
            'restitution':0.01,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
        this.radius = radius
        
   }
   display(){
    //fill(34,34,34)
    fill("blue")
    ellipseMode(CENTER);
    ellipse(this.body.position.x, this.body.position.y, this.radius) 
    if(this.body.position.y > height){
        Matter.Body.setPosition(this.body, {x : random(0,800), y: -10}) 
        } 

    
   
   }
}