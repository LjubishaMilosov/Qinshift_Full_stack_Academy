// 7. Write a simple JavaScript program to join all elements of the an array into a string. The array should have at least 5 elements. Wrap it in a function that takes the array as a parameter and returns the string. Call the function and display the result in the console.

const array = ["I ", "have ", "joined ", "the ", "array ", "into ", "a ", "string."];

function joinArrayItemsIntoString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}
console.log(joinArrayItemsIntoString(array));


// without comma between elements
// function joinArrayItemsIntoString(array) {
//     return array.join(" ");
// }
// console.log(joinArrayItemsIntoString(array));


// with comma between elements
// function joinArrayItemsIntoString(array) {
//     return array.join(" , ");
// }
// console.log(joinArrayItemsIntoString(array));