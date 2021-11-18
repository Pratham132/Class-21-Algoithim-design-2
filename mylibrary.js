//creating function definition for algorithim for collision detection
function collisionDetection(r1,r2){

    //Algorithim to check collision
    if(r1.x-r2.x>r1.width/2+r2.width/2 ||
      r2.x-r1.x>r1.width/2+r2.width/2 ||
      r1.y-r2.y>r1.height/2+r2.height/2 ||
      r2.y-r1.y>r1.height/2+r2.height/2
      ){
      return true
    }
    else{
      return false
    }
  
  
      
  }
  
  // Function definition for making object bounce off automatically
  function automaticBounce(r1,r2){
   
    // Algorithim for detectin collision when object is moving and stopping the object
    if(r1.x-r2.x<r1.width/2+r2.width/2 &&
      r2.x-r1.x<r1.width/2+r2.width/2 
      
      ){
      r1.shapeColor = "blue"
      r2.shapeColor = "blue"
      r1.velocityX=r1.velocityX*(-1)
      r2.velocityX=r2.velocityX*(-1)
    }
  
    if(r1.y-r2.y<r1.height/2+r2.height/2 &&
      r2.y-r1.y<r1.height/2+r2.height/2){
          r1.velocityY=r1.velocityY*(-1)
          r2.velocityY=r2.velocityY*(-1)
    }
  }
  