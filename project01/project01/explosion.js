//NOT IN USE
class Explosion{
    constructor(){
        this.grouping=[];
    }
    fragment(){
        fill(255,0,0);
        triangle(width/2-2,height/2,width/2+2,height/2,width/2,height/2-10);
    }
    load(){
        for(let i=0; i<9;i++){
            this.grouping[i]=fragment();
        }
    }
    display(){
        push();
        for (let i=0; i<9;i++){
            this.grouping[i];
            rotate(45);
        }
        pop();
    }
    //explode()
}