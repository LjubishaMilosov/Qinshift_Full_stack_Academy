class Shape{
    constructor(name, color, position){
        this.name = name;
        this.color = color;
        this.position = position;
    }

    set name(nameInput){
        !nameInput ? "no name" : this._name = nameInput;
    }

    get name(){
        console.log("We are getting the name...");
        return this._name;
    }
    set color(colorInput){
        !colorInput ? "no color" : this._color = colorInput;
    }
    get color(){
        return this._color;
    }
    getArea(){
        console.log("getArea has no specific implementation");
    }
    getPerimeter(){
        console.log("getPerimeter has no specific implementation");
    }
    checkPosition(shape){
        if (shape instanceof Shape){ // checks if the object is an instance of a class
            // the most specific check should always go first(be on top)
            if(shape.position[0] > this.position[0] && shape.position[1] > this.position[1]){
                console.log(`Shape ${shape.name} has both x and y coordinates in front of this object`);
                return;
            }
            if(shape.position[0] > this.position[0]){
                console.log(`Shape ${shape.name} x coordinate is in front of this x coordinate`);
                return;
            }
            if(shape.position[1] > this.position[1]){
                console.log(`Shape ${shape.name} y coordinate is in front of this y coordinate`);
                return;
            }
            console.log(`this has both x and y coordinates in front of ${shape.name} object`);
        } else {
            console.log(`Thw input is not a shape`);
        }
    }
    static move(shape){
        if(shape instanceof Shape){
            console.log("Moving....");
            shape.position[0] += 5;
            shape.position[1] += 5;
        } else{
            console.log("The input is not a shape");
        }
    }
}
let shape1 = new Shape("shape1", "red", [5,6]);
let shape2 = new Shape("shape2", "red", [2,3]);
  shape1.checkPosition(shape2); //shape1 is this (the object we are working with) and shape2 is shape (the object that we sent)

  class Rectangle extends Shape{
    constructor(name, color, position, sideA, sideB){
        super(name, color, position);
        this.sideA = sideA;
        this.sideB = sideB;
    }
    //override the methods with specific implementation
    getArea(){
        return this.sideA * this.sideB;
    }
    getPerimeter(){
        return 2*this.sideA + 2*this.sideB;
    }
  }

  let rectangle = new Rectangle("rectangle", "blue", [2,3], 3,5);
  console.log(rectangle);
  console.log(rectangle.getArea());
  
  const pi = 3.14;
  class Circle extends Shape{
    constructor(name, color, position, radius){
        super(name, color, position);
        this.radius = radius;
        //this.pi = 3.14;
    }
    getArea(){
        return this.radius * this.radius * pi;
    }
    getPerimeter(){
        return 2 * this.radius * pi;
    }
  }

  let circle = new Circle("Circle", "red", [4.5], 5);
  console.log(circle);
  console.log(circle.getArea());
  console.log(circle.getPerimeter());
  