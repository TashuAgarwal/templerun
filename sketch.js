var girl, temple, girlimage1, girlimage2, girlimage3, templeimage;
var edges,coin,coinimage,obstacle1, obstacle2, obstacle3;
var obstacleimage1,obstacleimage2,obstacleimage3;
var coingroup,invisibleground;
var score = 0;

function preload(){
girlimage1=loadAnimation("girl1.png","girl2.png","girl3.png")
//girlimage2=loadImage()
//girlimage3=loadImage("running-girl-iamges-main/girl3.png")
templeimage = loadImage("bg1.jpg")
coinimage=loadImage("coin.png")
obstacleimage1 = loadImage("monster.png")
}

function setup(){
createCanvas(1000,700)

temple = createSprite(500,350,50,50);
temple.addImage(templeimage)

girl = createSprite(600,550,50,50)
girl.addAnimation("running",girlimage1)

edges=createEdgeSprites()
temple.scale = 3

temple.velocityY = 4


invisibleground=createSprite(500,650,1000,20)
invisibleground.visible = false;
coingroup= new Group()
}

function draw(){
//background(bg)
 spawncoins()
 


 if(girl.isTouching(coingroup)){
     score=score+10
     coingroup.destroyEach();
 }
 
if(keyDown(LEFT_ARROW)){
    girl.x=girl.x-5
}

if(keyDown(RIGHT_ARROW)){
    girl.x=girl.x+5
}

if(keyDown(UP_ARROW)){
    girl.y=girl.y-5
}

if(keyDown(DOWN_ARROW)){
    girl.y=girl.y+5
} 
//obstacles();

if(keyDown("space")){
    girl.velocityY =-15
}

girl.velocityY=girl.velocityY+0.8

if(temple.y > 500){
    temple.y = 200;
}

girl.collide(invisibleground)
drawSprites()
    
fill("red")
textSize(25);
text("score :"+score, 300,300);
} 

function spawncoins(){
    if(frameCount%45==0){
        for(i = -20; i <=30;i=i+45){
        coin=createSprite(i,i,20,20)
    coin.addImage(coinimage)
    coin.velocityY=2
    coin.scale=0.3}
    coingroup.add(coin)
    }
 }

function obstacles(){
    if(frameCount%80==0){
        for(i = -20; i <=30;i=i+45){
        obstacle1=createSprite(i,i,20,20)
    obstacle1.addImage(obstacleimage1)
 }
}
}