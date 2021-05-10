var bgImg;
var cat;
var catimg1,catimg2,catimg3,catimg4;
var mouseimg1,mouseimg2,mouseimg3,mouseimg4;
var mouse


function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catimg1 = loadImage("images/cat1.png")
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
    catimg3 = loadImage("images/cat3.png")
    catimg4 = loadAnimation("images/cat4.png")
    mouseimg1 = loadImage("images/mouse1.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg3 = loadImage("images/mouse3.png")
    mouseimg4 = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite(200,600,10,50)
    mouse.addImage (mouseimg1)
    mouse.scale = 0.15;

    cat = createSprite(700,600,30,90)
    cat.addImage (catimg1)
    cat.scale = 0.25;
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <(cat.width - mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("catSitting",catimg4)
        cat.changeAnimation("catSitting")
        cat.changeAnimation(catimg4)
        mouse.addImage(mouseimg4)
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing",mouseimg3);
    mouse.addAnimation("mouseTrasing")
    cat.addAnimation("catWalking",catimg2)
    cat.changeAnimation("catWalking")
    mouse.frameDelay = 25;
    cat.velocityX = 2;
    cat.velocityY= 0
}

   if (keyCode === LEFT_ARROW){
       mouse.addAnimation("mouseTeasing",mouseimg3);
       mouse.addAnimation("mouseTrasing")
       cat.addAnimation("catWalking",catimg2)
       cat.changeAnimation("catWalking")
       mouse.frameDelay = 25;
       cat.velocityX = -2;
       cat.velocityY= 0
   }

}
