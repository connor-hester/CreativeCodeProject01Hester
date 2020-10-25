class Eye{
    constructor(){ //initializes with the speed of the object, its starting position and its starting size. They always start green but the rest is random.  
       this.velocity= new createVector(1.2, 1.2); 
       this.position= new createVector(random(1,width),random(1,height));
        this.r=0;
        this.g=200; //all objects start green
        this.b=0;
        this.rad=45;
        this.phase=1;
    }
   
    display(){ //displays the object on the screen
        this.checkPhase();
       fill(this.r,this.g,0);
       noStroke();
       ellipse(this.position.x, this.position.y, this.rad, this.rad);
       if(this.phase==1){ //draws eye closed
        strokeWeight(3);
        stroke(255);
        arc(this.position.x,this.position.y, 24, 16, 0, PI); //eyelid
        line(this.position.x-12,this.position.y+2,this.position.x-15,this.position.y+4); //eyelashes
        line(this.position.x-7, this.position.y+7, this.position.x-9,this.position.y+10);
        line(this.position.x,this.position.y+10, this.position.x, this.position.y+13);
        line(this.position.x+7, this.position.y+7, this.position.x+9, this.position.y+10);
        line(this.position.x+12,this.position.y+2, this.position.x+15, this.position.y+4);
       }
       else if (this.phase==2){ //draws eye open
        stroke(255);
        strokeWeight(2);
       ellipse(this.position.x,this.position.y,24,16); //eyeball
       fill(0);
       ellipse(this.position.x,this.position.y, 8, 16); //pupil
       }
       else if(this.phase==3){ //draws eye as alert
        stroke(255);
        fill(255);
        ellipse(this.position.x,this.position.y,24,16);//eyeball
        fill(0);
        noStroke();
        ellipse(this.position.x,this.position.y, 8, 16);//pupil
        strokeWeight(1);
        stroke(0);
        fill(255,0,0);
        ellipse(this.position.x,this.position.y-15,5,5);//exclamation point
        triangle(this.position.x,this.position.y-23,this.position.x-4,this.position.y-32,this.position.x+4,this.position.y-32);
       }
       
    }
   
    move(){ //moves the object around the screen
       this.position.x=this.position.x+this.velocity.x;
       this.position.y=this.position.y+this.velocity.y;
   }
   
    checkEdge(){ //checks to see if the object has reached the edge and then reflects and does "phase-appropriate" changes
       this.direction()
       if(this.position.x>width||this.position.x<0){ //reflects off the left and right walls
           this.velocity.x*=-1.01;
           this.phaseChange();
           
       }
       if(this.position.y>height||this.position.y<0){ //reflects off the top and bottom walls
           this.velocity.y*=-1.01;
           this.phaseChange();
       }
   }

   phaseChange(){ //based on the phase the eye is in, the color, velocity, and radius change accordingly
       this.checkPhase();
       if(this.phase==1){ //green phase
           this.r+=20;
           this.rad++;
           this.velocity.x*=1.01;
           this.velocity.y*=1.01;
       }
       else if(this.phase==2){//yellow phase
           this.g-=20;
           this.rad++;
           this.velocity.x*=1.05;
           this.velocity.y*=1.05;
       }
       else if(this.phase==3){//red phase
           this.rad+=2;
           this.velocity.x*=1.08;
           this.velocity.y*=1.08;
       }
   }

   checkPhase(){ //determines which phase the eye is in based on the color of the eye object
       if(this.r<200 && this.g>=200){
           this.phase=1
       }
       else if(this.r>=200 && this.g>=60){
           this.phase=2
       }
       else if(this.r>=200 && this.g<60){
           this.phase=3
       }
   }
   
   exPt(){ //creates the shape of 3 exclamation points
    fill(200,0,0);
    ellipse(this.position.x,this.position.y-25,5,5);
    triangle(this.position.x,this.position.y-30,this.position.x-2,this.position.y-42,this.position.x+2,this.position.y-42);
    ellipse(this.position.x-20,this.position.y-25,5,5);
    triangle(this.position.x-20,this.position.y-30,this.position.x-22,this.position.y-42,this.position.x-18,this.position.y-42);
    ellipse(this.position.x+20,this.position.y-25,5,5);
    triangle(this.position.x+20,this.position.y-30,this.position.x+18,this.position.y-42,this.position.x+22,this.position.y-42);
}

   deflect(){ //makes the Eyes bounce off each other in the opposite directions
       this.velocity.x*=-1;
       this.velocity.y*=-1;
        this.exPt();
   }
   
   direction(){ //indicates which direction the emote(s) should face
       xDir=false;
       yDir=false;
       if(this.position.y>height){ //emotes on bottom
           yDir=true;
           flip=1;
       }
       else if(this.position.x>width){//emotes on right
           xDir=true;
           flip=1;
       }
       else if(this.position.y<0){//emotes on top
           yDir=true;
           flip=-1;
       }
       else if(this.position.x<0){//emotes on left
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
       if(this.rad>75){
           this.position.x=width/2; //moves to center
           this.position.y=height/2;
           this.position.x+=random(-5,5); //makes ball shake violenty
           this.position.y+=random(-5,5);
       }
   }
}