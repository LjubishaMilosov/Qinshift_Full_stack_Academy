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


// 2. DOM event handlers (OLD!)
console.log("");
console.log("=========== DOM event handlers (OLD!) ===========");

const doubleClickBtn = document.getElementById("dbl-click-btn");
console.log(doubleClickBtn);
