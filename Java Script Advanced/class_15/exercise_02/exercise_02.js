async function getData(){
    try{
        let response = await fetch ("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json"); // we use await because we want the rest of the code to wait for the fetch to end
        let students = await response.json();
        let fullNames = await getStudentFullname(students);
        // TODO get documents & sot them
    }
    catch{
        console.log("An error occured!");
        
    }
}
function getStudentFullname(students){
    return new Promise(function(resolve,reject){
        if(!students || students.length == 0){ // validation, the negative scenario
            reject("No students!"); // we reject it, we do not have students whose names we can map
            return;
        }

        setTimeout(() => {resolve(students.map(s => `${s.firstname} ${s.lastname}`));}, 5000);
    })
}