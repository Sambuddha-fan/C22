var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	//fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,70);
	star.addImage(starImg);
	star.scale = 0.1;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);



	
	Engine.run(engine);



	

	

}

function keyPressed() {
	if(keyDown(LEFT_ARROW)){
		fairy.x = fairy.x - 10
	
}else if(keyDown(RIGHT_ARROW)){
	fairy.x = fairy.x + 10

	

}

 


	

}

function starFalling() {
	if(keyCode === DOWN_ARROW){
		star.y = star.y + 10 
	}
}


function draw() {
	
  background(bgImg);
  keyPressed()
  starFalling()

drawSprites();


  
  
}


