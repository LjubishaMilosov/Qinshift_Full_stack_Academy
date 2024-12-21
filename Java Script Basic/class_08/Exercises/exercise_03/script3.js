// 3. Write a JavaScript program that will find out which of two inserted integers is closer to 100.
//    Make sure to alert the user if a negative number is inserted!Make sure you use a function!Ex. Input1: 20 Input2: 80Output: 80 is closer to 100,

// create a functio that accept two input numbers

// check if the numbers are negative
// if they are, alert the user
// check which number is closer to 100
// subtract the number from 100 and compare the results
// return the number that is closer to 100
// wrap all this logic in a function
function findNumberClosestTo100(num1, num2) {
    if (num1 < 0 || num2 < 0) {
        alert("Please enter positive numbers only!");
        return;
    }
    if (100 - num1 < 100 - num2) {
        return num1;
    }
    return num2;
}

console.log(findNumberClosestTo100(20, 80));
console.log(findNumberClosestTo100(20, -80));
console.log(findNumberClosestTo100(20, 181));
  