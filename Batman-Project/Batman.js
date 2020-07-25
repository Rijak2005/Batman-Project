class Batman{

    constructor(x,y,scale){

          var options = {
            'restitution':1.0,
            'friction':1.0,
            isStatic: true,
            'density':1.0
        }
        this.body = Bodies.rectangle(x,y,100,100,options);
        this.scale = scale;
        this.image = loadImage("assets/pow-clipart-baby-batman-2-transparent.png");
        World.add(world, this.body);

    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.scale, this.scale);
        pop();
      }

      
}