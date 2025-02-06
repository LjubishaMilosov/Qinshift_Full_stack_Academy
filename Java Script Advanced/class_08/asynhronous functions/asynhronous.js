// ASYNC / AWAIT
// AWAIT MUST BE INSIDE AN ASYNC METHOD!!
// AWAIT MUST BE USED WITH A FUNCTION THAT RETURNS A Promise(

let documentsUrl =
  "https://raw.githubusercontent.com/qa-codecademy/mkwd13-04-ajs/refs/heads/main/G6/Class%2008/documents.json";

async function showImportnatDocuments() {
    let response = await fetch(documentsUrl);
     let documents = await response.json();
     let important = documents.filter(doc => doc.important);
    showDocuments(important);
     
    
}

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

  try{
    showImportnatDocuments();
console.log("Test test test");

  } catch(error) {
    console.log(error);
    

  }


