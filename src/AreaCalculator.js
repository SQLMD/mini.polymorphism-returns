// eslint-disable-next-line no-unused-var
class AreaCalculator {
  // Returns the total area of all shapes rounded to the nearest whole number
  calculateArea(svg) {
    //map tagNames to Object types and argument list to make generic to obejcts
    const shapeMap = {
      "circle": {type: Circle, args: ["r"]},
      "ellipse": {type: Ellipse, args: ["rx","ry"]},
      "rect": {type: Rectangle, args: ["width","height"]}
    }

    let area = 0;
    for (let shape of svg.children) {
      const shapeObject = shapeMap[shape.tagName].type;

      if(shapeObject) {
        //get needed argumetns from the attributes of the svg tag
        let argValues = [];
        shapeMap[shape.tagName].args.forEach((arg) => {
          argValues.push(shape.getAttribute(arg));
        })
        
        //create new shape object and add it's area to area variable
        const newShape = new shapeObject(...argValues);
        area += newShape.area;
      } else {
        throw new Error("Type not implemented: " + shape.tagName);
      }
     }
    return Math.round(area);
  }
}
