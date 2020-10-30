
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var ground
var tree
var backImage
var mango, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9
var mango10, mango11, mango12, mango13, mango14, mango15, mango16, mango17, mango18

var bg = "back.png"

var slingShot
var stone
var base, base2, base3
var backImage
var score = 0


function preload()
{
 
getBackgroundImg();

}

function setup() {
	createCanvas(1500, 550);


	engine = Engine.create();
	world = engine.world;


ground = new Ground(650, 545, 1800, 10)
base = new Base(950, 410, 300, 20)

mango = new Mango(970, 390, 20, 40)
mango1 = new Mango(1030, 390, 20, 40)
mango2 = new Mango(910, 390, 20, 40)
mango3 = new Mango(850, 390, 20, 40)

mango4 = new Mango(1030, 320, 20, 40)
mango5 = new Mango(970, 320, 20, 40)
mango6 = new Mango(910, 320, 20, 40)

mango7 = new Mango(1030, 270, 20, 40)
mango8 = new Mango(970, 270, 20, 40)

mango9 = new Mango(1030, 220, 20, 40)


base2 = new Base(1300, 200, 300, 20)

mango10 = new Mango(1310,160, 20, 40)
mango11 = new Mango(1390, 160, 20, 40)
mango12 = new Mango(1230, 160, 20, 40)

mango13 = new Mango(1310, 120, 20, 40)
mango14 = new Mango(1390, 120, 20, 40)
mango15 = new Mango(1230, 120, 20, 40)

mango16 = new Mango(1310, 80, 20, 40)
mango17 = new Mango(1390, 80, 20, 40)
mango18 = new Mango(1230, 80, 20, 40)
//





stone = new Stone(400, 490, 20)
slingShot = new Sling(stone.body, {x:400, y:305});

	Engine.run(engine);
  
}


function draw() {
 // rectMode(CENTER);
 if (backImage) {
    
  background(backImage);

}
textSize(35)
fill("white")
text("SCORE "+score, width-700, 50 )
 
  
  ground.display();
 base.display();
  stone.display();
  
  mango.display();
  mango.Score();
 
  mango1.display();
mango1.Score();
 
mango2.display();
mango2.Score();

mango3.display();
mango3.Score(); 

mango4.display();
mango4.Score();

mango5.display();
mango5.Score();

  mango6.display();
  mango6.Score();

  mango7.display();
  mango7.Score();

  mango8.display();
  mango8.Score();

  mango9.display();
  mango9.Score();

 
  base2.display();
  mango10.display();
mango10.Score();

  mango11.display();
  mango11.Score();

  mango12.display();
  mango12.Score();

  mango13.display();
  mango13.Score();

  mango14.display();
  mango14.Score();

  mango15.display();
  mango15.Score();

  mango16.display();
  mango16.Score();

  mango17.display();
  mango17.Score();

  mango18.display();
  mango18.Score();
 
  

  drawSprites();
 
}



        

function mouseDragged(){

	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
	
	}
	
	function mouseReleased(){
	
		
		slingShot.fly()
		
		}

    function keyPressed(){

      if(keyCode === 32){
      Matter.Body.setPosition(stone.body, {x:235, y:420})
    slingShot.attach(stone.body)

      }
      
      }

      async function getBackgroundImg() {

        var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON = await response.json()
        var dateTime = responseJSON.datetime
        var hour = dateTime.slice(11, 13)
     
        if (hour>=06 && hour<=18) {
        
         bg = "back.png"
       
          
              }
          else{
             bg = "back2.png"
  
          }
              backImage = loadImage(bg)
      }