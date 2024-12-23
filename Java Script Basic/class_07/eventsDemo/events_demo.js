console.log("=================== EVENTS ===================");
// Events are actions or occurrences that happen in the browser, which JavaScript can respond to. These events can be triggered by the user (e.g., clicking a button, typing in a field) or by the browser itself (e.g., when a page finishes loading)

// Three steps for handling events :
// 1) Select the **element** you want the script to respond to
// 2) Indicate which **event** on the selected element will trigger the response
// 3) Write **code** that will be executed when that event occurs on the selected element

// Ways to bind an event to an element
// 1. HTML event handlers (BAD!)
// 2. DOM event handlers (OLD!)
// 3. Event Listeners (USE IT :))

// 1. HTML event handlers (BAD!)
function alertUser(message) {
    alert(message.toUpperCase());
}

function greet() {
    alert("HAPPY HOLIDAYS !")
}


// 2. DOM event handlers (OLD!)
console.log("");
console.log("=========== DOM event handlers (OLD!) ===========");

const doubleClickBtn = document.getElementById("dbl-click-btn");
console.log(doubleClickBtn);


// 3. Event Listeners (USE IT :))

const clickMebtn = document.getElementById("click-btn");

clickMebtn.addEventListener("click", greet);

// Event Listener with anonymous function
const clickMeBtn2 = document.getElementById("click-btn2");

clickMeBtn2.addEventListener("click", function () {
    alertUser("The Click Me (2) button was clicked");
    console.log("The Click Me (2) button was clicked");
});


// Event Listener with arrow function
const clickMeBtn3 = document.getElementById("click-btn3");
clickMeBtn3.addEventListener("click", () => {
    alertUser("The Click Me (3) button was clicked");
    console.log("The Click Me (3) button was clicked");
});


//   HOVER example

const hoverPargraph = document.getElementById("hover-paragraph");

hoverPargraph.addEventListener("mouseenter", function () {
    hoverPargraph.style.color = "red";
    hoverPargraph.style.fontSize = "2em";
});

hoverPargraph.addEventListener("mouseleave", function () {
    hoverPargraph.style.color = "black";
    hoverPargraph.style.fontSize = "1em";
});


// Remove Event Listener - can be done only with named functions

clickMebtn.removeEventListener("click", greet); //eventlistener removed


//Explore the event Object
const eventBtn = document.getElementById("event-btn");
eventBtn.addEventListener("click", function (event) {
    console.log("Hello from Explore the event Object button");
    console.log(event);

    console.log(event.target);
    console.log(event.target.id);
    console.log(event.target.innerText);
    console.log(event.type);
    console.log(`Coordinates: X: ${event.clientX}, Y: ${event.clientY}`);
    
});

//Example: Keydown event

document.addEventListener("keydown", function (event) {
    console.log('Key pressed: ', event.key);
    console.log('Key code: ', event.code);
    console.log('Is Ctrl key pressed?', event.ctrlKey);
    
});


function dontPush() {
    alert(`Ljubisha's button. Don't push !`);
    console.log("Ljubisha's button. Don't push !");
}

const ljubisaBtn = document.addEventListener("click", dontPush);  