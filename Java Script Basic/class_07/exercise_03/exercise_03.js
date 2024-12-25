// Student Exercise - #3
// Register User
// Create an HTML page, with 4 inputs for FirstName, LastName ,Email and Password and a button
// On click of the button call a function that will get all the inputs' values and use the values as parameters for a new function which will add them to string
// Finaly print the string in a new p element on the screen
// Time to accomplish: 15 minutes


let inputs = document.getElementById("userInputs").children;
let submitBtn = document.getElementById("submit");
let result = document.getElementById("result");

function getUserInfo(inputs){
    let result = "User: "
    for(let userInput of inputs){
        result += userInput.value + " ";
    }
    result += " is Registered";
    return result;

}

submitBtn.addEventListener("click", function(){
    result.innerText = getUserInfo(inputs);
});