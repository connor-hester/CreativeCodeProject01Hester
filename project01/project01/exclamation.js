class Exclamation{
    constructor(){
    }
    exPt(x,y){
        fill(200,0,0);
        ellipse(x,y,5,5);
        triangle(x,y-5,x-2,y-17,x+2,y-17);
    }
    shortest(other){
        d1=dist(other.position.x,other.position.y,0,height/2);
        d2=dist(other.position.x,other.position.y,width/2,0);
        d3=dist(other.position.x,other.position.y,width,height/2);
        d4=dist(other.position.x,other.position.y,width/2,height);
        if(d1>d2 && d1<d3 && d1<d4){
            other.shortestD=d1;
        }
        else if(d2<d1 && d2<d3 && d2<d4){
            other.shortestD=d2;
        }
        else if(d3<d1 && d3<d2 && d3<d4){
            other.shortestD=d3;
        }
        else if(d4<d1 && d4<d2 && d4<d3){
            other.shortestD=d4;
        }
    }
    display(other){
        push();
        if(other.shortestD==d1){
            for(let i; i<7; i++){
                this.exPt(25,75);
                translate(0,50);
            }
        }
        else if(other.shortestD==d2){
            for(let i; i<7; i++){
                this.exPt(75,25);
                translate(50,0);
            }
        }
        else if(other.shortestD==d3){
            for(let i; i<7; i++){
                this.exPt(width-25,75);
                translate(0,50);
            }
        }
        else if(other.shortestD==d4){
            for(let i; i<7; i++){
                this.exPt(75,height-25);
                translate(50,0);
            }
        }
        pop();
    }
    group(other){
        this.shortest(other);
        this.display(other);
    }
}


// function exclamation(x,y)
// {
// 	push();
// 	if(xDir==true)
// 	{
// 	for(let i; i<7; i++){
// 		exclamationPt(x,y);
// 		translate(50,0);
// 	}
// }
// else if(yDir==true){
// 	for(let i; i<7; i++){
// 		exclamationPt(x,y);
// 		translate(0,50);
// 	}
// }
// pop();
// }