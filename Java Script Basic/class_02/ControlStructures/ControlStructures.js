// IF - ELSE

let condition = 5 > 2;

if(condition) {

    
} else {

}

let falseCondition = 5 < 2;

if(falseCondition) {

} else {

}

//Example

let points = 51;

if( points > 60) {
    console.log("You passed the exam!");
} else {
    console.log("You failed the exam!");
}


// Example 2

let scoredPoionts = 89;

if(scoredPoionts >= 91) {
    console.log("You passed the exam with an A!");
} else if(scoredPoionts > 80) {
    console.log("You passed the exam with a B!");
} else if(scoredPoionts > 70) {
    console.log("You passed the exam with a C!");
} else if(scoredPoionts > 60) {
    console.log("You passed the exam with a D!");
} else {
    console.log("You failed the exam!");
}


//Exercise:

let string = prompt("How much money do you have?");

let money = parseInt(string);

if(money > 500){
    console.log("You have plenty of money. Buy yourselt something!");
}
else if(money <= 500 && money >= 400){
    console.log("You have some money. Buy yourselt something cheaper!");
} else{
    console.log("You have very little money. Save your money!");
}


