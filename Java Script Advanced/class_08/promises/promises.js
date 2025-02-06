// PROMISES

//Function that works for a certain amount of timers(the waiting simulates working)
// We create a function that returns a Promise

function work(workTime) {
  // we return a promise because we know the function will have to wait for something
  return new Promise((resolve, reject) => {
    // validation if there is no work to be done
    if (workTime <= 0) {
      // whatever we send in reject, it will transfer in the error parameter in the .catch() (Automatically connected)
      reject("There is no work to be done");
    } else {
      console.log("Work is being done...");
    }
    // setTimeout() represents working the amount of time given as a parameter
    setTimeout(() => {
      //Whatever we send in this resolve(), it will transfer the result parameter in the then() (Automatically connected)
      resolve("The work is done successfully!");
    }, workTime);
  });
}

function notification(text) {
  console.log("NOTIFICATION");
  console.log(text);
  console.log("NOTIFICATION");
}

// USING PROMISES

// example what a promise looks like and what are its states
let promise = work(8000);
// console.log(promise);

// Legit way of using this function that returns promise
// .then(anonymousFunction(result)) - When/If the promise is resolved, the anonymous function will be executed with the result from the promise
// .catch(anonymousFunction(error)) - When/If the promise is rejected OR if there is any error
//or issue regading the the promise, the .catch() function will be executed with the error parameter accordingly

// work(2000).then(result => {
//     console.log("The promise is resolved");
//     notification(result);
// }).catch(error => {
//     console.log("The promise is rejected!");
//     console.log(error);
// });

console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++");

// work(0).then(result => {
//     console.log("The promise is resolved");
//     notification(result);
// }).catch(error => {
//     console.log("The promise is rejected!");
//     console.log(error);
// });

let testPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This promise is resolved.YeeY!");
  }, 3000);
  // reject("This promise is Rejected.Sorry!");
});

// testPromise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The Promise() finally finished!");
//   });

let documentsUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G6/Class%2008/documents.json";

function getDocuments() {
  return new Promise((resolve, reject) => {
    $.ajax({
      url: documentsUrl,
      success: (response) => {
        let responseParsed = JSON.parse(response);
        resolve(responseParsed);
      },
      error: (error) => {
        reject(error);
      },
    });
  });
}

getDocuments()
  .then((documents) => {
    // console.log(documents);
    showDocuments(documents);
  })
  .catch((error) => {
    console.log(error);
  });

  function showDocuments(documents) {
    // Validation for the documents types
    if(!documents && typeof(documents) != 'object'){
        throw new Error("Issue wit documents!");
    } 
    if(documents.length === 0){
        throw new Error("No documents found on the server!");
    }
    documents.forEach(doc => {
        console.log(`${doc.name}.${doc.type} (${doc.size}MB)`);
        
    })
  };


console.log("Fetching documents from server using Fetch");


  fetch(documentsUrl)
  .then(response => response.json())
  .then(documents => {
    showDocuments(documents);
  })
  .catch(error => {
    console.log(error);
  });

  