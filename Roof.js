class roof{
    constructor(x,y,w,h){
      var options={
          isStatic:true
          
      }
      
      this.body=Bodies.rectangle(x,y,w,h,options)
      this.width=w
      this.height=h
      this.x=x
      this.y=y
      World.add(world,this.body)
    }

      display() {
          var pos=this.body.position
          push()
          translate(pos.x,pos.y) 
          fill("pink") 
         // rectMode(CENTER)
          rect(0,0,this.width,this.height)
          pop() 
      }


    
}