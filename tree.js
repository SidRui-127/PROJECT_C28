class Tree { 
    constructor(x, y, width, height) {
        var options = {
            isStatic:true
        }
        this.image = loadImage("Sprites/tree.png");

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        //World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        rectMode(CENTER);
        fill(0, 0, 0)
        rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image, 250, 0, this.width+500, this.height+500);
        pop();
    }
}