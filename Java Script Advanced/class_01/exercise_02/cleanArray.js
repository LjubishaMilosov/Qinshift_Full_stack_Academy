// * Create a function that cleans an array of any values and leaves only STRINGS
// * Create a function that cleans an array of any values and leaves only NUMBERS


let test = [true, false, 12, 13, 44, 2345, "Bob", "Jill", false, undefined, 1000, null, "Jack", "", "", 99, "Greg", undefined, NaN, 1, 22];

function cleanAllButStrings(array){
        let result = [];
    for(element of array){
        if(typeof(element) == "string"){
            result.push(element);
        }
    }
    return result;
}

console.log(cleanAllButStrings(test));


function cleanAllButNumbers(array){
    let result = [];
for(element of array){
    if(typeof(element) == "number" && !isNaN(element)){
        result.push(element);
    }
}
return result;
}

console.log(cleanAllButNumbers(test));