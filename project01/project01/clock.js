class Clock{
    constructor(){
      this.interval=2000;
      this.timeStamp=millis();
      this.opacity=0;
    }
    display(){ //creates and shows a generic clock in the center of the drawing 
        fill(255);
        stroke(0);
        strokeWeight(1);
        ellipse(width/2, height/2, 200, 200);
        fill(0);
        ellipse(width/2,height/2,8,8);
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
        if(second()==0 || second()==12 || second()==24 || second()==36 || second()==48 ||second()==60){
            line(width/2,height/2, width/2+38, height/2-70);//1:00
          }
          else if(second()==1 || second()==13 || second()==25 || second()==37 || second()==49){
            line(width/2,height/2, width/2+69, height/2-39);//2:00
          }
          else if(second()==2 || second()==14 || second()==26 || second()==38 || second()==50){
            line(width/2,height/2, width/2+80, height/2);//3:00
          }
          else if(second()==3 || second()==15 || second()==27 || second()==39 || second()==51){
            line(width/2,height/2, width/2+69, height/2+38);//4:00
          }
          else if(second()==4 || second()==16 || second()==28 || second()==40 || second()==52){
            line(width/2,height/2, width/2+38, height/2+70);//5:00
          }
          else if(second()==5 || second()==17 || second()==29 || second()==41 || second()==53){
            line(width/2,height/2, width/2, height/2+80);//6:00
          }
          else if(second()==6 || second()==18 || second()==30 || second()==42 || second()==54){
            line(width/2,height/2, width/2-38, height/2+70);//7:00
          }
          else if(second()==7 || second()==19 || second()==31 || second()==43 || second()==55){
            line(width/2,height/2, width/2-69, height/2+39);//8:00
          }
          else if(second()==8 || second()==20 || second()==32 || second()==44 || second()==56){
            line(width/2,height/2, width/2-80, height/2);//9:00
          }
           else if(second()==9 || second()==21 || second()==33 || second()==45 || second()==57){
            line(width/2,height/2, width/2-69, height/2-38);//10:00
          }
          else if(second()==10 || second()==22 || second()==34 || second()==46 || second()==58){
            line(width/2,height/2, width/2-38, height/2-70);//11:00
          }
          else if(second()==11 || second()==23 || second()==35 || second()==47 || second()==59){
            line(width/2,height/2,width/2,height/2-80);//12:00
          }
    }
    opacityFill(){
      if(millis()-this.timeStamp>this.interval){
        this.opacity+=2;
        this.interval+=2000;
      }
      if(this.opacity>80){
        this.opacity=80;
      }
    }
  
}