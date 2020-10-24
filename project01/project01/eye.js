class Eye{
    constructor(){ //initializes with the speed of the object, its starting position and its starting size. They always start green but the rest is random.  
       this.velocity= new createVector(random(1,3),random(1,3));
       this.position= new createVector(random(1,width),random(1,height));
        this.r=0;
        this.g=150;
        this.rad=random(30,45);
        this.shortestD=null;
    }
   
    display(){ //displays the object on the screen
       fill(this.r,this.g,0);
       noStroke();
       ellipse(this.position.x, this.position.y, this.rad, this.rad);
       stroke(255);
       ellipse(this.position.x,this.position.y,12,8);
       fill(0);
       ellipse(this.position.x,this.position.y, 4, 8);
    }
   
    move(){ //moves the object around the screen
       this.position.x=this.position.x+this.velocity.x;
       this.position.y=this.position.y+this.velocity.y;
   }
   
    checkEdge(){ //checks to see if the object has reached the edge and then reflects, increments red, decrements green, and increments radius. 
       this.direction()
       if(this.position.x>width||this.position.x<0){
           this.velocity.x*=-1.02;
           this.r+=15;
           this.g-=15;
           if(this.r>200){
               this.rad++;
           }
           
       }
       if(this.position.y>height||this.position.y<0){
           this.velocity.y*=-1.02;
           this.r+=15;
           this.g-=15;
           if(this.r>200){
               this.rad++;
           }
       }
   }
   
   exPt(){ //exclamation point shape
    fill(200,0,0);
    ellipse(this.position.x,this.position.y-15,5,5);
    triangle(this.position.x,this.position.y-20,this.position.x-2,this.position.y-32,this.position.x+2,this.position.y-32);
}

   deflect(){ //makes the Eyes bounce off each other in the opposite directions
       this.velocity.x*=-1;
       this.velocity.y*=-1;
        this.exPt();
   }
   
   direction(){ //indicates which direction the emote(s) should face
       xDir=false;
       yDir=false;
       if(this.position.y>height){
           yDir=true;
           flip=1;
       }
       else if(this.position.x>width){
           xDir=true;
           flip=1;
       }
       else if(this.position.y<0){
           yDir=true;
           flip=-1;
       }
       else if(this.position.x<0){
           xDir=true;
           flip=-1;
       }
   }
   emote(){ //the Eye "reacts" to hitting a wall
       fill(0,0,255);
       noStroke();
       if(yDir==true) //if object hits the bottom or top
       {
       beginShape();
       vertex(this.position.x-this.rad*flip,this.position.y-this.rad*flip);
       vertex(this.position.x-this.rad*flip-3*flip,this.position.y-this.rad*flip-8*flip);
       vertex(this.position.x-this.rad*flip,this.position.y-this.rad*flip-8*flip);
       endShape(CLOSE);
       beginShape();
       vertex(this.position.x,this.position.y-this.rad*flip-2*flip);
       vertex(this.position.x-2*flip,this.position.y-this.rad*flip-10*flip);
       vertex(this.position.x+2,this.position.y-this.rad-10);
       endShape(CLOSE);
       beginShape();
       vertex(this.position.x+this.rad*flip,this.position.y-this.rad*flip);
       vertex(this.position.x+this.rad*flip+3*flip,this.position.y-this.rad*flip-8*flip);
       vertex(this.position.x+this.rad*flip,this.position.y-this.rad*flip-8*flip);
       endShape(CLOSE);
       }
       else if (xDir==true){ //if object hits right or left
       beginShape();
       vertex(this.position.x-this.rad*flip,this.position.y+this.rad*flip);
       vertex(this.position.x-this.rad*flip-8*flip,this.position.y+this.rad*flip+3*flip);
       vertex(this.position.x-this.rad*flip-8*flip,this.position.y+this.rad*flip);
       endShape(CLOSE);
       beginShape();
       vertex(this.position.x-this.rad*flip-2*flip,this.position.y);
       vertex(this.position.x-this.rad*flip-10*flip,this.position.y-2*flip);
       vertex(this.position.x-this.rad*flip-10*flip,this.position.y+2*flip);
       endShape(CLOSE);
       beginShape();
       vertex(this.position.x-this.rad*flip,this.position.y-this.rad*flip);
       vertex(this.position.x-this.rad*flip-8*flip,this.position.y-this.rad*flip+3*flip);
       vertex(this.position.x-this.rad*flip-8*flip,this.position.y-this.rad*flip);
       endShape(CLOSE);
       }
   }
   
   overlap(other){ //checks if two Eye objects are overlapping, if true then it calls the deflect() method. 
   let d;
   d=dist(this.position.x,this.position.y,other.position.x,other.position.y);
   if(d<this.rad+other.rad){
       this.deflect();
       other.deflect();
   }
   }
   
   panic(){ //when the radius gets too big the ball moves to the middle of the screen and shakes violently 
       if(this.rad>65){
           timeStart=millis();
           this.position.x=width/2;
           this.position.y=height/2;
           this.position.x+=random(-5,5);
           this.position.y+=random(-5,5);
       }
   }
   explode(other){ //stops the objects motion... idk what I want this to do yet
       this.rad=0;
        other.display(this);
           }
       
   }