let academy = {
    trainer: "Tijana Stojanovska",
    assistant: "Murat Koca",
    name: "Qinshift",
    students: ["Viktor", "Ivan", "Sinisha", "Martin"]
};

// Serialization (get JSON string from JS object)
let jsonString = JSON.stringify(academy);
console.log(`JSON string: ${jsonString}`);

// Parse / Deserialization
let jsObject = JSON.parse(jsonString);
console.log(jsObject);
console.log(jsObject.trainer);

