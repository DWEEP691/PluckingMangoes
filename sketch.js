
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var M1,M2,M3,M4,M5,M6;
var S;

function preload()
{
	boy = loadImage("images/boy.png");
	stone = loadImage("images/stone.png");
	tree = loadImage("images/tree.png");
	mango = loadImage("images/mango.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	G = new GroundC(600,500,1200,20);
	B = new BoyC(250,440,250,250);
	S = new StoneC(170,420,80,80);
	T = new TreeC(550,330,350,350);
	M1 = new MangoC(460,290,55,55);
	M2 = new MangoC(520,290,55,55);
	M3 = new MangoC(610,290,55,55);
	M4 = new MangoC(670,290,55,55);
	M5 = new MangoC(530,220,55,55);
	M6 = new MangoC(590,220,55,55);
	L = new LauncherC(S.body,{x:175,y:380});

	
  
}


function draw() {
  
  background("lightBlue");

  Engine.run(engine);
  
  T.display();
  S.display();
  G.display();
  B.display();
  M1.display();
  M2.display();
  M3.display();
  M4.display();
  M5.display();
  M6.display();
  L.display();

  /*DC(M1.body,S.body);
  DC(M2.body,S.body);
  DC(M3.body,S.body);
  DC(M4.body,S.body);
  DC(M4.body,S.body);
  DC(M6.body,S.body);*/

  
 
}

function mouseDragged() {
	Matter.Body.setPosition(S.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
	L.fly();
}

function DC(ob1,ob2) {
    object1=ob1.body.position;
	object2=ob2.body.position;

	var distance = dist(object1.x,object1.y,object2.x,object2.y);
	if(distance<=object1.w+object2.w) {
		Matter.Body.setSaic(object1.body,false);
	}
}

function keyPressed() {
	if(keyCode===32) {
		Matter.Body.setPosition(S.body,{x:170,y:420});
		L.attach(S.body);
	}
}