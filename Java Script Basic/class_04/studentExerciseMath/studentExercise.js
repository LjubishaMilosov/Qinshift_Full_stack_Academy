let number = 101;
let end = 150;


function sumOfSquares(startNumber, endNumber){
    let sum = 0;
while(startNumber <= endNumber) {
    sum += Math.pow(startNumber, 2); 
    startNumber++;
}
return sum;
}
console.log(sumOfSquares(number,end));

console.log(sumOfSquares(1,4));

