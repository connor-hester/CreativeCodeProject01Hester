//Connor Hester Project 1
//I want to illustrate the adjective "stress" by showing Eye objects bouncing around the screen. As they bounce off the walls they will change from green to red
//and begin to grow in size. Once they reach a certain size I want them to "explode" from the pressure and disappear from the screen. 

function setup(){ //initialize and create objects
	createCanvas(500,500);
	ellipseMode(CENTER);

	e1=new Eye();
	e2=new Eye();
	e3=new Eye();
}

function draw(){ //main 
	background(0);
	e1.initialize();
	e2.initialize();
	e3.initialize();
	e1.overlap(e2);
	e2.overlap(e3);
	e3.overlap(e1);
}

class Eye{
 constructor(){ //initializes with the speed of the object, its starting position and its starting size. They always start green but the rest is random. 
	 this.xSpeed=random(1,3);
	 this.ySpeed=random(1,3);
	 this.x=random(1,width);
	 this.y=random(1,height);
	 this.r=0;
	 this.g=150;
	 this.rad=random(15,30);
 }

 display(){ //displays the object on the screen
	fill(this.r,this.g,0);
	noStroke();
	ellipse(this.x, this.y, this.rad, this.rad);
	stroke(255);
	ellipse(this.x,this.y,12,8);
	fill(255);
	ellipse(this.x,this.y, 4, 8);
 }

 move(){ //moves the object around the screen
	this.x=this.x+this.xSpeed;
	this.y=this.y+this.ySpeed;
}

 checkEdge(){ //checks to see if the object has reached the edge and then reflects, increments red, decrements green, and increments radius. 
	if(this.x>width||this.x<0){
		this.xSpeed*=-1.02;
		this.r+=15;
		this.g-=15;
		if(this.x>width){
			this.emote(2);
		}
		else{
			this.emote(4);
		}
		if(this.r>200){
			this.rad++;
		}
		
	}
	if(this.y>height||this.y<0){
		this.ySpeed*=-1.02;
		this.r+=15;
		this.g-=15;
		if(this.y<0){
			this.emote(3);
		}
		else{
			this.emote(1);
		}
		if(this.r>200){
			this.rad++;
		}
	}
}

initialize(){ //groups all of the basic methods for the Eye object
	this.display();
	this.move();
	this.checkEdge();
	//this.explode();
}

deflect(){ //makes the Eyes bounce off each other in the opposite directions
	this.xSpeed*=-1;
	this.ySpeed*=-1;
}
emote(direction){ //the Eye "reacts" to hitting a wall
	fill(0,0,255);
	noStroke();
	if(direction==1) //if object hits the bottom
	{
	beginShape();
	vertex(this.x-this.rad,this.y-this.rad);
	vertex(this.x-this.rad-5,this.y-this.rad-10);
	vertex(this.x-this.rad,this.y-this.rad-10);
	endShape(CLOSE);
	beginShape();
	vertex(this.x,this.y-this.rad-2);
	vertex(this.x-2,this.y-this.rad-12);
	vertex(this.x+2,this.y-this.rad-12);
	endShape(CLOSE);
	beginShape();
	vertex(this.x+this.rad,this.y-this.rad);
	vertex(this.x+this.rad+5,this.y-this.rad-10);
	vertex(this.x+this.rad,this.y-this.rad-10);
	endShape(CLOSE);
	}
	else if (direction==2){ //if object hits right
	beginShape();
	vertex(this.x-this.rad,this.y+this.rad);
	vertex(this.x-this.rad-10,this.y+this.rad+5);
	vertex(this.x-this.rad-10,this.y+this.rad);
	endShape(CLOSE);
	beginShape();
	vertex(this.x-this.rad-2,this.y);
	vertex(this.x-this.rad-12,this.y-2);
	vertex(this.x-this.rad-12,this.y+2);
	endShape(CLOSE);
	beginShape();
	vertex(this.x-this.rad,this.y-this.rad);
	vertex(this.x-this.rad-10,this.y-this.rad+5);
	vertex(this.x-this.rad-10,this.y-this.rad);
	endShape(CLOSE);
	}
	else if(direction==3){ //if object hits top
	beginShape();
	vertex(this.x+this.rad,this.y+this.rad);
	vertex(this.x+this.rad+5,this.y+this.rad+10);
	vertex(this.x+this.rad,this.y+this.rad+10);
	endShape(CLOSE);
	beginShape();
	vertex(this.x,this.y+this.rad+2);
	vertex(this.x+2,this.y+this.rad+12);
	vertex(this.x-2,this.y+this.rad+12);
	endShape(CLOSE);
	beginShape();
	vertex(this.x-this.rad,this.y+this.rad);
	vertex(this.x-this.rad-5,this.y+this.rad+10);
	vertex(this.x-this.rad,this.y+this.rad+10);
	endShape(CLOSE);
	}
	else if(direction==4){ //if object hits left
	beginShape();
	vertex(this.x+this.rad,this.y-this.rad);
	vertex(this.x+this.rad+10,this.y-this.rad-5);
	vertex(this.x+this.rad+10,this.y-this.rad);
	endShape(CLOSE);
	beginShape();
	vertex(this.x+this.rad+2,this.y);
	vertex(this.x+this.rad+12,this.y+2);
	vertex(this.x+this.rad+12,this.y-2);
	endShape(CLOSE);
	beginShape();
	vertex(this.x+this.rad,this.y+this.rad);
	vertex(this.x+this.rad+10,this.y+this.rad-5);
	vertex(this.x+this.rad+10,this.y+this.rad);
	endShape(CLOSE);
	}
}

overlap(other){ //checks if two Eye objects are overlapping, if true then it calls the deflect() method. 
let d;
d=dist(this.x,this.y,other.x,other.y);
if(d<this.rad+other.rad){
	this.deflect();
	other.deflect();
}
}

// explode(){ //stops the objects motion... idk what I want this to do yet. 
// 	if(this.rad>50){
// 		this.xSpeed=0;
// 		this.ySpeed=0;
// 		this.x=width/2+5*this.rad;
// 		this.y=height/2+5*this.rad;
// 		this.g=10;
// 		this.r=10;
// 	}
// }
}