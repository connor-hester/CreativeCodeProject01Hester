let option;
let x;
let y;
let xSpeed;
let ySpeed;
function setup(){
	createCanvas(600,600);
	ellipseMode(CENTER);
	xSpeed=2;
	ySpeed=2.2;
	x=random(width);
	y=random(height);
}

function draw(){
	background(0);
	eye();
	eye();
	moveEye();
	checkEdge();

}

function eye(){
	fill(0,0,180);
	noStroke();
	ellipse(x, y, 20, 20);
	stroke(255);
	ellipse(x,y,12,8);
	fill(255);
	ellipse(x,y, 4, 8);
}

function moveEye(){
	x=x+xSpeed;
	y=y+ySpeed;
}

function checkEdge(){
	if(x>width||x<0){
		xSpeed*=-1;
	}
	if(y>height||y<0){
		ySpeed*=-1;
	}
}
// Class Eye{
// 	let x, y, xSpeed, ySpeed;
//  Eye(){
// 	 xSpeed=2;
// 	 ySpeed=2.2;
// 	 x=random(width);
// 	 y=random(height);
//  }
//  void display(){
// 	fill(0,0,180);
// 	noStroke();
// 	ellipse(x, y, 20, 20);
// 	stroke(255);
// 	ellipse(x,y,12,8);
// 	fill(255);
// 	ellipse(x,y, 4, 8);
//  }
// void moveEye(){
// 	x=x+xSpeed;
// 	y=y+ySpeed;
// }
// void checkEdge(){
// 	if(x>width||x<0){
// 		xSpeed*=-1;
// 	}
// 	if(y>height||y<0){
// 		ySpeed*=-1;
// 	}
// }
// }