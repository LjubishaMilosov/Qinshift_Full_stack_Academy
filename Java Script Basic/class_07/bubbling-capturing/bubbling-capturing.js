console.log("=====Event Bubbling=======");


document.getElementById("btn").addEventListener
("click", function(event) {
    alert("Child clicked");
    event.stopPropagation(); //prevents bubbling
});

document.getElementById("paragraph").addEventListener
("click", function() {
    alert("Parent clicked");
});

//'bubbling is when by triggering the most specific event all parent events are triggered

console.log("===============================");
console.log("=====Even Capturing=======");



document.getElementById("btn2").addEventListener
("click", function(event) {
    alert("Child clicked");
   
});

document.getElementById("paragraph2").addEventListener
("click", function() {
    alert("Parent clicked");
}, true);  //Capturing mode enabled

