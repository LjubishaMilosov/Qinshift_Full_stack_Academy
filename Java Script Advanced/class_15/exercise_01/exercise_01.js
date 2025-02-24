// https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json

fetch(
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"
)
  .then(function (response) {
        response.json()
         .then(function (data) {
            let filteredData = data.filter(student => student.age > 20);
            let initialValues = {
               // studentsWithHighestAveraeGrade: filteredData[0],
               studentsWithHighestAverageGrade: null, 
               highestAverageGrade: -Infinity, // filteredData[0].averageGrade
               sumOfAverageGrades : 0,
               sumOfAge: 0
            };
            let result = filteredData.reduce(function(r, currentFilteredStudent){
                r.sumOfAge += currentFilteredStudent.age;
                r.sumOfAverageGrades += currentFilteredStudent.averageGrade;

                if(currentFilteredStudent.averageGrade > r.highestAverageGrade){
                    r.highestAverageGrade = currentFilteredStudent.averageGrade;
                    r.studentsWithHighestAverageGrade = currentFilteredStudent;
                }
                return r
            }, initialValues); // we pas initialValues by reference

            console.log(`The student with highest average grade is 
                ${result.studentsWithHighestAverageGrade.firstName} ${result.studentsWithHighestAverageGrade.lastName} 
                with average grade of 
                ${initialValues.highestAverageGrade}`);
            console.log(`Average avg grade is ${result.sumOfAverageGrades / filteredData.length}`);
            console.log(`Average age is ${result.sumOfAge / filteredData.length}`);

        })
        .catch(function (error) {
            console.log(error);
        });
    })
    .catch(function (error) {
        console.log(error);
});
