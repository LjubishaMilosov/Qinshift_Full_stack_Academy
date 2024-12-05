//AND

console.log(true && true);  // true
console.log(true && false); // false
console.log(false && true); //false
console.log(false && false); // true

// OR
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true);//true
console.log(false || false);//false

// NEGATION

console.log(!true); //false
console.log(!false); //true

// COMPARISON

let comp1 = 5 > 4; //true
let comp2 = 3 != 3; //false   // this is negation of ==

let andResult = comp1 && comp2; // true && false -> false
console.log(andResult);

let orResult = comp1 || comp2;
console.log(orResult); // true || false -> true

let comp3 = 5 !== "5"; // true  // this is negation of ===
console.log(comp3);

let expression = comp1 || comp2 || comp3; //true
console.log(expression); // true || false || true -> true

console.log(expression);


let negationCat = !"Cat"; // negation of a thruty value returns false
console.log(negationCat); // false

let doubleNegationCat = !!"Cat"; // negation of negation a thruty value returns true
console.log(doubleNegationCat); // false

let secondNegation = !0; // negation of a falsy value returns true
console.log(secondNegation); // false

console.log("===comparison of strings===");
console.log("abc" < "cde"); // true
console.log("4" < "12"); // alphabetical comparison, 4 is after 4 -> false

