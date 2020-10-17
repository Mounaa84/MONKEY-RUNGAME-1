// creating variable for the objects needed for the game
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime=0;

function preload(){
  
  //pre loading the animations
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 500);
  
  //creating monkey and adding animation
  monkey = createSprite(100,317,20,50);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  //creating moving ground
  ground = createSprite(400,350,800,10);
  ground.veloctyX = -4;
  ground.x = ground.width/2;

  

  
}


function draw() {
  background("lightblue");
  
  console.log(monkey.y);
  

  // giving the monkey gravity
 monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  //programming it to jump
  if(keyDown("space")&& monkey.y > 314) {
        monkey.velocityY = -12;
       
    }
 
  
  // now we are creating the score AKA survival time
  stroke("black");
  textSize(15);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime,400,50);
  
  
  
  //don't forget to call the usermade functions
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

//here we created a function fpr spawning the obstacles for every 300 count
function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,325,10,40);
   obstacle.addImage(obstaceImage);
  obstacle.velocityX = -6;
     
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   
 }
  
  
}

// spwaining banana randomly using this function
function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(120,300));
    banana.addImage(bananaImage);
    banana.scale = 0.1
    banana.velocityX = -3;
    banana.lifetime = 200;
  }

}
