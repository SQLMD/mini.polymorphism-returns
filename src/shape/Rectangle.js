// eslint-disable-next-line no-unused-var
class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
    
    calcArea() {
      this.area = this.width * this.height;
    }
}