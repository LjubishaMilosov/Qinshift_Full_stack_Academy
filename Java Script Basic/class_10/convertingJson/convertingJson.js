let academy = {
    academyname: "Code Academy",
    subject: "basicJS",
    trainers: ["Tijana", "Murat"],
    courses: ["Java Script", "Java", "C#", "Python"],
    numberOfStudents: 18,
    isRemote: true,

}


//we pack the object in order to send it to server
//the client and the server understand JSON format
// we need to convert it from js object to json

let jsObjectToJSON = JSON.stringify(academy);  // serialization(JS object to JSON)
console.log(jsObjectToJSON);


let jsonToJsObject = JSON.parse(jsObjectToJSON);
console.log(jsonToJsObject);