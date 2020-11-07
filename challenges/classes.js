// 1. Copy and paste your prototype in here and refactor into class syntax.


function CuboidMaker (l, w, h)
  {
    this.length = l;
    this.width = w;
    this.height = h;
  }

//TEST CODE BELOW//
const newCuboid = new CuboidMaker(1, 2, 3)  
log(newCuboid)
//TEST CODE ABOVE//

CuboidMaker.prototype.volume = function() {
  return this.length * this.width * this.height;
};

//TEST CODE BELOW//
log(newCuboid.volume());
//TEST CODE ABOVE
  

CuboidMaker.prototype.surfaceArea = function() {
  return 2 * (this.length * this.width + this.length *this.height + this.width * this.height);
};

//TEST CODE BELOW
log(newCuboid.surfaceArea());
//TEST CODE ABOVE


class CuboidMaker2 
{
  constructor(l, w, h) {
    this.length = l.length;
    this.width = w.width;
    this.height = h.height;
  }
  
  volume(l, w, h) {
    return this.length * this.width * this.height;
  };
  
  surfaceArea(l, w, h) {
  return 2 * (this.length * this.width + this.length *this.height + this.width * this.height);
};
  
};

const cuboid1 = new CuboidMaker(4, 5, 5);
log(cuboid1)

console.log(cuboid1.volume(4, 5, 5)); // 100
console.log(cuboid1.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
