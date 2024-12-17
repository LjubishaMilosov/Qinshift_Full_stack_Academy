let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

for(i = 0; i < days.length; i++) {
    console.log(`i: ${i}`);
    console.log(`day: ${days[i]}`);
}



// for of
let numbers = [ 5, 67, 8, 998, 3];

for(num of numbers) {
    console.log(num);
}

//BREAK

// Task: print until 'Wed', without 'Wed'

for(let i =0; i < days.length; i++) {
    if(days[i] == 'Wed'){
        break;
    }
    console.log(`day: ${days[i]}`);
}

//CONTINUE

// print all days except for 'Wed'
for(let i = 0; i < days.length; i++){
    if(days[i] == 'Wed'){
        continue;
    }
    console.log(`day: ${days[i]}`);
}

// BONUS EXAMPLE
while(true) {  // this is an infinite while loop 
let input = prompt("Please enter an input, or enter n if you want to exit");
if(input == 'n'){
    break; // we will exit the while loop with break
}
console.log(input);
}