class lines{
      constructor(x, y, width, height) {
        var options = {
            isStatic: true,
            }
            
            this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visiblity = 255
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
}
 if (this.body.speed<3) {
  console.log(this.body.speed)

  }
  else{
    World.remove(world,this.body)
    push()
  this.visiblity=this.visiblity-5
  tint(255,this.visiblity)
  image(this.image,this.body.position.x,this.body.position.y,50,50)
  pop()
  }


    