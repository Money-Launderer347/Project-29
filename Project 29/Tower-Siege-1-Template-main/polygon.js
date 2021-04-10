class Polygon{
    constructor(x, y, r) {
        var options = {
              isStatic: false       
        }
        this.x = x;
        this.y = y;
        this.r = r;
        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);

        slingShot = new Slingshot(this.polygon,{x:100,y:200});

        polygon = loadImage("sprites/polygon.png");

      }
      display(){
        var angle = polygon.angle;
        var pos= polygon.position;
        push();
        rotate(angle);
        imageMode(CENTER);
        image(polygon_img, polygon.position.x, polygon.position.y, 40,40);
        pop();
      }
    }