class Stone{
    constructor(x, y, r) {
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:1,
        }

        this.image = loadImage("Sprites/stone.png");

        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(255, 255, 255);
        ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r+30, this.r+30);
        pop();
    }
}