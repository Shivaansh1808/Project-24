class Bin{
    constructor(){
        var options = {
            isStatic: true,
        }
        this.leftBody = Bodies.rectangle(550, 625, 20, 100, options);
        World.add(world, this.leftBody);

        this.rightBody = Bodies.rectangle(750, 625, 20, 100, options);
        World.add(world, this.rightBody);

        this.bottomBody = Bodies.rectangle(650, 665, 220, 20, options);
        World.add(world, this.bottomBody);

    }
    display(){
        var leftPos = this.leftBody.position;
        rectMode(CENTER);
        fill("red");
        rect(leftPos.x, leftPos.y, 20, 100);

        var rightPos = this.rightBody.position;
        rectMode(CENTER);
        fill("red");
        rect(rightPos.x, rightPos.y, 20, 100);

        var bottomPos = this.bottomBody.position;
        rectMode(CENTER);
        fill("red");
        rect(bottomPos.x, bottomPos.y, 220, 20);

    }
}