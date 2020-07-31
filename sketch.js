
var ground, gameState
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ranl
var mdrops, dropss;
var lightningimg
var lightning
function preload(){
    lightningimg = loadImage("light.png", 1000, 1000)
}
function setup() {
	engine = Engine.create();
	world = engine.world
    Engine.run(engine);
    canvas = createCanvas(800, 800)
    umbrella = new Umbrella(400,680)
    mdrops = 200
    dropss = [];
    for(var i=0; i < mdrops; i++){ 
        dropss.push(new Drop(random(0,400), -10, 10)); 
}
ranl = Math.round(random(40, 80))

}

function draw() {
    Engine.update(engine)
    background("black")
    umbrella.display();
    for(var i=0; i < dropss.length; i++){
        dropss[i].display();
    }
    if(frameCount % ranl === 0){
        lightning = createSprite(random(0,800), 10, 1,1)
        lightning.lifetime = 30
        lightning.addImage("light", lightningimg)
        ranl = Math.round(random(40, 80))
    }
    if(lightning){
        drawSprites();
    }
}
