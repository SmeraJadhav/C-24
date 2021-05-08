class Iron{
	constructor(x,y)
	{
	// assign options to the stone
	   var options={
		   'restitution':0.8,
		   'friction':0.9,
		   'density':12
	   }
		this.x=x;
		this.y=y;
		this.width=80;
		this.height=50;
		this.body=Bodies.rectangle(this.x, this.y, 80,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("brown");
			rect(0,0,this.width,this.height);

			pop()
	}

}