let result = 2 / "test";
console.log(result); // NaN

console.log(typeof(result));
console.log(typeof(NaN));

let res1 = isNaN(result);  // if the result is number
console.log(res1); // true -> because NaN is a number

let text = "test";
let resultText = isNaN(text);
console.log(resultText); // true because the string is not a number

let num = 7;
let resultNum = isNaN(num);
console.log(resultNum); //false