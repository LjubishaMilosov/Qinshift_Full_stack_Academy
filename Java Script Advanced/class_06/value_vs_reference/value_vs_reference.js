// Arrays - REFERENCE

let array1 = [10, 4, 5, 2];
let array2 = array1; // pass by reference

console.log(array1);
console.log(array2);

array1[0] = 2324342;
console.log(array1);
console.log(array2);

array2[1] = 77777;
console.log(array1);
console.log(array2);


let nums = [4, 5, 6, 7];
function changeArray(array){
    array[0] = 1111;
}
console.log("nums before:");
console.log(nums);

changeArray(nums);
console.log(nums);



// Objects - REFERENCE

let object1 = {
    prop1: "Test1"
};
console.log(object1);


let object2 = object1;
console.log(object2);

object2.prop1 = "Updated test";
console.log(object1);
console.log(object2);


// By Value - numbers, strings, booleans

let a = 5;
console.log(a);
let b = a;
console.log(b);

a=3;
console.log(a);
console.log(b);

console.log("===============================");


let number = 8;
function changeValue(num){
    num = 77;
}
console.log("number before changeValue " + number);
changeValue(number); // let num = number -> pass by value(primitive type)
console.log("number after changeValue " + number);