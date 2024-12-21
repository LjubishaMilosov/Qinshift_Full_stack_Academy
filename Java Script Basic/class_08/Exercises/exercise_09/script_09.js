// 9. Write a function to reverse an array.

const array = [1, 2, 3, 4, 5];

 function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }   
    return reversedArray;
}

console.log(reverseArray(array));


// function reverseArray(array) {
//     return array.slice().reverse();
// This line creates a copy of the array using slice() to avoid modifying the original array,
// then reverses the elements in the copied array using reverse() and returns the result
return array.slice().reverse();// }

// console.log(reverseArray(array));