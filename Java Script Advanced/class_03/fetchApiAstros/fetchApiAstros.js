let button = document.getElementById("fetchAstrosBtn");
let astrosList = document.getElementById("astros");
button.addEventListener("click", function () {
  fetch("http://api.open-notify.org/astros.json")
    .then(function (response) {
      console.log(response);
      response.json() // returns a promise
        .then(function (data) {
          // here data is parsed from the response and we can use it
          for (let person of data.people) {
            console.log(person.name);
            let li = document.createElement("li");
            li.textContent = person.name;
            astrosList.appendChild(li);
          }
        })
        .catch(function (errorParse) {
          console.log(errorParse);
        });
    })
    .catch(function (error) {
      console.log(error);
    });
});
