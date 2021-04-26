var starImg,bgImg;
var star, starBody;
var fairyImg, fairy;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png")
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	fairy = createSprite(200,500);
	fairy.addAnimation("fairy", fairyImg);
	fairy.changeAnimation("fairy");
	fairy.scale = 0.2;																																	

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
	  Matter.Body.setStatic(starBody,true);
  }


  keyPressed();

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x-5;
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x+5;
	}
	
}