let myButton = document.getElementById("myButton");

myButton.addEventListener("click", function(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( response => // if the call was successful
        {
            console.log(response);
            response.json()   //returns a Promise
            .then(data =>{  // when the results are returned we can access them
                console.log(data);
            })
            .catch(err =>{
                console.log(err);  // if response.json(), error
                
            })
        })
        .catch(error => { // if error occurs
        console.log(error);
        
    })
})