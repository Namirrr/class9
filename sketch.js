var box
var box2

function setup() {
  createCanvas(400,400);
  box = createSprite(200, 200, 40, 40)
  box.shapeColor = "white"
  box2 = createSprite(200, 100, 40, 40)
  
}

function draw() 
{
  
  background("#75daff");
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x + 5
  };
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x - 5
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y - 5
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y + 5
  }
  if(keyIsDown("68")){
    box2.position.x = box2.position.x + 5
  };
  if(keyIsDown("65")){
    box2.position.x = box2.position.x - 5
  }
  if(keyIsDown("87")){
    box2.position.y = box2.position.y - 5
  }
  if(keyIsDown("83")){
    box2.position.y = box2.position.y + 5
  }

  drawSprites();
}




