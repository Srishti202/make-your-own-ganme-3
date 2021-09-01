var backgroundImg
var spacecraft , spacecraftImg;
var  alienImg , moonrockImg , meteorImg;
var obstacleGroup;
var laserGroup;
var score = 0;
function preload(){
  backgroundImg =loadImage("Imgs/background.jpg")
  alienImg = loadImage("Imgs/alien.jpg")
  moonrockImg = loadImage("Imgs/moonrock.png")
  meteorImg = loadImage("Imgs/meteor.png")
}

function setup() {
  createCanvas(800,700);
  bg = createSprite(400,350,10,10);
  bg.addImage(backgroundImg);
  bg.scale=4;
  spacecraft = createSprite(400, 200, 50, 50);
obstacleGroup= new Group();
 laserGroup= new Group();
}

function draw() {
  background("black");  
  bg.velocityY = 6;
  if(bg.y>700){
    bg.y=350
  }
 if (keyDown('UP_ARROW')){
   spacecraft.y = spacecraft.y-20
 }
 if (keyDown('DOWN_ARROW')){
  spacecraft.y = spacecraft.y+20
}

if (keyDown('LEFT_ARROW')){
 spacecraft.x = spacecraft.x-20
}

if (keyDown('RIGHT_ARROW')){
 spacecraft.x = spacecraft.x+20
}
obstacles();
if(keyDown('SPACE')){
lasers();
}

drawSprites();
text("Score : "+ score,700,50);
if(obstacleGroup.isTouching(spacecraft)){
  text("GAME OVER",400,350)
}
if(laserGroup.isTouching(obstacleGroup)){
  laserGroup.destroyEach()
  obstacleGroup.destroyEach()
  score = score+100;
}
}
function obstacles (){
  if(frameCount%70===0){
    obstacle = createSprite(200,-50,30,30);
obstacle.x = Math.round(random(50,750))
obstacle.velocityY= 10
var r = Math.round(random(1,3));
switch(r){
  case 1:obstacle.addImage(meteorImg);
  obstacle.scale =0.3
  break;
  case 2: obstacle.addImage(alienImg);
  obstacle.scale=0.2
  break;
  case 3 : obstacle.addImage(moonrockImg);
  obstacle.scale=0.3
  break;
  default:break 
}
obstacleGroup.add(obstacle)
  }
}
function lasers(){
  laser = createSprite(spacecraft.x , spacecraft.y-50,10,100);
  laser.shapeColor= "green"
  laser.velocityY = -12
  laserGroup.add(laser);
}
