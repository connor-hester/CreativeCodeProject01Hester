class Star{
    constructor(){
        this.x=random(10,width-10);
        this.y=random(10,height-10);
        this.r=random(1,7);
    }
    display(){
        fill(255);
        this.ellipse(this.x,this.y,this.r,this.r);
    }
}