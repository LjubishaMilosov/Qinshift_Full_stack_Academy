let helloGreeting = "Hello";
let academy = 'Qinhift';

console.log("Hello" + " " + "Qinhift");
console.log(helloGreeting + " " + academy);

let greeting = helloGreeting + " " + academy;
console.log(greeting);
console.log(typeof(greeting));

let num = 20;
let message = "test";
let result = num + message; //20 + "test" -> concatenation, one of the operands is a string, the other undergoes automatic conversion
console.log("Result: " + result);

let firstNum = 10;
let secondNum = "25";
let thirdNum = firstNum + secondNum;
console.log("Third number: " + thirdNum);
console.log(typeof(thirdNum));

//Interpolation
let academyName = 'Qinsift';
let interpolationSentence = `Jana is a student of ${academyName}`;
console.log(interpolationSentence);

let concatenationName = 'Jana is a student of ' + academyName;
console.log(concatenationName);

let firstname = "Marko";
let age = 25;
let text = `${firstname} is ${age} years old`;
console.log(text);

let secondMessage = "It's really nice to be a web developer";
console.log(secondMessage);

let thirdMessage = 'It is "really" nice to be a web developer';
console.log(thirdMessage);

let anotherMessage = "It's really \"nice\" to be a web developer"; //  escape character
console.log(anotherMessage);


let twoLinesMessage = "This is the first line. \nThis should be in a second line"; // go to next line
console.log(twoLinesMessage);
