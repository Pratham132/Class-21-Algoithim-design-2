var r1,r2,r3,r4,r5,r6


function setup() {
  createCanvas(800,400);
  //creating sprites
  r1=createSprite(200,120,50,100);
  r2=createSprite(400, 350, 50, 50);
  r3=createSprite(300, 100, 50, 50);
  r4=createSprite(150, 200, 50, 50);
  r5=createSprite(250, 300, 50, 50);
  r6=createSprite(350, 275, 50, 50);
  r5.velocityX=2
  r6.velocityX = -2
  r5.debug=true
  r6.debug = true
  // calculating distance between r1 and r2
  console.log(r1.x-r2.x)
  console.log(r1.width/2+r2.width/2)
  //r2.velocityX = -3
}

function draw() {
  background("green"); 
  // moving r2 using mouse 
   r2.x=mouseX
   r2.y=mouseY
  //console.log(r1.x-r2.x)
  //console.log(r1.width/2+r2.width/2)
  //r2.velocityx = -3
    if(collisionDetection(r2,r3)){
        r2.shapeColor = "blue"
        r3.shapeColor = "blue"
    }
    else{
        r2.shapeColor="black";
        r3.shapeColor = "black";
    }
    automaticBounce(r5,r6)
  drawSprites();
}





