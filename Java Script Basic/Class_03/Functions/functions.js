console.log("===========FUNCTIONS===========");

console.log("==========FUNCTION DECLARATION=================");

function myName(param1, param2) {
    //function body
}

console.log(addTwoNumbers(2, 3));

function greetStudent(studentName) {
    console.log(`Hello ${studentName}, Qinshift wishes you happpy holidays!`);
}

greetStudent("Rajesh");
greetStudent("Raj");
greetStudent("Rajesh Kumar");

function addTwoNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = addTwoNumbers(20, 30);
console.log(`The result is: ${result}`);

//Example: Function for getting function statistics

function getNumberStat (number) {
    if(number === 0) {
        return "zero";
    } else if (number > 0) {
        return "positive";
    } else {
        return "negative";
    }
}

let inputNumber = 123;

let numberStat = getNumberStat(inputNumber);
console.log(`The number ${inputNumber} is ${numberStat}`);
