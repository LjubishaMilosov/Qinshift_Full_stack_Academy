// 8. Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values).
//    Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.

const array = [null, undefined, NaN, "", false, 1, 2, 3, 4, 5];

function removeFalsyValues(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
console.log(removeFalsyValues(array));



// function removeFalsyValues1(arr) {
//     return arr.filter(Boolean);
// }   
// console.log(removeFalsyValues1(array));