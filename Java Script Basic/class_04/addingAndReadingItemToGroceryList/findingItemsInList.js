groceries = ["Bread", "Milk", "Butter", "Salad"];

function checkForItemInGroceryList(item) {
    for(let listItem of groceries) {
        if(listItem === item) { // check the inputed item
            console.log(`The item ${item} was found`);
            return listItem; //return always exits of the function
        } // we dont use else to avoid reptition of item not found
    }
    console.log(`There was  ${item} item in the list!`);
    return null;  // will not be executed if the previous retun is executed
    
}

let Searcheditem = checkForItemInGroceryList("Beer");