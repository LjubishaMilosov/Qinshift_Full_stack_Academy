// object literal

let dog = {
    name: "Sparky",
    color: "brown", 
    age: 1,
    favoriteFood: ["Bacon", "Carrot"],
    bark: function(){
        console.log("Bark BARk BARK");
    },
    eat: function(){
        console.log("NOM NOM NOM");
    }
}

dog.bark();
console.log(`${dog.name} ${dog.color}`);

dog.bark = function(){
    console.log("AF AF AF");
}

dog.bark();

dog.age = 2;
console.log(dog.age);

// new Object()

let dog1 = new Object();
dog1.name = "Sparky";
dog1.color = "brown";
dog1.age = 1;
dog1.favoriteFood = ["Bacon", "Carrot"];
dog1.bark = function(){
    console.log("BARK BARK BARK");
}
dog1.eat = function(){
    console.log("NOM NOM NOM");
}

console.log(dog1.name);
dog1.bark();
dog1.eat();

// ternary operator
if(3 >2){
    console.log("Yay");
} else {
    console.log("Nay");
}

let message = (3>2) ? console.log("Yay") : console.log("Nay");;

//Constructor function

function Dog(name, color, age, favoriteFood){
    // if(name == "undefined"){
    //     this.name = "unnamed"
    // } else{
    //     this.name = name;
    // }
               //if name is undefined, name is unnamed, otherwise name is name
    this.name = !name ? "unnamed" : name;
    // this.name = name == undefined ? "unnamed" : name;
    this.color = color;
    this.age = age == undefined ? 0 : age;
    this.hasOwner = false; // we don't send it, every object has default value
    this.favoriteFood = favoriteFood == undefined ? [] : favoriteFood;
    this.bark = function(){
        console.log("BARK BARK BARK");
    }
    this.eat = function(){
        console.log("NOM NOM NOM");
    }
}

let Luna = new Dog("Luna", "Golden", 3, ["Bacon", "Carrot"]);
console.log(Luna.name)

let sparky = new Dog();
console.log(sparky.name);

let hera = new Dog("Hera", "black");
console.log(hera.name);
console.log(hera.age);
console.log(hera.favoriteFood);

