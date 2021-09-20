class StoneC {
    constructor(x,y,w,h) {
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2,
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.image = loadImage("images/stone.png");
        World.add(world,this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w, this.h);
        pop();
    }
}