class Drops{
    constructor(x,y){
        var opt  = {
            isStatic : false,
            friction : 0.1
        }
        this.body = Bodies.circle(x,y,10,opt);
        World.add(world, this.body);
    }

    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x, pos.y,20,20);
    }

    SpawnDrops(){
        if(frameCount % 20 === 0){
            
        }
    }

    repositionDrop(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,600),y:random(0,400)});
        }
    }


}