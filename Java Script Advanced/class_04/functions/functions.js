// declaration of the function
function getFullName(firstName, lastName){
    console.log(firstName);

    return`${firstName} ${lastName}`;
    
}

//execution of the function
console.log(getFullName("marko", "Markovski"));

let fullName = getFullName("Stefan", "Stefanovski");
console.log(fullName);

function printPersonalDetails(firstName, lastName, age, address = "Unknown"){
    console.log(`The age of ${firstName} is ${age}`);
    let personFullName = getFullName(firstName, lastName); // we can a function inside a function
    console.log(`${personFullName} lives on address ${address}`);

    return `The age of ${personFullName} is ${age} and this person lives on ${address}`
    console.log("This code will not be executed. It is unreachable");  //unreachable code
    
    
}

console.log("============= Print Personal Details==================");


let personDetails = printPersonalDetails("Tijana", "Stojanovska", 25, "Address1");
console.log(personDetails);

let secondPersonDetails = printPersonalDetails("Stojan", "Stojanovski", 27);  // the address will have the default value 'Unknown'
console.log(secondPersonDetails);


console.log("============= Anonynous Functions =======================");

let greeting = function(name){
    console.log(`Hello ${name}`);
}

greeting("Ljubisha"); // anonymous function can be called by the name of the variavle

// member of an array
let mixedArray = [2,5,true, "test", function(){return 5+5}];
let result = mixedArray[4]();
console.log(result);


// Sent a param in another function
function printResult(parameterFunction){

    let result = parameterFunction();
    console.log(`Result: ${result}`);

    console.log(`Result: ${parameterFunction()}`);
    
}

printResult(function(){return 5+7});


// event listeners
document.getElementById("myBtn").addEventListener("click", function(){
    console.log("Clicked!");
    
});



console.log("================== Arrow Functions =================");
         //param part // body of the function
let sumWithTen = num => num +10;
console.log(sumWithTen(5));


// multiple params -> we put the params in brackets
let sum = (num1, num2, num3) => num1 + num2 +num3;
console.log(sum(5,10,6));

let sumOfTwoNumbers = (num1, num2) => {
    console.log("Inputs:");
    console.log(num1);
    console.log(num2);

    return num1 + num2
}
console.log(sumOfTwoNumbers(2,3));


let greetingHello = () => console.log("Hello");

greetingHello();


let checkNumber = ourNumber => {
    if(ourNumber == null || ourNumber == undefined || isNaN(ourNumber)){
        console.log("Invalid Number");
        return;
        
    }

    ourNumber > 7 ? console.log("Greater than seven") : console.log("Less than or equal to seven");
    ;
    
}
checkNumber(5);
checkNumber(9);
checkNumber("Test");


console.log("============Self Invoked Functions==================");


// defined and executed
(function(){
    console.log("Inside of a self-invoked function!");
    console.log("Hello!");
    
})();

let res = (function(num1, num2){
    return num1 + num2;
})(3,6);  // here the function is defined and executed and the result is in the variable
console.log(res);

// use the sum function from above
let sumResult = sum(4,5,((number1, number2) => number1*number2)(3,4));
console.log(sumResult);










