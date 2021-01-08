var mr,fr;
function setup() {
 createCanvas(800,400);
 fr = createSprite(400, 200, 80, 30);
 fr.shapeColor = "green";
 fr.debug = true;
 fr.velocityX = -3;
 
 mr = createSprite(100, 200, 80, 30);
 mr.shapeColor = "green";
 mr.debug = true;
 mr.velocityX = 3;
}

function draw() {
  background(0);
 // mr.x = mouseX;
 // mr.y = mouseY; 
if (mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<mr.width/2+fr.width/2&&mr.y-fr.y<mr.height/2+fr.height/2&&fr.y-mr.y<mr.height/2+fr.height/2){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else {
    fr.shapeColor = "green";
    mr.shapeColor = "green";  
  } 
if (mr.x-fr.x<mr.width/2+fr.width/2&&fr.x-mr.x<mr.width/2+fr.width/2){
    mr.velocityX = mr.velocityX*(-1);
    fr.velocityX = fr.velocityX*(-1);
}
if (mr.y-fr.y<mr.height/2+fr.height/2&&fr.y-mr.y<mr.height/2+fr.height/2){
  mr.velocityY = mr.velocityY*(-1);
  fr.velocityY = fr.velocityY*(-1);
}  
  drawSprites();
}