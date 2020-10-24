//Connor Hester Project 1
//I want to illustrate the adjective "stress" by showing Eye objects bouncing around the screen. As they bounce off the walls they will change from green to red
//and begin to grow in size. Once they reach a certain size I want them to "explode" from the pressure and disappear from the screen. 
let xDir;
let yDir;
let flip;
let timePassed;
let timeStart;
let totalTime;
let shortestD;
let d1;
let d2;
let d3;
let d4;

function setup(){ //initialize and create objects
	createCanvas(600,600);
	ellipseMode(CENTER);
	angleMode(DEGREES);
	totalTime=3000;
	e1=new Eye();
	e2=new Eye();
	e3=new Eye();
	c1= new Clock();
	ex1= new Explosion();
	// ex2= new Exclamation();
	// ex3= new Exclamation();
}

function draw(){ //main 
	background(250);
	fill(0);
	rect(0,50,50,height-100);
	rect(50,0,width-100,50);
	rect(width-50,50,50,height-100);
	rect(50,height-50,width-100,50);
	rect(50,50,50,50);
	rect(width-100,50,50,50);
	rect(50,height-100,50,50);
	rect(width-100,height-100,50,50);
	rect(100,100,width-200,50);
	rect(100,100,50,height-200);
	rect(100,height-150,width-200,50);
	rect(width-150,100,50,height-200);
	stroke(255);
	line(50,0,100,50);
	line(50,50,100,100);
	line(0,50,50,100);
	line(0,height-50,50,height-100);
	line(50,height-50,100,height-100);
	line(50,height,100,height-50);
	line(width-50,0,width-100,50);
	line(width-50,50,width-100,100);
	line(width,50,width-50,100);
	line(width,height-50,width-50,height-100);
	line(width-50,height-50,width-100,height-100);
	line(width-50,height,width-100,height-50);
	c1.display();
	c1.time();
	c1.opacityFill();
	initialize(e1);
	initialize(e2);
	initialize(e3);
	e1.overlap(e2);
	e2.overlap(e3);
	e3.overlap(e1);
	// ex1.display(e1);
	// ex2.display(e2);
	// ex3.display(e3);
}

function initialize(eye){ //groups all of the basic methods of Eye into one function
eye.display();
eye.move();
eye.checkEdge();
eye.emote();
eye.panic();
//if(timeStart>totalTime){
//	eye.explode(ex1);
//}
}

