function Student(fName, lName, age, averageGrade){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.averageGrade = averageGrade;
}

let students = [new Student("Bob", "Johnson", 20, 5), new Student("Petko" , "Petkovski", 23, 2), 
    new Student("Marko" , "Markovski", 17, 4)];

for(let student of students){
    console.log(`${student.firstName} ${student.lastName}`);
    
}

function logFullName(student){
    console.log(`${student.firstName} ${student.lastName}`);
}

for(let student of students){
    logFullName(student);
}
// H O F - for each
console.log("======================= forEach ============================");

students.forEach(logFullName);  // for each member of students, the logFullName function will be called and the student will be sent as parameter

console.log("===========================================================");

students.forEach(s => console.log(`${s.firstName} ${s.age}`));  // s will be each member of the array

console.log("===========================================================");

students.forEach(function(student){
    console.log(`${student.firstName} ${student.averageGrade}`);});



console.log("====================== F I L T E R ==============================");
// does not change the original array but returns a new aray of filtered elements

    function checkAge(student){
        return student.age > 18;
    }
    let studentsAbove18 = students.filter(checkAge);
    console.log(studentsAbove18);
    console.log(students);
    
console.log("===========================================================");

// chaining of High Order Functions
    students.filter(s => s.age < 18).forEach(logFullName);

console.log("===========================================================");

let studentsBelow18 = students.filter(s => s.age < 18);
studentsBelow18.forEach(logFullName);  // these two lines are replaced by chaining of functions above



console.log("====== M A P ================");
// takes a parameter another function, executes a code on an array and returns a new array with only the mapped values

let studentsAverageGrade = students.map(s => s.averageGrade);  // we create a new array that contains the average grades of students
console.log(studentsAverageGrade);

console.log("===========================================================");

let studentsDescriptions =[];
for(let student of students){
    if(student.averageGrade > 3){
        studentsDescriptions.push(`${student.firstName} ${student.lastName} - ${student.age}`)
    }
}
console.log("studentsDescriptions");
console.log(studentsDescriptions);

console.log("===========================================================");

let studentsDesc = students.filter(s => s.averageGrade > 3)  //at this moment we have a new result array that contains all students with averageGrade > 3
.map(student => `${student.firstName} ${student.lastName} - ${student.age}`);

console.log(studentsDesc);

console.log("===========================================================");

function returnStudentInfo(student){
    return `${student.firstName} - ${student.age}`
}
let studentInfo = students.map(returnStudentInfo);
console.log(studentInfo);

let studentInfosLength = students.map(returnStudentInfo).map(si => si.length);
console.log(studentInfosLength);

students.filter(s => s.lastName.length >5) // aray of students with lastName.length > 5
        .map(returnStudentInfo) // array of strings with firstName and age of of lastname > 5
        .map(si => si.length)  // array of numers representing the length of the strings with firstName and age of of lastname > 5
        .forEach(l => console.log(l)); // forEach will iterate the array of numbers and will execute the arrow function and console log the numbers


students.filter(s => s.age >= 20)  // array of students with age >= 20
        .map(s => `${s.firstName} ${s.lastName} - ${s.averageGrade}`)  // array of strings of data of students with age >= 20
        .map(s => s.length)
        .forEach(sl => console.log(sl));

        // we need to filter the objects before mapping the strings
        // students.map(s => `${s.firstName} ${s.lastName} - ${s.averageGrade}`)
        // .filter(s => s.age > 18)  // the order is important. we have an array of string and we call filter on that array but 
        

console.log("================= reduce ==============================");

let studentsWithAverageGradeAboveTwo = students.filter(s => s.averageGrade > 2)  // array of student objects

let studentAverageGrades = studentsWithAverageGradeAboveTwo.map(s => s.averageGrade);  // array of numbers

// currentSum will have the intial value of 0 in the first iteration and then..
function aggregate(currentSum, grade){
    //debugger
    return currentSum += grade;
}

// reduce has two parts
// - a function
// - an initial value
// the function(first param) takes the initial value as first param and each array member as a second param
console.log(studentsAverageGrade.reduce(aggregate,0));

let sum = students.filter(s => s.averageGrade > 1)
.map(s => s.averageGrade)
.reduce(aggregate, 5);

console.log(sum);

console.log("=================================================================");

numbers = [2,3,4,7,1,5,19];

let concatenate = function(currentResult, currentValue){
    //debugger
    return currentResult+=currentValue;
}

let zbir = numbers.reduce(concatenate, 0);
console.log(zbir);

let concatenatedNumbers = numbers.reduce(concatenate, "");
console.log(concatenatedNumbers);


console.log("==============SORT======================");
// SORT CHANGES THE ORIGINAL ARRAY

// < 0 -> a.averageGrade(the first element in a-b) should be in the position with lower index
// = 0 -> the elements have the same value, nothing changes
// > 0 b.averaeGrade(the second element in a-b) should be in the position with lower index

// students.sort((a, b) => a.averageGrade - b.averageGrade); //asc
// console.log(students);

students.sort((a, b) => b.averageGrade - a.averageGrade); //desc
console.log(students);

console.log("==========================================");

//let copy = students; // pass by reference, each chnge in copy will change the original students array

function copyArray(array){
    let copiedArray = [];
    array.forEach(item => copiedArray.push(item))
    return copiedArray;
}

let copy = copyArray(students);
console.log(copy);

 copy.sort((c1, c2) => c1.averageGrade - c2.averageGrade);
 console.log("copy");
 console.log(copy);
 
 console.log("students");
 console.log(students);



