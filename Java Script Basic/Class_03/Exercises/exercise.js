function sum (num1, num2) {
    return num1 + num2;
}

let sumOfNumbers = sum(5, 7);
console.log(sumOfNumbers);


function subtractNumbers(val1, val2) {
    return val1 - val2;
}

let subOfNumbers = subtractNumbers(10, 5);
console.log(subOfNumbers);

function multiplyNumbers(val1,val2) {
    return val1 * val2;
}

let multipliedNumbers = multiplyNumbers(10, 5);
console.log(multipliedNumbers);

function division(val1, val2) {
    if(val2 === 0) {
        //return null
        return "You cannot divide by zero";
    }
    return val1 / val2;
}
let dividedNumbers = division(10, 0);
console.log(dividedNumbers);



// FUNCTION PARAMETERS

function logNumbers(num1,num2,num3) {
    console.log(num1, num2, num3);
}

logNumbers(1,2,3);

//DEFAUL Parameters

function logData(data1,data2,data3) {
    console.log(data1,data2,data3);
    
}

logData("test1", "test2");

function logData2(data1,data2,data3="Default test") {
    console.log(data1,data2,data3);
    
}

logData2("test1", "test2");




//some built-in functions

let numToString = String(13423);
console.log(numToString);

// Parsing strings ito numbers

console.log(parseInt("3.55"));  // 3

console.log(parseFloat("3.55")); //3.55

console.log(Number("3.55")); //3.55

console.log(Number("3.55test")); //NaN

console.log(Number("test"));  //NaN

console.log(Number("")); //0

console.log(Number(" ")); //0

console.log(Number("3.55test")); //NaN

console.log(Number("test")); //NaN 


let numberToParse = "3.55";
let parsedNumber = + numberToParse;
console.log(parsedNumber);



