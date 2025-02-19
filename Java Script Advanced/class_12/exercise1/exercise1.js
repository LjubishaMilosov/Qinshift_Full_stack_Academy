const individualValue = "individual";
const grouplValue = "group";


function Person(firstName, lastName, age){
    debugger
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.age = age;
    this.getFullName = function(){
        return `${this.firstName} ${this.lastName}`;
    }
}

function Student(firstName, lastName, age, academyName, studentId){
    debugger// inheritance
    Object.setPrototypeOf(this, new Person(firstName, lastName, age));
    this.academyName = academyName;
    this.studentId = studentId;
    this.study = function(){
                                  // person                               // student
        console.log(`The student ${this.firstName} is stdudying in the ${this.academyName}`);
        console.log(`The student ${this.getFullName()} is studying in the ${this.academyName}`);
    }
}

debugger
let student1 = new Student("Petko", "Petkovski", 25, "Qinshift", 1);
console.log(student1);

let student2 = new Student("Ivo", "Ivanovski", 35, "Qinshift", 2);
console.log(student2);

Person.prototype.checkAcademy = function (student){
    console.log(`The academy is ${student.academyName}`);
}

let person = new Person("Stefan", "Stefanovski", 20);
console.log(person);
 person.checkAcademy(new Student("Marko", "Markovski", 20, "Web Programming", 3));

 let student = new Student("Marko", "Markovski", 20, "Web Programming", 3);
 console.log(student);
 console.log(student.__proto__);
 console.log(student.__proto__.__proto__);


 function DesignStudent(firstName, lastName, age, studentId, isStudentOfTheMonth){
    debugger
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Design Academy", studentId));
    this.isStudentOfTheMonth = isStudentOfTheMonth;
    this.attendAdobeExam = function(){
        console.log(`The student ${this.getFullName()} attended Adobe exam!`);
        
    }
 }
 
 let designStudent = new DesignStudent("Petko", "Petkovski", 25, 1,true);
 console.log(designStudent);
 

 function CodeStudent(firstName, lastName, age, studentId){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Code Academy", studentId));

    this.hasIndividualProject = false;
    this.hasGrouplProject = false;
    this.doProject = function(type){
        if(type == individualValue){
            console.log(`The student ${this.getFullName()} has individual project`);
            this.hasIndividualProject = true;
        } else if(type == grouplValue){
            console.log(`The student ${this.getFullName()} has group project`);
            this.hasGrouplProject = true;
        } else {
            console.log("Invalid Type!");   
        }
    }
 }

 let codeStudent = new CodeStudent("Nikola", "Nikolovski", 35, 2);
 console.log(codeStudent);
 codeStudent.doProject(individualValue);
 console.log(codeStudent);
 
 
function NetworkStudent(firstName, lastName, age, studentId, academyPart){
    Object.setPrototypeOf(this, new Student(firstName, lastName, age, "Network Academy", studentId));
    this.academyPart = academyPart;
    this.attendCiscoExam = function(){
        console.log(`The student ${this.getFullName()} attended Cisco exam!`);
    }
}

let networkStudent = new NetworkStudent("Stefan", "Stfanovski", 25, 5, 1)
networkStudent.attendCiscoExam();

designStudent.checkAcademy(designStudent);
codeStudent.checkAcademy(codeStudent);
networkStudent.checkAcademy(networkStudent);