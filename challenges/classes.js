// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakerOne {
    constructor(attributes) {
        this.length = attributes.length;
        this.width = attributes.width;
        this.height = attributes.height;
    }

    volume(){
        return this.length * this.width * this.height;
    }

    surfaceArea(){
        return Math.pow(this.length, 2) * 2 + (Math.pow(this.width, 2)) * 2  + (Math.pow(this.height, 2)) * 2;
    }
}

const cuboidOne = new CuboidMakerOne({
    length: 4,
    width: 5,
    height: 5,
  });
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboidOne.volume()); // 100
 console.log(cuboidOne.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.