//prompt will open as a pop up
let a = prompt("Enter a value for side a");       // a is of type string

console.log(a);
console.log(typeof(a));


let b = prompt("Enter a value for side b");       // a is of type string

console.log(b);
console.log(typeof(b));


let sideA = parseInt(a);    //sideA is of type number
let sideB = parseInt(b);

let area = sideA * sideB;
console.log("Area of the rectangle is " + area);