let btn = document.getElementById("button");
let fullName = document.getElementById("name");

function printStats(data) {
  let height = document.getElementById("height");
  let weight = document.getElementById("mass");
  let eyeColor = document.getElementById("eyeColor");
  let hairColor = document.getElementById("hairColor");

  height.innerText = `${data.height} cm`;
  weight.innerText = `${data.weight} kg`;
  eyeColor.innerText = `${data.eye_color}`;
  hairColor.innerText = `${data.hair_color} cm`;
}

function printName(data) {
  return (fullName.inner = data.name);
}

btn.addEventListener("click", function () {
  fetch(`https://swapi.dev/api/people/1`)
    .then(function (response) {
      response
        .json()
        .then(function (data) {
          console.log(data);
          printName(data);
          printStats(data);
        })
        .catch(function (errorParse) {
          console.log(errorParse);
        });
    })
    .catch(function (error) {});
});
