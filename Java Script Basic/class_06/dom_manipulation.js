console.log("===============DOM MANIPULATION=============");


console.log("===============Getting Text from Elements=============");

let mainTitle = document.querySelector(".title");
let subTitle = document.querySelector(".subtitle");
//using textContent
let mainTitleText = mainTitle.textContent;
console.log(mainTitleText);

// innerText
let mainTitleText1 = mainTitle.innerText;
console.log(mainTitleText1);

console.log("===============Changing Text of Elements=============");

mainTitle.textContent = "Dom Manipulation";
subTitle.textContent+= " and the beauty of changing the DOM";

let footer = document.querySelector("footer");
console.log(footer.innerHTML);

footer.innerHTML = `<p>Learn how manipulate the DOM &copy 2024</p>
                    <p>Thanks for reading</p>`;

footer.innerHTML += `
<p>Yet another <b>paagraph</p>`;


//Task : Get student names from user input(prompt) 
 // and render them in an unordered list

function getStudents() {
    let students = [];
    let addMoreStudents = true;

    while(addMoreStudents) {
        let studentname = prompt("Enter student's name (or Cancel to finish");
        console.log(studentname);
        if(studentname === null) {
            addMoreStudents = false;
           // break;
     } else if(studentname.trim() === "") {
            continue;
     } else {
        students.push(studentname);
     }
    }
    return students;
}


// ===> using innerHTML
function renderStudents(students, container) {
    // => best way is to build the string of the html and then just assign it to the container.innerHTML 
    let htmlContent = "<ul>";
    // debugger
    // container.innerHTML = "<ul>" // => if we use it like this, the browser will generate a self-closing tag automatically, which will break our html structure
    for (const student of students) {
        htmlContent += `<li>${student}</li>`
    }
    htmlContent += "</ul>";
    container.innerHTML = htmlContent;
}


//same as function above , only with 'create element'- functon
//this a better way
function renderStudentsUsingCreateElement(students, container) {
    container.innerHTML = "";
    const ul = document.createElement("ul");
    for(const student of students) {
        const li = document.createElement("li");
        li.textContent = student;
        ul.appendChild(li);
}
container.appendChild(ul);
}

let students = getStudents();
console.log(students);

 let studentsContainer = document.getElementById("students-container");
// renderStudents(students, studentsContainer);

 renderStudentsUsingCreateElement(students, studentsContainer);


console.log("===============Changing CSS and Attributes=============");



let studentsTitle = document.querySelector(".students-title");
console.log(`Students title is ${studentsTitle.style}`);


studentsTitle.style.color = "green";
studentsTitle.style.fontSize = "24px";

studentsContainer.style.border = "2px solid green";

console.log(studentsContainer.hasAttribute("class"));
studentsContainer.setAttribute("class", "student-list");
console.log(studentsContainer.hasAttribute("class"));
let classAttributeValue = studentsContainer.getAttribute("id");
console.log(classAttributeValue);

//remove attribute
//studentsContainer.removeAttribute("class");

//adding custom attribute
studentsContainer.setAttribute("customAttribute", true);