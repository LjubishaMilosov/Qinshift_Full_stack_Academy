// Exercise:
//  Write a JS script to read ten array values, 
//  determine the largest value and print it

let numbers = [35, 1, 15, 34, 22, 11, 7, 6, 45, 11];
let anotherArray = [36, 1, 12, 34, 22, 11, 7, 6, 45, 11, 12, 67];

function findLargestValue(inputArray) {
    let index = 0;
    // option one:
    let maxValue = inputArray[0];
    // option 2:
   // let maxValue = -Infinity;
   while(index < inputArray.length){
    console.log(`counter: ${index}`);
    console.log(`member: ${inputArray[index]}`);

    //if(inputArray[index] > maxValue)
    if(maxValue < inputArray[index]){

        maxValue = inputArray[index];
     }
     console.log(`current max: ${maxValue}`);

     index++;
    }
    console.log(`The official max value is ${maxValue}`);
    
   }
   
   findLargestValue(numbers);
   findLargestValue(anotherArray);
