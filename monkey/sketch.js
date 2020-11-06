
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var survivalTime=0;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}




function setup() {
  
  monkey=createSprite(70,350,10,10);
  monkey.addAnimation("jnxn",monkey_running);
  monkey.scale=0.1;
  
  
  
  
  
  ground=createSprite(100,385,800,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  
  obstaclegroup=createGroup();
  banagroup=createGroup();
  score = 0
}


function draw() {
  background("white");
 
   ground.x=ground.width/2
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  if(banagroup.isTouching(monkey)){
   banagroup.destroyEach()
    score=score+2
  }
  if(obstaclegroup.isTouching(monkey)){
    score=score=0
    survivalTime= survivalTime+0
  }
  if(banagroup.isTouching(monkey)){
    banagroup.destroy();
    monkey.scale=0.1
  }
  if(obstaclegroup.isTouching(monkey)){
    survivalTime=survivalTime=0
  }
  if(banagroup.isTouching(monkey)){
      banagroup.destroyEach();
    score = score + 2;
    }
    switch(score){
        case 10: monkey.scale=0.12;
                break;
        case 20: monkey.scale=0.14;
                break;
        case 30: monkey.scale=0.16;
                break;
        case 40: monkey.scale=0.18;
                break;
        default: break;
    }
   monkey.velocityY = monkey.velocityY+0.8;
  monkey.collide(ground)
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50)
  text("score: "+score,300,100)
  
  
  
  
 o();
  b();
  drawSprites(); 
}
function o() {
  if(frameCount%300=== 0){
    obstacle=createSprite(400,361,10,10);
    obstacle.addImage(obstacleimage)
    obstacle.scale=0.1   
    obstacle.velocityX=-4; 
    obstaclegroup.add(obstacle)
    obstacle.lifetime=100;
  }
}
function b() {
  if(frameCount%100=== 0){
    banana=createSprite(400,200,10,10);
  banana.addImage(bananaimage)
  banana.scale=0.1;
    banana.velocityX=-4;
    banagroup.add(banana);
    banana.y=Math.round(random(100,200));
    banagroup.add(banana);
    banana.lifetime=100
  }
  
}




