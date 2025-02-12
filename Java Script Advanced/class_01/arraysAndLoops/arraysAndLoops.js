 // while

console.log("=============WHILE=================");

let counter = 0;
while(counter < 10){
    console.log(counter);
    counter++;
}

let array = ["Tijana", "Murat", "Ivan", "Viktor", "Martin" ];
counter = 0;
while(counter < array.lengt){
    console.log(array[counter]);
    counter++
}

// do-while
console.log("=============DO-WHILE=================");
counter = 0;

do{
    console.log(counter);
    counter++;
} while(counter > 0);

// for
console.log("============= for loop =================");

for(let i = 0; i<array.length; i++){
    console.log(array[i]);
    
}

for(let j=array.length - 1; j >= 0; j--){
    console.log(array[j]);
    
}

for(let element of array){
    console.log(element);
    
}