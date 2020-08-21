
console.log ("__________________________________________CLASSES________________________")


// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMakr{
    constructor(length, width, height){
    this.length = length;
    this.width = width;
    this.height = height;
    }
    surfaceArea(){
       return this.length * this.height * this.width;
    }
    volume(){
        return this.length * this.width + this.length * this.height + this.width * this.height;
    }
}
const cubito= new CuboidMakr(5, 5, 5)

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cubito.volume()); // 100
console.log(cubito.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// class CubeMaker extends CuboidMakr{
//     constructor(attr){
//     super(attr)
//     this.color = color;
//     }
    
// }


// const littleCube = new CubeMaker (2, 2, 2, "green")

// console.log(littleCube.volume()); // 100
// console.log(littleCube.surfaceArea());
// console.log(littleCube.color)