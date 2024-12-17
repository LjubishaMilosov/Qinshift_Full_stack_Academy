groceries = ["Bread", "Milk", "Butter", "Salad"];

function showGroceryList(){
    let i = 0;
    listNum = 1;

    console.log("My groceries list:");

    while(i < groceries.length) {
        if(groceries[i] !== null) {
            console.log(listNum + ". " + groceries[i]);
            listNum++;
        }
        i++;
    }
}

showGroceryList();