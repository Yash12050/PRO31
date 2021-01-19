class division{
    constructor(x,y){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,5,300,options)
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,5,300);
    }
}