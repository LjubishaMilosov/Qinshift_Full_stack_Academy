// used as a variable

let greeting = function(name){
    console.log("hello " + name);
}
greeting("Tijana");

let anothergreeting = name => console.log(`Hello ${name} from G6!`);
anothergreeting("Marko");

console.log("======================================================================");

// used as memeber of an array

let numberStatsFunctions = [
    num => num > 0 ? "Positive number" : "Negative number or equal to zero",
    num => num % 2 == 0 ? "Even number" : "Odd number",
    "We can have other types of elements in this array"
];

console.log(numberStatsFunctions[0](25));
console.log(numberStatsFunctions[1](13));

console.log("======================================================================");

// used as an argument
function sum(num1, num2){
    // console.log(result);
    return num1 + num2;
}

function diff(num1, num2){
    // console.log(result);
    return num1 - num2;
}

function calculator(number1, number2, calculatorFunction){
   let result = calculatorFunction(number1, number2); // 2,3
   console.log(result);
   // we can have the same logic with the result here, instead of copying the code for sum and for diff
}

// console.log(`First call of calculator ${calculator(3,4,sum)}`);
// console.log(`Second call of calculator ${calculator(7,3,diff)}`);
calculator(3,4,sum);
calculator(7,3,diff)

console.log("======================================================================");

// used as return value 
function calculate(operator){
    switch(operator){
        case "+":
            return (num1,num2) => num1 + num2;
            case "-":
            return (num1,num2) => num1 - num2;
            default:
                console.log(`${operator} is invalid operator`);
                return null;
    }
}

let resultFunction = calculate("+");  // resultFunction = (num1,num2) => num1 + num2

console.log(resultFunction(3,4));

resultFunction = calculate("-");
console.log(resultFunction(7,4));

console.log("======================================================================");

// functions as objects

function sayHello(name){
    console.log(`Hello ${name}`);
    
}
sayHello.defaultName = "John";
sayHello.defaultGreeting = function(){
   console.log("Hi");
   
}

sayHello("G6");

console.log(sayHello.defaultName);
sayHello.defaultGreeting();

console.log("======================================================================");

// Function arguments

function longestString(){
    console.log(arguments);
    let longest = arguments[0];
    for(let argument of arguments){
        if(argument.length > longest.length){
            longest = argument;
        }
    }
    console.log(`The longest string is ${longest}`);
    
}

longestString("Bob", "John", "Programming", "Qinshift");
longestString("2025", "Web Programming");
