console.log("==========Document Object Model=====================");
console.log(window);
console.log(window.document);

console.log(document.title);

console.log(document.URL);


let headerElement = document.getElementById("main-header");
console.log(headerElement);
console.log(headerElement.attributes);

console.log("==========Selecting by class name=====================");

let features = document.getElementsByClassName("feature");
console.log(features);


console.log("==========Selecting by Tag name=====================");

let tags = document.getElementsByTagName("p");
console.log(tags);


console.log("==========Selecting by CSS Selectors=====================");

//selection of single element:
let subtitle = document.querySelector(".subtitle");
console.log(subtitle);

let sectionheader = document.querySelector("#features >h2");
console.log(sectionheader);

//selection of multiple elements:

let allFeatures = document.querySelectorAll(".feature");
console.log(allFeatures);

let featureList = document.querySelector(".feature-list");
console.log(featureList);

console.log("The children of feature list:", featureList.children);
console.log("The parent of feature list:", featureList.parentElement);
console.log("The grandparent of feature list:", featureList.parentElement.parentElement);

let previousSibling = featureList.previousElementSibling;
console.log(previousSibling);
let nextSibling = featureList.nextElementSibling;
console.log(nextSibling); // nema sibling