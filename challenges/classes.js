// 1. Copy and paste your prototype in here and refactor into class syntax.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/
class CuboidMaker1{
    constructor(length,width,height){
    this.length = length;
    this.width = width;
    this.height = height;
    }
    VolumeMethod(length,width,height){ 
        return length * width * height;
    }
    SurfaceArea(length,width,height){ 
        return 2 * (length * width + length * height + width * height)
    
      }
  }
  class CubeMaker extends CuboidMaker1 {
      constructor(length,width,height){
          super(length,width,height);
      }
      cubeVolume(length,width,height){
          return length * width * height;
      }
      cubeSurface(length,width,height){
          return 2 * (length*height) + 2 * (width*height) + 2 *(length*width)
      }
  }
  
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    
    Formula for cuboid volume: length * width * height
  */

  
  
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
  
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */

  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  const cuboid1 = new CuboidMaker1(4,5,5);
  const cuboid2 = new CubeMaker(6,6,6);
  console.log(cuboid1)
  console.log(cuboid2)
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid1.VolumeMethod(10,5,2)); // 100
  console.log(cuboid1.SurfaceArea(32,1,1)); // 130
  console.log(cuboid2.cubeVolume(10,5,2)); // 100
  console.log(cuboid2.cubeSurface(32,3,1))
  
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.