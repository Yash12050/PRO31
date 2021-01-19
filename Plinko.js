class particle{
    constructor(x,y){
        var options = {
            restitution:0.4
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        fill("white");
        ellipseMode(RADIUS);
        ellipse(x,y,10,10);
    }
}