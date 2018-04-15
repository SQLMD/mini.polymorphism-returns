// eslint-disable-next-line no-unused-var
class Ellipse extends Shape {
    constructor(rx, ry){
      super();
      this.xRadius = rx;
      this.yRadius = ry;
    }
    calcArea() {
      return Math.PI * this.xRadius * this.yRadius;
    }
  }