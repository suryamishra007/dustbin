class Dustbin
{
    constructor(x,y,width,height)
    {
        var option = {

            isStatic:true

        }
        this.x = x
        this.y = y
        this.height = height
        this.width = width
        
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,option)
        World.add(world,this.body)

    }
    display()
    {
     var pos = this.body.position
     rectMode(CENTER)
     fill("white")
     rect(pos.x,pos.y,this.width,this.height)

    }
}
