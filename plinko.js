class Plinko {
    constructor(x,y,radius) {
      var options = {
        isStatic: true,
    }
      this.body = Bodies.circle(x,y,10, options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
    push();
    fill(200,200,255);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.radius, this.radius);
    pop();
    }
  };