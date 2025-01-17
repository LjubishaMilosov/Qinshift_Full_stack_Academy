// Create a constructor function for Student objects with:
// Properties:
    // firstName
    // lastName
    // birthYear
    // academy
    // grades - array of numbers
// Methods:
    // getAge() - returns age of student
    // getInfo() - returns "This is student firstName* lastName* from the academy academy*!"
    // getGradesAverage() - returns the average of the student grades
// Create an array with 3 students



function Student(first_name, last_name, birth_year, acd, grades){
    this.firsName = !first_name ? "unnamed" : first_name;
    this.lastName = !last_name ? "unnamed" : last_name;
    this.birthYear = birth_year;
    this.academy = !acd ? "unnamed" : acd;
    this.grades = grades;
    this.getAge = function(){
        if(!this.birthYear){  //we need to do the check here because we dont want to do validation with invalid data
            return "The student has no birth year!"
        } else{
            return (new Date()).getFullYear() - this.birthYear;
        }
    }
    this.getInfo = function(){
        // if(this.firsName == "unnamed"){
        //     return "There is no info for first name."
        // }
        // if(this.lastName == "unnamed"){
        //     return "There is no info for last name."
        // }
        // if(this.academy == "unnamed"){
        //     return "There is no info for academy."
        // }
        if(this.firsName == "unnamed" || this.lastName == "unnamed" || this.academy == "unnamed"){
            return "There is some missing info about the student"
        } 
            return `This is student ${this.firsName} ${this.lastName} from the academy ${this.academy}`;
    }

    this.getGradesAverage = function(){
        if(!this.grades || this.grades.length ==0){
            return "There are no grades";
        } else{
            let sum = 0;
        for(let grade of grades){
            if(isNaN(grade)){  // if the grade is not a number -> skip it
                continue;
            } else{
                sum += grade;
            }
          }
          return sum / this.grades.length;
        }
    }
}

let students = [new Student("Viktor", "Petrovski"), new Student("Kristijan", "Sofronijoski", 1995, "Qinshift", [5,5,4,3,5]), new Student("Martin", "Popovski", 1997, "Qinshift")];

console.log(students[0].getInfo());
console.log(students[1].getGradesAverage());
console.log(students[2].getAge());