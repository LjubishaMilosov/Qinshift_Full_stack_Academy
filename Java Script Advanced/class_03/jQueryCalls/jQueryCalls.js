$(document).ready(function () {
  $("#getStudentsBtn").click(function () {
    $.ajax({
      url: "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/shared_data/students.json",
      success: function (response) {
        debugger;
        console.log(response);
        //response JSON _> js object
        let parsedObject = JSON.parse(response);
        console.log(parsedObject);
        for (let student of parsedObject.students) {
          $("#students").append(`<li>${student}</li>`);
        }
      },
      error: function (response) {
        console.log("The request failed");
        console.log(response);
      },
    });
  });


$("#getAstrosBtn").click(function () {
  $.ajax({
    url: "http://api.open-notify.org/astros.json",
    success: function (response) {
        debugger
      console.log(response);
      for(let astro of response.people){
        $("#students").append(`<li>${astro.name}</li>`)
      }
    },
    error: function (error) {
      console.log("An error occured");
      console.log(error);
    },
  });
});

});