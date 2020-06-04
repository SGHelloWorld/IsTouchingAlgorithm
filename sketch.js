var rect1;
var rect2;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  rect1=createSprite(400,200,50,100);
   rect2=createSprite(100,200,100,50);
  rect1.debug=true;
  rect2.debug=true;
}

function draw() {
  background(255,255,255);  
 rect2.x=World.mouseX;
 rect2.y=World.mouseY;
  if(Math.abs(rect1.x-rect2.x)<rect2.width/2+rect1.width/2&&Math.abs(rect1.y-rect2.y)<rect2.height/2+rect1.height/2)
  {
rect1.shapeColor="red";
rect2.shapeColor="red";
  }
  else
  {
    rect1.shapeColor="green";
    rect2.shapeColor="green";
  }
  drawSprites();
}