// 1. Copy and paste your prototype in here and refactor into class syntax.

// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

class CuboidMaker {
    constructor (cuboidMakerAttributes) {
    this.length = cuboidMakerAttributes.length;
    this.width = cuboidMakerAttributes.width;
    this.height = cuboidMakerAttributes.height;  
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
  }

  class CubeMaker extends CuboidMaker {
    constructor(cubeMakerAttributes) {
      super(cubeMakerAttributes);    
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      return 6 * (this.length * this.length);
    }
  }

  const cuboid = new CuboidMaker({
    'length': 4,
    'width': 5,
    'height': 5,
  })
  
  const cube = new CubeMaker({
    'length': 3,
    'width': 3,
    'height': 3,
  })

  // Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume(100)); // 100
 console.log(cuboid.surfaceArea(130)); // 130


  