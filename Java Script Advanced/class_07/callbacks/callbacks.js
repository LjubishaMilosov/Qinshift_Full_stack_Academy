function firstGreeting(callBack){
    setTimeout(()=>{console.log("First greeting");
                    callBack();
    }, 4000);
}

function secondGreeting(){
    console.log("Second greeting");
}

firstGreeting(secondGreeting);

console.log("=============================================");

function calculate(callBack, num1, num2){
    console.log("Doing some calculation.. calling the callback function..");
    return callBack(num1, num2);
}

// function sum(x,y){
//     return x + y
// }

let result = calculate((x, y) => x + y, 4, 5);
console.log(result);

// AJAX call

function makeAjaxCall(callBackFn, callBackFnGreeting){
    fetch("https://swapi.dev/api/people/1/")
    .then(function(response){
        response.json()
        .then(function(data){
            debugger
            console.log("Data is here");
                callBackFn(data);
                callBackFnGreeting();
        })
        .catch(function (error){
            console.log(error);
            
        })
    })
    .catch(function (error){
        console.log(error);
        
    })
}

function printPerson(personObject){
    setTimeout(() => {
        console.log(personObject);
        }, 4000);
    
}

function greetOurPerson(){
    debugger
    console.log("Hello star wars");
    ;
}
makeAjaxCall(printPerson, greetOurPerson);
