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
