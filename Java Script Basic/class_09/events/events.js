jQuery(function() { 

    let button = $("button").first();

    // first way of doing it
    button.on("click", function() {
        console.log("Hello from the first click event listener!");
    });

    // Second way
    button.click(function() {
        let paragraphs = $("p");
        paragraphs.hide();

//$(this) -> represent the target element of the event as JQuery element
// this -> button
$(this).text("Click Me");

    });


    });