// One student has 5 exams in the first semester. Student name is Bob Bobsky.
//    His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively.
//    The professor told the students that for passing the first semester they must have average of 8.
//    The student needs to know whether they have passed the semester or not.
//    Alert on screen if the student pass or not! Print on the screen all of the subjects and the student name aswell. Wrap it all in a function

// function studentPassed(student, math, english, science, sport, chemistry) {

//     let average = (math + english + science + sport + chemistry) / 5;
//     if (average >= 8) {
//         return `${student} has passed the semester with an average grade of ${average}.`;
//     } else {
//         return `${student} has not passed the semester with an average grade of ${average}.`;
//     }
// }
// console.log(studentPassed("Bob Bobsky", 10, 6, 8, 9, 6));

const student = prompt("Enter the student's name:");
const grades = [];


for (let i = 1; i <= 5; i++) {
  const grade = parseFloat(prompt(`Enter grade ${i} for ${student}:`));
  if (!isNaN(grade)) {
    grades.push(grade);
  } else {
    alert("Invalid input. Please enter a valid number.");
    i--;
  }
}

function studentPassed(student, grades) {
  
  let total = 0;
  for (let grade of grades) {
    total += grade;
  }
  const average = total / grades.length;

  if (average >= 8) {
    return `${student} has passed the semester with an average grade of ${average}.`;
  } else {
    return `${student} has not passed the semester with an average grade of ${average}.`;
  }
}



console.log(studentPassed(student, grades));
