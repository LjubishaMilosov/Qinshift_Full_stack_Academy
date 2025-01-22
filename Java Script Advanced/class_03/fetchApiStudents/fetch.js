let button = document.getElementById("fetchStudentsBtn");
let studentsList = document.getElementById("students");
button.addEventListener("click", function () {
  fetch(
    "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json"
  )
    .then(function (response) {  // this is connected to the fetch
      //Success
      //response is a whole object that was sent from the server and that contains data in json format
      console.log(response);
      
      response.json() // .json() reads and parses the json data from the response object and .json returns a promise
      // because it is a promise, we need 'then' and 'catch' to handle the possible scenarios from that promise
        .then(function (data) {    // this is connected to the .json()
          // Success in getting and parsing the json daa from the response
          // now we can work with the daa
          console.log(data); // the data parsed as a javascript object
          console.log(data.academy);  // -> Code
          for(let student of data.students){
           let li = document.createElement("li"); //create list element
           li.textContent = student; // assign the student value to li 
           studentsList.appendChild(li); // append list items to unordered list
            console.log(student);
            
          }
        })
        .catch(function (unsuccessfulParse) {   // this is connected to the .json()
          // if there was an error while getting or parsing the json data that as already given back be the server
          console.log(unsuccessfulParse);
        });
    })
    .catch(function (unsuccessfulResponse) { // this is connected to the fetch
      // if an error in the call happens
      console.log(unsuccessfulResponse);
    });
});
