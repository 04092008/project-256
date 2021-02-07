class Paperball{

    constructor(x,y,radius){
        var options={
            isStatic:false,
            restistution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body=Bodies.circle(x,y,radius,options)
      this.x=x;
      this.y=y;
      this.image=loadImage("paper.png")
      this.radius=radius
      World.add(world,this.body)
    
    }
    display(){
       var paperpos=this.body.position;
        push()
translate(paperpos.x,paperpos.y);
rectMode(CENTER)

fill("pink")
        imageMode(center)
this.image(this.image,0,0,this.radius,this.radius)
pop()
        
      
     
        
        
    }
    };