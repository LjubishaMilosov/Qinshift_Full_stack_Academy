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
<p>Yet another paagraph</p>`;


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
     } else if(studentname.trim() === ""){

     } else {
        students.push(studentname);
     }
    }
    return students;
}

function renderStudents(students, container) {
    container.innerHTML = "";
    container.innerHTML+="<ul>"
    for(const student of students) {
        container.innerHTML += `<li>${student}</li>`;
    }
    container.innerHTML+="</ul>"
}

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
console.log(studentsTitle.style);

studentsTitle.style.color = "green";
studentsContainer.style.border = "2px solid green";