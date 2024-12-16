// OBJECTS


//*********Literal Notation************

let hotel = {
    name: 'Aleksandar Palace',
    rooms: 100,
    bookedRooms: 40,
    roomTypes: ['single', 'double', 'suite'],
    checkAvailability: function() {
        return this.rooms - this.bookedRooms;
    } 
}

console.log(`hHotel name is ${hotel.name}`);
console.log(`How many rooms are booked? - ${hotel.bookedRooms}`);
console.log(`How many rooms are available? - ${hotel.checkAvailability()}`);


// Exercise 1:

let person = {
    firstName: "Petko",
    lastName: "Petkovski",
    age: 25,
    embg: 2345678765,
    canCode: true
};

console.log(`Hello ${person.firstName} ${person.lastName}`);


// Constructor Notation

let newObj = new Object();
console.log(newObj);
newObj.newProperty = "New Property";
newObj.newMethod = function(){
    console.log("I am an object method");
    
}
newObj.newMethod(); // calling the method

console.log(newObj.newProperty); // "New Property"
// updating an object
newObj.newProperty = "UpdatedProperty";
console.log(newObj.newProperty); // "UpdatedProperty"

console.log(newObj);
// deleting a property from an object
delete newObj.newProperty;
console.log(newObj);


// Exercise 2

person.name = "Viktor";
person.lastName = "Petrovski";
person.age = 25;
person.email = "viktor@gmail.com";
canCode = true;

console.log(`Hello ${person.name} ${person.lastName}`);

// Exercise 3

let trainer = {
    name: "Viktor",
    lastname: "Stefanovski",
    academy: "Qinshift Academy",
    lecture: "Objects"
}

delete trainer.lecture;
console.log(trainer);

trainer.age = 30;
console.log(trainer);

trainer.getFullName = function(){
    return `Full name is: ${this.name} ${this.lastname}`
}
console.log(trainer.getFullName());
;



// ***********Constructon Function************

//the name of a constructor is with Capital name
function Hotel (hotelName, rooms, booked) {
    // this.name -> points to the property of the object that we are creating -> the name part is the parameter that is sent to this function
    this.name = hotelName;
    this.rooms = rooms;
    this.booked = booked;

}

let hotelContinental = new Hotel("Continental", 67, 22);
console.log(hotelContinental);

let hotelNino = new Hotel("Nino", 20, 4);
console.log(hotelNino);

function windowSize(){
    let width = this.innerWidth;
    let height = this.innerHeight;
    console.log(width + " " + height);
    
}
windowSize();

let rectangle = {
    width: 10,
    height: 20,
    getArea: function(){
        return this.width * this.height;
    }
}
console.log(rectangle.getArea());








