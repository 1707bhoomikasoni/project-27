class Bobs{
    constructor(x,y){
        var ballOption={
            isStatic:false,
        }
        this.body=Bodies.circle(x,y,40,ballOption)
   World.add(world,this.body)
    
     } 
 
 display(){
       ellipseMode(40)
        fill("pink")
        ellipse(this.body.position.x,this.body.position.y,40,40)
 }
 
 }