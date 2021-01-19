class Paper{
constructor(x,y,radius){
    
    var option={
   isStactic :false,
    restitution:0.3,
    friction:0.5,
    density:1.2
  
  }
this.body=Bodies.circle(x,y,radius,option)
this.radius=radius

World.add(world,this.body)

}
display(){
 

var pos=this.body.position;
push()
fill("pink");
ellipse(pos.x,pos.y,this.r,this.r);

pop()


}
}


