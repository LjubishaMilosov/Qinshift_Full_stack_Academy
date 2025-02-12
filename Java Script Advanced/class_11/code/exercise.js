function Academy(name, students, subjects, start, end){
    this.name = !name ? "unnamed" : name;
    this.students = !students ? [] : students;
    this.sbjects = !subjects ? [] : subjects;
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;  // with this.subjects we are working with the subjects property from our object not the subjects that was sent as param. this way if null f undefined...
    this.printStudents = function(){
        this.students.forEach(student => console.log(student));
    }
    this.printSubjects = function(){
        this.subjects.forEach(subject => console.log(subject));
    }
}

function Subject(title, isElective, academy, students ){
    this.title = !title ? "Unnamed" : title;
    this.isElective = isElective;
    this.academy = academy;
    this.students = !students ?  [] : students;
    this.numberOfClasses = 10;  // default value
    this.overrideClasses = function(numOfClasses){
        // if(numOfClasses < 3){
        //     return;
        // }
        // this.numberOfClasses = numOfClasses;
        this.numberOfClasses = numOfClasses < 3 ? this.numberOfClasses : numOfClasses;
    }
}

let advancedJS = new Subject("Advanced JS", false, "Qinshift", []);
advancedJS.overrideClasses(15);
console.log(advancedJS.numberOfClasses);
advancedJS.overrideClasses(1);
console.log(advancedJS.numberOfClasses);

function Student(firstName, lastName, age){
    this.firstName = !firstName ? "Unnamed" : firstName;
    this.lastName = !lastName ? "Unnamed" : lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    this.startAcademy = function(academy){
        this.academy = academy;
        //
        this.academy.students.push(this);  //
    }
    this.startSubject = function(subjectObject){
        if(this.academy == null){
            console.log("The student must be assigned to an academy");
            return;
        }
        //
        if(this.academy.subjects.filter(x => x.title == subjectObject.title).length == 0){
            console.log(`The subject is not a part of ${this.academy.name}`);
            return;
        }
        if(this.currentSubject != null){
            this.completedSubjects.push(this.currentSubject);
  //for example, you are...
          }
          this.currentSubject = subjectObject;
          this.currentSubject.students.push(this); //
    }

}

let cSharp = new Subject("C#", false, "Qinshift", []);
let qinshift = new Academy("Qinshift", [], [advancedJS, cSharp], new Date(), new Date());
let student = new Student("Petko", "Petkovski", 25);
student.startAcademy(qinshift);

console.log(student);
console.log(qinshift);

student.startSubject(advancedJS);
console.log(student);
console.log(advancedJS);

