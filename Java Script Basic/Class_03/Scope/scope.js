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

console.log(convertFareheitToCelsius(41));

