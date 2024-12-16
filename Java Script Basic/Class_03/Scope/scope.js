console.log("======== SCOPE =========");


let globalNumber = 2000;

function printGlobalNumber() {
    //function scope
    //globalNumber - 1000;
    console.log(globalNumber);
}

printGlobalNumber();


//    LOCAL SCOPE

//Example 1
function localScope() {
    //local scope->this variable only exist within the function, not reachable outside the function
    let localNumber = 100;
    let result = localNumber + 100;
    console.log(result);
}

//console.log(localNumber); // localNumber is not defined


// Example 2

let greeting = "Hello Qinshift Academy";
function printGreeting() {
    let greeting = "Happy Holidays";
    console.log(greeting);
}
printGreeting();


// Example 3
function outerFunction() {
    let outerVariable = "I'm from the outer function";
    function innerFunction() {
        let innerVariable = "I'm from the inner function";
        console.log(outerVariable);
        console.log(innerVariable);
    }
   // console.log(innerVariable);
   innerFunction();
}
  //  innerFunction();  //innerFunction is not defined
    outerFunction();  


    //BLOCK SCOPE

    if(50 <100){
       // let blockNumber = 50 +100;
    }
   // console.log(blockNumber); // blockNumber is not defined


    //Student Exercise:
    // Decription: Celsius to Fahrenheit formula: X°C x 1.8 + 32
    // Action: Write a function that will be able to convert Celsius to Fahrenheit and display the result
    // Bonus: Write another function that will be able to convert Fahrenheit to Celsius and display the result. Formula: (5/9) * (Fahrenheit-32);



function convertCelsiusToFarenheit(celsius) {
    let farenheit = celsius * 1.8 + 32;
    return farenheit;

}
console.log(convertCelsiusToFarenheit(5));

function convertFareheitToCelsius(farenheit){
    let celsius = 5/9 * (farenheit-32);
    return celsius;
}

// console.log(convertFareheitToCelsius(41));

// let personChoice = prompt("Enter F for Farenheit and C for Celsius");
// let personInput = parseInt(prompt("Please enter value"));
// if(personChoice === "F") {
//     console.log(convertCelsiusToFarenheit(personInput));
// } else if (personChoice === "C") {
//         console.log(convertFareheitToCelsius(personInput));
// } else {
//     console.log("Invalid input");
// }

// Student Exercise - #3
// The Age Calculator
// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge (birthYear, currentYear) {
    let myAge = currentYear - birthYear;
    return myAge;
}

console.log(calculateAge(1983, 2024));
console.log(calculateAge(2000, 2024));
console.log(calculateAge(2004, 2024));

function getCurrentDate() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;
    let currentDay = currentDate.getDate();
    let fullCurrnetDate = `Full current date is ${currentYear}/${currentMonth}/${currentDay}`;
    return fullCurrnetDate;
    
}

console.log(getCurrentDate());




// function getCurrentDate() {
//     let currentDate = new Date();
//     let currentYear = currentDate.getFullYear();
//     let currentMonth = currentDate.getMonth() + 1; // Add 1 to get the correct month
//     let currentDay = currentDate.getDate(); // Use getDate() to get the day of the month
//     let fullCurrentDate = currentYear + "/" + currentMonth + "/" + currentDay;
//     return fullCurrentDate;
// }

// console.log(getCurrentDate());
