// call stack -LIFO

function sayHi(){
    console.log("Hi");
    
}

function greeting(){
    console.log("Our first greeting");
    sayHi();
    console.log("Our second greeting");
    
}

greeting();

// Synchronous execution

function firstGreeting(){
    console.log("First greeting");
    
}

function secondGreeting(){
    console.log("Second greeting");
    
}
firstGreeting();
secondGreeting();


// Asynchronous execution

console.log("================== setTimeout ==================");

function hello(){
    setTimeout(() => console.log("Hello from hello function"), 4000); //it will wait for four seconds to execute
    
}
function hi(){
    console.log("Hi");
    
}

hello();
hi();


function first(){
    setTimeout(() => {console.log("First"); second();}, 5000)
}

function second(){
    console.log("Second");
}

first();


console.log("================== setInterval ==================");

let interval = setInterval(()=> console.log(new Date()), 3000);

document.getElementById("ourBtn").addEventListener("click", function (){
    clearInterval(interval);
})