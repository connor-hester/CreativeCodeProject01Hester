
function setup(){
	createCanvas(500,500);
	ellipseMode(CENTER);

	e1=new Eye();
	e2=new Eye();
	e3=new Eye();
	e4=new Eye();
	e5=new Eye();
}

function draw(){
	background(0);
	e1.initialize();
	e2.initialize();
	e3.initialize();
	e4.initialize();
	e5.initialize();
	// if(e2.x-e1.x<2 && e2.y-e1.y<2){
	// 	e2.deflect();
	// 	e1.deflect();
	// }
}

class Eye{
 constructor(){
	 this.xSpeed=random(1,3);
	 this.ySpeed=random(1,3);
	 this.x=random(1,width);
	 this.y=random(1,height);
	 this.r=0;
	 this.b=100;
	 this.rad=random(15,30);
 }
 display(){
	fill(this.r,0,this.b);
	noStroke();
	ellipse(this.x, this.y, this.rad, this.rad);
	stroke(255);
	ellipse(this.x,this.y,12,8);
	fill(255);
	ellipse(this.x,this.y, 4, 8);
 }
 move(){
	this.x=this.x+this.xSpeed;
	this.y=this.y+this.ySpeed;
}
 checkEdge(){
	if(this.x>width||this.x<0){
		this.xSpeed*=-1.02;
		this.r+=10;
		this.b-=10;
		if(this.r>240){
			this.rad++;
		}
		
	}
	if(this.y>height||this.y<0){
		this.ySpeed*=-1.02;
		this.r+=10;
		this.b-=10;
		if(this.r>240){
			this.rad++;
		}
	}
}
initialize(){
	this.display();
	this.move();
	this.checkEdge();
	this.explode();
}
deflect(){
	this.xSpeed*=-1;
	this.ySpeed*=-1;
}
explode(){
	if(this.rad>50){
		this.xSpeed=0;
		this.ySpeed=0;
		this.x=width/2+5*this.rad;
		this.y=height/2+5*this.rad;
		this.b=10;
		this.r=10;
	}
}
}