// 2. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result.
//    Make sure you use a function! Ex. Input: 20 ==> Output: 14,

//get a Number
// check if the number is greater than 13
// check if the number is greater than 13, double the difference and return the result back
//if the number is not greater than 13, just return the difference
// wrap all this logic in a function

function getDifference(number) {
    if (number > 13) {
        return (number - 13) * 2;
    }
    return number - 13 ;
}

console.log(getDifference(20)); 