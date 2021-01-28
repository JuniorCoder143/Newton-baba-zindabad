class Bob {
    constructor(x, y, radius) {
      var options = {
        isStatic: true,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'scale': 0.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius
      
      World.add(world, this.body);
      }
    display(){
      var paperpos=this.body.position;		

			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill("red")
			
			//ellipse(0,0,this.r, this.r);
			pop()
    }
    };