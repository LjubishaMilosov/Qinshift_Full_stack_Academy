// 6. Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
//    If the number is divisible by 3, then write 'Fizz' in the console, if the number is divisible by 7, then write 'Buzz' in the console, and if the number is divisible by 3 and 7, write 'FizzBuzz' in the console.Wrap it all in a function

const number = parseInt(prompt("Enter a number:"));

// function checkNumber(number) {
//     if (number % 3 === 0 && number % 7 === 0) {
//         return "FizzBuzz";
//     }
//     if (number % 3 === 0) {
//         return "Fizz";
//     }
//     if (number % 7 === 0) {
//         return "Buzz";
//     }
//     return "The number is not divisible by 3 or 7.";
// }

// console.log(checkNumber(number));

// // similar solution:

 function checkNumber(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        return "FizzBuzz";
    } else if (number % 3 === 0) {
        return "Fizz";
    } else if (number % 7 === 0) {
        return "Buzz";
    } else {    
        return "The number is not divisible by 3 or 7.";
    }   
}

console.log(checkNumber(number));



