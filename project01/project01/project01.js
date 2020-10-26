//Connor Hester Project 1
let xDir;
let yDir;
let flip;
let radius;
let timer;
//let stars = [];

function setup(){ //initialize and create objects
	createCanvas(600,600);
	ellipseMode(CENTER);
	e1=new Eye(380,190);
	e2=new Eye(160,520);
	e3=new Eye(540,200);
	c1= new Clock();
	radius=5;
	timer=4;
	// for(let i=0; i<100;i++){
	// 	stars.push(new Star());
	// }
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
	stroke(100);
	strokeWeight(1);
	line(50,0,100,50); //adds 3D effect with lines
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
	if(radius>4*width/5){ //once screen is black, draws eye
		if(frameCount%60==0 && timer>0){
			timer--;
		}
		if(timer==4 || timer==3){
		stroke(0);
  		fill(255);
  		ellipse(width/2,height/2,90,45);
  		fill(0,0,200);
  		ellipse(width/2,height/2,30,45);
  		fill(0);
  		ellipse(width/2,height/2,15,30);
  		stroke(255);
  		arc(width/2,height/2-5,90,35,PI,0,CHORD);
  		noFill();
  		arc(width/2,height/2+20,80,15,0,PI);
		arc(width/2,height/2+28,73,15,0,PI);
		}
		if(timer==2 || timer==1){
		stroke(0);
  		fill(255);
  		ellipse(width/2,height/2,90,45);
  		fill(0,0,200);
  		ellipse(width/2,height/2,30,45);
  		fill(0);
  		ellipse(width/2,height/2,15,30);
  		stroke(255);
  		arc(width/2,height/2+5,93,57,PI,0,CHORD);
  		noFill();
  		arc(width/2,height/2+20,80,15,0,PI);
		arc(width/2,height/2+28,73,15,0,PI);
		}
		if(timer==0){
		stroke(255);
		fill(0);
		ellipse(width/2,height/2-1,90,45);
		noFill();
		strokeWeight(3);
        arc(width/2,height/2, 90, 45, 0, PI); 
        line(width/2-35,height/2+15,width/2-40,height/2+20); 
        line(width/2-17, height/2+20, width/2-22,height/2+28);
        line(width/2,height/2+25, width/2, height/2+30);
        line(width/2+17, height/2+20, width/2+22, height/2+28);
        line(width/2+35,height/2+15, width/2+40, height/2+20);
		}
		// if (timer==0){
		// 	timer=0;
		// for(let i=0; i<100;i++){
		// 	stars[i].display();
		// }
		// stroke(255);
		// fill(0);
		// ellipse(width/2,height/2-1,90,45);
		// noFill();
		// strokeWeight(3);
        // arc(width/2,height/2, 90, 45, 0, PI); 
        // line(width/2-35,height/2+15,width/2-40,height/2+20); 
        // line(width/2-17, height/2+20, width/2-22,height/2+28);
        // line(width/2,height/2+25, width/2, height/2+30);
        // line(width/2+17, height/2+20, width/2+22, height/2+28);
		// line(width/2+35,height/2+15, width/2+40, height/2+20);
		// }
	}
	
	
}
function initialize(eye){ //groups all of the basic methods of Eye into one function
eye.display();
eye.move();
eye.checkEdge();
//eye.checkCenter();
eye.emote();
}


