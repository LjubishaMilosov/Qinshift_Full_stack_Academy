console.log("Document type:");
console.log(typeof(document));

console.log("Get element by id");
console.log(typeof(document.getElementById));

console.log("Empty array");
console.log(typeof([]));  // object

console.log("console");
console.log(typeof(console));  // object

console.log("console log type");
console.log(typeof(console.log));  // function

console.log("Window type:");
console.log(typeof(window));  // object

console.log(window.JSON.stringify({a:7}));
console.log(JSON.stringify({a:7}));


console.log("=========Functions==================");
function sayHello(name) {
    console.log(`Helo ${name}`);
    
}
sayHello("Ana");
window.sayHello("Marko");


console.log("=========== var vs let ==============");

var firstVariable = 5; // var, part of the window
console.log(firstVariable)
console.log(window.firstVariable);

let secondVariable = 7;  // let, not part of the window
console.log(secondVariable);
console.log(window.secondVariable); // undefined

const a = 7;
// a = 5;  // we cannot change the value of a const variable
console.log(a);


console.log("=========Constructors===============");
function Food(name, color){
    this.name = name;
    this.color = color;
    this.compare = function(food){
        debugger
        return this.name === food.name && this.color === food.color
    }
}

function Dog(name, color, age, favoriteFood){
    this.name = !name ? "Unnamed" : name; // if name has no value -> unnamed
    this.color = color;
    this.age = age;
    this.hasOwner = false;
    this.favoriteFood = !favoriteFood ? [new Food("Bacon", "red"), new Food("Bread", "white")] : favoriteFood;
    this.bark = function(){
        console.log("Bark Bark");
    }
        this.isMyFavoriteFood = function(food){  
            let isFound = this.favoriteFood.filter(f => f.name == food.name && f.color == food.color).length > 0;
            if(isFound){
                console.log(`One of my favorite melas is ${food.name}`);
            } else {
                console.log(`I don't prefer ${food.name}`);
            }
        }
}

let barnie = new Dog("Barnie", "brown", 3, [new Food("Beef", "red"), new Food("Apple", "Yellow")]);
console.log(barnie);
barnie.isMyFavoriteFood(new Food("Bacon", "red"));
barnie.isMyFavoriteFood(new Food("Beef", "red"));

let sparky = new Dog("Saprky", "white", 5);
console.log(sparky);

barnie.bark();
sparky.bark = function(){
    console.log("Barking");
    
}
barnie.bark();
sparky.bark();


console.log("========== Comparison ================");

let apple = new Food("apple", "red");
let anotherApple = new Food("apple", "red");

console.log(apple === anotherApple); // comparison by reference // false //apple and anotherApple are referencing different objects

areIdentical = apple.compare(anotherApple); // we can use the method compare from our objects to compare the properties of the objects

console.log(`Are apples identical: ${areIdentical}`);

let yellowApple = new Food("apple", "yellow");
console.log(apple.compare(yellowApple));

let redApple = apple;
console.log(apple === redApple);


let tmpA = 5;
let tmpB = 5;
let tmpC = tmpA; //by value
console.log(tmpA === tmpB); //comparison by value when comparing primitive types

let array1= [1,2];
let array2 = [1,2];
console.log(array1 === array2); //comparison by reference

let array3 = array1; //array1 is passed by reference. Both arrays reference the same array. Every change of array1 affects array3 and vice versa
console.log(array1 === array3); //true, comparison by refernce, both arrays have the same reference


