function sum(num1, num2){
    return num1 +num2;
}

// sum(sum(sum(sum(1,2), 3),4),5);

function sumTo(num){
    console.log("Input is: " + num);

    // in recursion functions we need to have an ending condition

    if(num == 0){
        console.log("Input is 0");
        return 0;
        
    }

    console.log(`return ${num} + sumTo${num -1}`);
    return num + sumTo(num -1);
    
}
let result = sumTo(5);
console.log(result);
