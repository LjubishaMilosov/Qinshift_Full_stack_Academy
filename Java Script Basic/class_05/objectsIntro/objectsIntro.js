// let hotelName = "Our Hotel";
// let hotelRooms = 20;
// let bookedHotelRooms = 5;



// Constructor Notation - creating of objects

let hotel = new Object();
hotel.name = "Our Hotel";
hotel.numOfRooms = 20;
hotel.bookedRooms = 5;
hotelmOfStars = 4;
hotel.greeting = function () {
    alert("Hello from our hotel");
}

console.log(`Number f rooms in our hotel: ${hotel.numOfRooms}`);

hotel.greeting();

// ----------------------------------------------------------------


let anotherHotel = {
    name: "Another Hotel",
    numOfRooms: 60,
    hasGym: false,
    roomTypes: ["single", "double", "suite"],
    printRoomTypes: function () {
        console.log(`Types of rooms`);
        for (let roomType of this.roomTypes) {
            console.log(roomType);
     }
 }
}
console.log(`Welcome to ${anotherHotel.name}`);

anotherHotel.printRoomTypes();
