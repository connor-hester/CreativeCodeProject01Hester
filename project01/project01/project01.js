//Connor Hester Project 1
let xDir;
let yDir;
let flip;
let radius;

function setup(){ //initialize and create objects
	createCanvas(600,600);
	ellipseMode(CENTER);
	e1=new Eye();
	e2=new Eye();
	e3=new Eye();
	c1= new Clock();
	ex1= new Explosion();
	radius=5;
}

function draw(){ //main 
	background(250); //draws background
	fill(200);
	rect(50,50,500,500);
	fill(150);
	rect(150,150,300,300);
	fill(0);
	stroke(0);
	rect(0,50,50,height-100);
	rect(50,0,width-100,50);
	rect(width-50,50,50,height-100);
	rect(50,height-50,width-100,50);
	rect(50,50,50,50);
	rect(width-100,50,50,50);
	rect(50,height-100,50,50);
	rect(width-100,height-100,50,50);
	rect(150,100,width-300,50);
	rect(100,150,50,height-300);
	rect(150,height-150,width-300,50);
	rect(width-150,150,50,height-300);
	rect(150,150,50,50);
	rect(width-200,150,50,50);
	rect(width-200,height-200,50,50);
	rect(150,height-200,50,50);
	stroke(255);
	line(50,0,100,50); //adds 3D effect
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
	line(150,100,200,150);
	line(150,150,200,200);
	line(100,150,150,200);
	line(100,height-150,150,height-200);
	line(150,height-150,200,height-200);
	line(150,height-100,200,height-150);
	line(width-100,150,width-150,200);
	line(width-150,150,width-200,200);
	line(width-150,100,width-200,150);
	line(width-100,height-150,width-150,height-200);
	line(width-150,height-150,width-200,height-200);
	line(width-150,height-100,width-200,height-150);
	c1.display(); //runs clock object methods
	c1.time();
	c1.opacityFill();
	initialize(e1); //runs eye object methods
	initialize(e2);
	initialize(e3);
	e1.overlap(e2);
	e2.overlap(e3);
	e3.overlap(e1);
	e1.panic();
	e2.panic();
	e3.panic();
	if (e1.rad>75 && e2.rad>75 && e3.rad>75){ //"end" of code, washes the screen into black
		fill(0);
		ellipse(width/4,height/4,radius,radius);
		ellipse(3*width/4,height/4,radius,radius);
		ellipse(3*width/4,3*height/4,radius,radius);
		ellipse(width/4, 3*height/4,radius,radius);
		radius+=1;
		}
	if(radius>4*width/5){ //once screen is black, draws skull
		fill(255);
		noStroke();
	  fill(255);
	  ellipse(width/2, height/2, 150, 100);
	  rect(width/2-50, height/2, 100, 80);
	  fill(0);
	  ellipse(width/2-40, height/2-15, 20, 30);
	  ellipse(width/2+40, height/2-15, 20, 30);
	  ellipse(width/2-7, height/2+20, 6, 18);
	  ellipse(width/2+7, height/2+20, 6, 18);
	  rect(width/2-45, height/2+55, 5, 20);
	  rect(width/2-20,height/2+55,5,20);
	  rect(width/2, height/2+55, 5, 20);
	  rect(width/2+20, height/2+55, 5, 20);
	  rect(width/2+40, height/2+55, 5, 20);
	}
	
}
function initialize(eye){ //groups all of the basic methods of Eye into one function
eye.display();
eye.move();
eye.checkEdge();
eye.emote();
}


