

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume(4, 5, 5)); // 100
  console.log(cuboid.surfaceArea(4, 5, 5)); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class Cuboid{
    constructor(attributes){
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height
    }
 volume = function(length, width, height){
    return length * width * height; 
 }
surfaceArea = function(length, width, height){
    return 2 * (length * width + length * height + width * height)

}
}