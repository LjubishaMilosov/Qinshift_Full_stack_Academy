let numbersDivisibleByThree = [];
let evenNumbersDivisibleByFour = [];
let numbersEndingWithOne = [];
let numbersDivisibleByThreeAndSix = [];
let numbersDivisibleByThreeOrSix = [];


for(let i = 1; i <= 1000; i++){
    if(i % 3 == 0){
        numbersDivisibleByThree.push(i);
    }
    if(i % 2 == 0 && i % 4 == 0){
        evenNumbersDivisibleByFour.push(i);
    }
    if(i % 10 == 1){  // all numbers that end in '1' when divided by 10 , have a remainder of 1
        numbersEndingWithOne.push(i);
    }
    if(i % 3 ==0 || i % 6 ==0){
        numbersDivisibleByThreeOrSix.push(i);
    }
    if(i % 3 ==0 && i % 6 ==0){
        numbersDivisibleByThreeAndSix.push(i);
    }
}
console.log(`Numbers divisible by 3 from 1 to 1000`);
console.log(numbersDivisibleByThree);

console.log(`Even numbers divisible by 4 from 1 to 1000`);
console.log(evenNumbersDivisibleByFour);

console.log(`Numbers ending with one from 1 to 1000`);
console.log(numbersEndingWithOne);

console.log(`Numbers divisible by 3 from 1 to 1000`);
console.log(numbersDivisibleByThree);

console.log(`Numbers divisible by 3 or six from 1 to 1000`);
console.log(numbersDivisibleByThreeOrSix);

console.log(`Numbers divisible by 3 and six from 1 to 1000`);
console.log(numbersDivisibleByThreeAndSix);
