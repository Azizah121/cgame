
var block;
var floor;
function preload(){
bc=loadImage("car1.png");
bg=loadImage("bg.png");
}
function setup(){
  createCanvas(400,400)
 block=createSprite(200,360,40,40);
 block.addImage(bc);
 floor=createSprite(200,550,400,60);

}
// textSize(20);
// fill("black");
// text("Distance: "+block.y,50,100);

function draw(){
  background(bg);
  block.shapeColor=("red");
  floor.shapeColor=("green");
  camera.position.x=width/2;
camera.position.y=block.y;
  if(keyDown(UP_ARROW)){
    block.velocityY=-7;
  }
    if(keyDown(DOWN_ARROW)){
    block.velocityY=7;
  }
 
 drawSprites();
}
