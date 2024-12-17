groceries = ["Bread", "Milk", "Butter", "Salad"];

function deleteItemFromGroceries(item) {
    for(let i=0; i <groceries.length; i++){
        if(groceries[i] === item){
            console.log(`Item ${item} has been deleted!`);
            groceries[i] = null;  // we set the deleted item to null
            return true;
        }   
    }
    return false;
}

deleteItemFromGroceries("tea");
deleteItemFromGroceries("Milk");
