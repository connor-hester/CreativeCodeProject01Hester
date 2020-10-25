class Clock{
    constructor(){ //inititalizes with info for timer and opacity
      this.interval=2000;
      this.timeStamp=millis();
      this.opacity=0;
    }
    display(){ //creates and shows a generic clock in the center of the drawing 
        fill(255);
        stroke(0);
        strokeWeight(4);
        ellipse(width/2, height/2, 200, 200); //clock
        fill(0);
        ellipse(width/2,height/2,8,8); //clock hand
        strokeWeight(2);
        line(width/2+45,height/2-84, width/2+40, height/2-75);//1
        line(width/2+84,height/2-45, width/2+75, height/2-40);//2
        line(width/2+95,height/2, width/2+85, height/2);//3 
        line(width/2+84,height/2+45, width/2+75, height/2+40);//4
        line(width/2+45,height/2+84, width/2+40, height/2+75);//5
        line(width/2, height/2+95, width/2, height/2+85);//6
        line(width/2-45,height/2+84, width/2-40, height/2+75);//7
        line(width/2-84,height/2+45, width/2-75, height/2+40);//8
        line(width/2-95,height/2,width/2-85,height/2);//9
        line(width/2-84,height/2-45, width/2-75, height/2-40);//10  
        line(width/2-45,height/2-84, width/2-40, height/2-75);//11
        line(width/2, height/2-95, width/2, height/2-85);//12
        fill(230,0,0,this.opacity);
        ellipse(width/2,height/2,200,200);
    }
    time(){ //based on the second() function, the hour hand of the clock moves around the circle
      if(second()%12==0){
            line(width/2,height/2, width/2+38, height/2-70);//1:00
          }
          else if(second()%12==1){
            line(width/2,height/2, width/2+69, height/2-39);//2:00
          }
          else if(second()%12==2){
            line(width/2,height/2, width/2+80, height/2);//3:00
          }
          else if(second()%12==3){
            line(width/2,height/2, width/2+69, height/2+38);//4:00
          }
          else if(second()%12==4){
            line(width/2,height/2, width/2+38, height/2+70);//5:00
          }
          else if(second()%12==5){
            line(width/2,height/2, width/2, height/2+80);//6:00
          }
          else if(second()%12==6){
            line(width/2,height/2, width/2-38, height/2+70);//7:00
          }
          else if(second()%12==7){
            line(width/2,height/2, width/2-69, height/2+39);//8:00
          }
          else if(second()%12==8){
            line(width/2,height/2, width/2-80, height/2);//9:00
          }
           else if(second()%12==9){
            line(width/2,height/2, width/2-69, height/2-38);//10:00
          }
          else if(second()%12==10){
            line(width/2,height/2, width/2-38, height/2-70);//11:00
          }
          else if(second()%12==11){
            line(width/2,height/2,width/2,height/2-80);//12:00
          }
        
        }
  
    opacityFill(){ //clock gets redder as time progresses based on a timer
      if(millis()-this.timeStamp>this.interval){ //increments timer after every 2 seconds
        this.opacity+=2;
        this.interval+=2000;
      }
      if(this.opacity>80){//stops getting redder at 80% opacity
        this.opacity=80;
      }
    }
  
}