var fixedRect, movingRect;
var gameobject1;
function setup() {
  createCanvas(800,800);

  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);
  gameobject1 = createSprite(100,300,50,50);
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

}

function draw() {
  background("yellow"); 
  
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY;
  
  if(istouch(movingRect,fixedRect)) {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else {
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }

  if(istouch(movingRect,gameobject1)) {
      gameobject1.shapeColor="white";
  }
  else {
    gameobject1.shapeColor="grey";
  }

  drawSprites();
}






