let btn = document.getElementById("myBtn");
let colorInput = document.getElementById("color");
let fontSize = document.getElementById("fontSize");
let textInput = document.getElementById("text");
let result = document. getElementById("result");

btn.addEventListener("click", function(){
    result.innerHTML = "";  // clear previous result
    if(!colorInput.value){
        console.log("You must enter a color");
        return;
    }
    if(!fontSize.value){
        console.log("You must enter a font size");
        return;
    }
    if(!parseFloat(fontSize.value)){  //parseFloat parses the value toa decimal number/Converts a string to a floating-point number.
        console.log("You must enter a number or font size");
        return
    }
    if(!textInput.value){
        console.log("You must enter a text input");
        return;
    }
    if(!textInput.value.includes(",")){     // if the text does not contain 'comma'(,)
        console.log("You must enter several items");
        return;
    }

    let list = document.createElement("ul");
    let items = textInput.value.split(","); //function with a 'separator' paameter that splits the text by comma and returns and array of strings

    for(let item of items){
        let listItem = document.createElement("li");
        listItem.innerText = item;
        listItem.style.color = colorInput.value;
        listItem.style.fontSize = fontSize + "px";
        list.appendChild(listItem);
    }
    result.appendChild(list);
    
    //reset the values of the inputs
    colorInput.value = "";
    fontSize.value = "";
    textInput.value = "";
})