class Drops{

    constructor(x,y,scale){

          var options = {
            'restitution':1.0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 2, options);
        this.scale = scale;
        this.image = loadImage("assets/PinClipart.com_warehouse-clipart_23909.png");
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