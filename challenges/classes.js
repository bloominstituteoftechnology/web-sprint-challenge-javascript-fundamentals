// 1. Copy and paste your prototype in here and refactor into class syntax.

class cuboid {
    constructor(length, width, height){
        this.length = length;
        this.width = width;
        this.height = height;
    }
    volume(){
        return this.length*this.width*this.height;
    }
    surfaceArea(){
        return (2*(this.length*this.width + this.length*this.height + this.width*this.height));
    }
}
let cuboidTest = new cuboid(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboidTest.volume()); // 100
console.log(cuboidTest.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends cuboid {
    constructor(length, width, height){
        super(length, width, height);
    }
    cubeVolume(){
        if (this.length === this.height && this.length === this.width){
            return Math.pow(this.length,3);
        }
        else {
            return "This is not a cube!";
        }
    }
    cubeSA(){
        if (this.length === this.height && this.length === this.width){
            return 6*(this.length*this.height);
        }
        else {
            return "This is not a cube!";
        }
    }
}

let myCube = new CubeMaker(7, 7, 7);
console.log(myCube);
console.log(myCube.cubeVolume());
console.log(myCube.cubeSA());