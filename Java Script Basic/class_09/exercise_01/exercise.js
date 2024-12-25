// $(document).ready(function(){

//     let div = $("#firstWrapper");
//     console.log(div);
//      let paragraph = $("p").first();
//         console.log(paragraph);

//     let firstParagraph = $("p:first");
//     console.log(firstParagraph);

//     let h1 = $("h1").first();
//     console.log(h1);

//     let lastH1 = $("h1").last();
//     console.log(lastH1);

//     let h3 = $("h3").first();
//     console.log(h3);

//     let button = $("button");
//     console.log(button);




// });

jQuery(function() { 

    let div = $("#firstWrapper");
    console.log(div);
     let paragraph = $("p").first();
        console.log(paragraph);

    let firstParagraph = $("p:first");
    console.log(firstParagraph);

    let h1 = $("h1").first();
    console.log(h1);

    let lastH1 = $("h1").last();
    console.log(lastH1);

    let h3 = $("h3").first();
    console.log(h3);

    let button = $("button");
    console.log(button);


    // Exercise 2
     $("h1").first().text("JQuery is Awesome!");
     $("h1").first().after("<p>paragraph after h1: jQuery is Awesome!</p>");
     $("button").css("background-color", "red");


     // EXERCISE 3

         $("button").first().click(function() {
              $("#secondWrapper").hide();
            

         });

         $("p").css("color", "green");

         // somethig is wrong in the next line, corret it!
         $(this).text("Don't Click Me");



});