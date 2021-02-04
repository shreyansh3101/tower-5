class box
{
	constructor(x,y,w,h)
	{
		var options={
			restitution :0.4,
            friction :0.0,				
			}
		
		this.w=w
		this.h=h
		this.visibilty=255;
		this.body=Bodies.rectangle(x, y, w, h , options);
		
 		World.add(world, this.body);

	}
	score(){
		if (this.Visiblity < 0 && this.Visiblity > -1005){
			score++;
		  }	
	}
	display(){
		console.log(this.body.speed);	
	push()
		var bodyPos=this.body.position;
		translate(bodyPos.x, bodyPos.y);
			if (this.body.speed<5.5){
				rectMode(CENTER)
			
				fill("red")
				rect(0,0,this.w, this.h);

			}
			else{
				
				World.remove(world,this.body);
				push();
				this.visibilty=this.visibilty-5;
				tint(255,this.visibilty);
				fill("red");
				rect(this.body.position.x,this.body.position.y,this.w, this.h);

			  pop()				
			}
					

		pop()
		}
		

}