// 1. Copy and paste your prototype in here and refactor into class syntax.


class CuboidMaker{
    constructor(len,wid,ht){
        this.length = len;
        this.width = wid;
        this.height = ht;
    }
    volume() {
        return this.length * this.width * this.height;
    }
    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}

const cuboid = new CuboidMaker(4, 5, 5);

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker {
    constructor(side){
        super(side, side, side);
    }
    //A cube is a cuboid with all sides the same, length = width = height;
    //so the more general cuboid volume and surface area formulas still work.
    //CubeMaker takes a side length and passes it to CuboidMaker as length, width, and height.
    //Equivalent formulas:
    cubeVolume() {
        return this.length ** 3;
    }
    cubeSurfaceArea() {
        return 6 * (this.length ** 2);
    }
}

const cube1 = new CubeMaker(3);

console.log(cube1.volume());            //27
console.log(cube1.surfaceArea());       //54

console.log(cube1.cubeVolume());        //27
console.log(cube1.cubeSurfaceArea());   //54