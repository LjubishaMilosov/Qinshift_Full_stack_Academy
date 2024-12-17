//addingItemToGroceryList

let groceries = ["Bread", "Milk", "Butter"];

function addToGroceryList(item) {
    if(typeof(item) === "string") {
        groceries.push(item);
        console.log(`You have added ${item} to the list`)
    }
    else {
        console.log(`The item ${item} has not been added to the list`);
    }

}

//calling the function
addToGroceryList("Eggs");