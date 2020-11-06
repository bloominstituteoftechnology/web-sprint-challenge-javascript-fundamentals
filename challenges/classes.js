// 1. Copy and paste your prototype in here and refactor into class syntax.

/* ===== Classes Practice COMPLETE ===== */

// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area. Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.

/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height
*/

class CuboidMaker {
    constructor(length, width, height) {
        this.length = length;
    this.width = width;
    this.height = height; 
    }
  /* == Step 2: Volume Method ==
    Create a method using CuboidMaker's prototype that returns the volume of a given cuboid's length, width, and height
    Formula for cuboid volume: length * width * height
  */
    volume() {
        let volume = this.length * this.width * this.height;
        return volume;
    }
  /* == Step 3: Surface Area Method ==
    Create another method using CuboidMaker's prototype that returns the surface area of a given cuboid's length, width, and height. 
    Formula for cuboid surface area of a cube: 2 * (length * width + length * height + width * height)
  */
    surfaceArea() {
        let surfaceArea = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return surfaceArea;
    }
}
  
  /* == Step 4: Create a new object that uses CuboidMaker ==
    Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
    Add properties and values of length: 4, width: 5, and height: 5 to cuboid.   
  */
  
  let cuboid = new CuboidMaker(4,5,5);
  
  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130
  

/* Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  
Find out the formulas for volume and surface area for cubes and create those methods 
using the dimension properties from CuboidMaker.  
Test your work by logging out your volume and surface area. */

class CubeMaker extends CuboidMaker {
    constructor(length, width, height) {
    super(length, width, height);
    }

    cubeVolume(length) {
        let cubeVolume = length * 3;
        return cubeVolume;
    }

    cubeSurfaceArea(length) {
        let cubeSurfaceArea = 6 * Math.pow(length, 2);
        return cubeSurfaceArea;
    }
} // end subclass CubeMaker constructor

// TEST CODE

    let cube = new CubeMaker(3,3,3);

    console.log(cube.volume()); // 27
    console.log(cube.surfaceArea()); // 154