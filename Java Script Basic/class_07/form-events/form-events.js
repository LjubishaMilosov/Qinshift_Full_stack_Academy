console.log("========FORM EVENTS========");



console.log("========Get Value From Input========");

const randomTextInput = document.getElementById("random-text-input");

const showValueBtn = document.getElementById("show-value-btn");
const displayTextParagraph = document.querySelector(".display-text"); 

showValueBtn.addEventListener("click", function() {
    const inputValue = randomTextInput.value;
    console.log(inputValue);

    displayTextParagraph.computedStyleMap.color = "red";
    displayTextParagraph.textContent = inputValue;

    randomTextInput.value = ""; //reset the input field
    
});

// randomTextInput.addEventListener("input", function() {
//     console.log(randomTextInput.value);

randomTextInput.addEventListener("input", function(e) {
    console.log(e.target.value);
});



console.log("=====================================================");
console.log("========Form Event Listeners(Create user)========");


function addStudentToList (firstName, lastName, listElement) {
    const studentItem = document.createElement("li");
    studentItem.textContent = `${firstName} ${lastName}`;
    listElement.appendChild(studentItem);
}

const form = document.getElementById("users-form");
const usersList = document.getElementById("users-list");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstNameValue = document.getElementById("user-first-name").value;
    const lastNameValue = document.getElementById("user-last-name").value;

    addStudentToList(firstNameValue, lastNameValue, usersList);

    form.reset();
});