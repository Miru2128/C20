var fixedRect, movingRect;
var rectM , rectF;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  rectM = createSprite(900,200,80,30);
  rectM.shapeColor = "green";
  rectM.velocityX = -3;
  rectM.debug = true;

  rectF = createSprite(200,200,80,30);
  rectF.shapeColor = "green";
  rectF.velocityX = 3;
  rectF.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.x=mouseX
  movingRect.y=mouseY;
 // collission algorithm
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 
    &&  fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2){
movingRect.shapeColor="red"
fixedRect.shapeColor = "red";
  }
  else {

    movingRect.shapeColor="green"
    fixedRect.shapeColor = "green";

  }
// BounceOff Algorithm 
  if(rectM.x - rectF.x < rectM.width/2 + rectF.width/2 && rectF.x - rectM.x < rectM.width/2 + rectF.width/2){
    rectF.velocityX = rectF.velocityX * (-1) ;
    rectM.velocityX = rectM.velocityX * (-1) ;
  }

  if(rectM.y - rectF.y < rectM.height/2 + rectF.height/2 && rectF.y - rectM.y < rectM.height/2 + rectF.height/2){
    rectF.velocityY = rectF.velocityY * (-1) ;
    rectM.velocityY = rectM.velocityY * (-1) ;
  }

  drawSprites();
}