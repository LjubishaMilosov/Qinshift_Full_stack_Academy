// Control Structures 

// 1) Conditional Statements (if, else, else if)
// 2) Switch Statements
// 3) Looping Structures

console.log("==========SWITCH STATEMENTS==========");

let switchVariable = "";

if(switchVariable === "value 1") {
    console.log("Value 1");
} else if(switchVariable === "value 2") {
    console.log("Value 2");
} else if(switchVariable === "value 3") {
    console.log("Value 3");
} else {
    console.log("No value");
}



switch(switchVariable) {
    case "value 1":
        console.log("Value 1");
        break;
    case "value 2":
        console.log("Value 2");
        break;
    case "value 3":
        console.log("Value 3");
        break;
    default:
            console.log("No value");
}


// Example: Program to get the day of the week

let inputDay = prompt("Enter day of the week (1-7)");
let parsedDayInput = parseInt(inputDay);

switch(parsedDayInput) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid number");
}

// Example 2:


switch(parsedDayInput) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Weekday");
        break;
    case 6:
    case 7:
        console.log("Weekend");
        break;
    default:
        console.log("Invalid number");
}



