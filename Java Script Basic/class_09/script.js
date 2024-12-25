// $(document).ready(function(){
//     // jQuery code
//     let allElements = $("*");
//     console.log(allElements);
//     console.log(allElements[0]);


//     //select by id
//     let mainTitleheader = $("#mainTitle");
//     console.log(mainTitleheader.innerHTML);
//     console.log(mainTitleheader[0].innerHTML);

//     // by class
//     let innerWrappers = $(".innerWrapper");
//     console.log(innerWrappers);

//     // by tag
//     let paragraphs = $("p");
//     console.log(paragraphs);

//     //get all elements that satisfy at least one of the selectors
//     let multipleSelectorsElements = $("#mainTitle, .innerWrapper, .wrapper");
//     console.log(multipleSelectorsElements);


//     let firstParagraph = $("p:first"); // first paragraph
//     console.log(firstParagraph);
    
//     let lastParagraph = $("p:last"); // last paragraph
//     console.log(lastParagraph);

//     let firstChild = $("h3:first-child"); // get all h3 elements that are first child of their parent
//     console.log(firstChild);

//     let lastChild = $("h3:last-child"); // get all h3 elements that are last child of their parent
//     console.log(lastChild);

//     let lastChildH3 = $("h3:last-child"); // get all h3 elements that are last child of their parent
//     console.log(lastChildH3);

//     let secondChildParagraphs = $("p:nth-child(2)"); // get all p elements that are second child of their parent
//     console.log(secondChildParagraphs);


// });


jQuery(function() { 

        // jQuery code
    let allElements = $("*");
    console.log(allElements);
    console.log(allElements[0]);


    //select by id
    let mainTitleheader = $("#mainTitle");
    console.log(mainTitleheader.innerHTML);
    console.log(mainTitleheader[0].innerHTML);

    // by class
    let innerWrappers = $(".innerWrapper");
    console.log(innerWrappers);

    // by tag
    let paragraphs = $("p");
    console.log(paragraphs);

    //get all elements that satisfy at least one of the selectors
    let multipleSelectorsElements = $("#mainTitle, .innerWrapper, .wrapper");
    console.log(multipleSelectorsElements);


    let firstParagraph = $("p:first"); // first paragraph
    console.log(firstParagraph);
    
    let lastParagraph = $("p:last"); // last paragraph
    console.log(lastParagraph);

    let firstChild = $("h3:first-child"); // get all h3 elements that are first child of their parent
    console.log(firstChild);

    let lastChild = $("h3:last-child"); // get all h3 elements that are last child of their parent
    console.log(lastChild);

    let lastChildH3 = $("h3:last-child"); // get all h3 elements that are last child of their parent
    console.log(lastChildH3);

    let secondChildParagraphs = $("p:nth-child(2)"); // get all p elements that are second child of their parent
    console.log(secondChildParagraphs);

    console.log("========================= DOM vs JQUERY=========================");

    let firstparagraphDom = paragraphs[0];
    console.log(firstparagraphDom);
    console.log(firstparagraphDom.innerText);


    let firstparagraphJquery = paragraphs.first();
    console.log(firstparagraphJquery);
    console.log(firstparagraphJquery.text());


    //DOM
    // firstparagraphDom.innerText = "New text for the first paragraph";
    // console.log(firstparagraphDom);

    //JQUERY
    firstparagraphJquery.text("New text for the first paragraph with Jquery");
    console.log(firstparagraphJquery.text());


    let lastparagraphjquery = paragraphs.last();
    console.log(lastparagraphjquery);
    console.log(lastparagraphjquery.text());

    let siblingParagraph = lastparagraphjquery.prev();
    console.log(siblingParagraph.text());

    let anotherWay = paragraphs.last().prev().text(); // chaining
    console.log(anotherWay);


    let nextSiblingnext = $("#secondTitle").next().text();
    console.log(nextSiblingnext);

    $("#secondTitle").next().text("Changed text from under subheader");
    console.log($("#secondTitle").next().text());
    

    console.log(innerWrappers.first().html());  // .html() is innerHTML in vanila js
    innerWrappers.first().html("<span>New Span</span>");
    console.log(innerWrappers.first().html());

    console.log($("input").first().val());  // get value from input


    //TOGGLE

    paragraphs.last().hide(); //display property none
    paragraphs.last().show();

    //CSS
    paragraphs.last().css("color", "red");
    paragraphs.last().css("font-size", "24px");
    paragraphs.last().css("background-color", "yellow");

    // After & Before
    paragraphs.last().after("<h2>Thgis is after header</h2>");
    paragraphs.last().before("<h2>This is before header</h2>");

    




});