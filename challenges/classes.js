// 1. Copy and paste your prototype in here and refactor into class syntax.

function CuboidMaker(length, width, height)
{
  this.length = length;
  this.width = width;
  this.height = height;
}


CuboidMaker.prototype.volume = function ()
{
  let volume = this.length * this.width * this.height;
  return volume;
}

CuboidMaker.prototype.surfaceArea = function ()
{
  let surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
  return surfaceArea;
}

let cuboidObject = new CuboidMaker(4, 5, 5);


console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130



class CuboidMaker 
{
    constructor(obj)
    {
        this.length = obj.length;
        this.width = obj.width;
        this.height = obj.height;
    }
    volume()
    {
        return this.length * this.width * this.height;
    }
    surfaceArea()
    {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
};

const cuboidObject = new CuboidMaker 
({
    length: 4,
    width: 5,
    height: 5
});

console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.