class Paper{
	constructor(x, y,d) {
		var options = {
			isStatic:false,
		    restitution:0.3,
			friction:0.5,
			density:1.2
			
		}
		   this.body = Matter.Bodies.circle(x, y,d, options);
		   World.add(world, this.body);
	  }
	  display(){
			push();
			translate(this.body.position.x, this.body.position.y);
			ellipse(56, 46, 55, 55);
			pop();
	  }
  }