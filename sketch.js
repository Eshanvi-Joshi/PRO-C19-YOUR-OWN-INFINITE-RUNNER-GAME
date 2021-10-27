
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score;
var invisibleGround;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  forestbg = loadImage("forestbg.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
      createCanvas(600,400);
      
      bg = createSprite(300,200,600,400)
      bg.addImage("forest", forestbg)
  monkey = createSprite(50,290,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.2;
 
  ground = createSprite(300,400,600,20);
  ground.x = ground.width /2;
  ground.velocityX = -3;
  
  invisibleGround = createSprite(300,390,600,10);
  invisibleGround.visible = false;
  
  score = 0; 
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {

  background("skyblue");
 // monkey.velocityX = 5
  console.log(monkey.y)
  score = score + Math.round(getFrameRate()/60);
  text("Score: "+ score, 500,camera.position.y-150);
  camera.position.y = monkey.y
 // camera.position.x = monkey.x
  if (ground.x < 300){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space") && monkey.y >= 323.5) {
      monkey.velocityY = -12;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(invisibleGround);
  spawnFood();
  spawnObstacles();
  
  drawSprites();
  
}

function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    
    //add each cloud to the group
    foodGroup.add(banana);
  }
  
}

function spawnObstacles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,120,40,10);
    obstacle.y = 350;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    obstacle.depth = monkey.depth + 1;
    
    //add each cloud to the group
    obstacleGroup.add(obstacle);
  }
  
}





