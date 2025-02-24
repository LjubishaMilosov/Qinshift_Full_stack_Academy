class Vehicle{
    constructor(id, name, serisNum, price){
        this.id = id;
        this.name = name;
        this.seriesNum = serisNum;
        this.price = price;
    }
    printVehicle(){
        console.log(`Vehicle ${this.name} ${this.seriesNum} ${this.price} EUR`);
    }
}

//CLASSES -> templates
//OBJECTS -> instances

let vehicle = new Vehicle(1, "opel", "34134", 15000);
console.log(vehicle);
console.log(vehicle.name);
vehicle.printVehicle();// vehicle is created from the class Vehicle



console.log("==================Inheritance========================");

class WheeledVehicle extends Vehicle{
    constructor(id, name, seriesNum, price, numberOfWheels){   // with the constructor we initialize the value of our properties.
        //all the properties belong to myBike object
        //super => constructor of parent(constructor of Vehicle)
        //initialize and inherit properties
        super(id, name, seriesNum, price); // here the constructor of Vehicle is called

        // specify properties for wheeledVehicle
        this.numberOfWheels = numberOfWheels;
    }
    driveWheeledVehicle(){
        console.log(`Drive carefully the ${this.name}`);
    }
}

let bike = new WheeledVehicle(2, "myBike", "35223", 200, 2);
console.log(bike);

class Car extends WheeledVehicle{
    constructor(id, name, seriesNum, price, numberOfWheels, plateNumber, hasAC){
        super(id, name, seriesNum, price, numberOfWheels);
        this.plateNumber = plateNumber;
        this.hasAC = hasAC;
    }
    buyCar(money){
        money >= this.price ? console.log("Congrats! You bought a car") : console.log("Yoy're a poor bastard!");
    }

    // belongs to the class, not to the specific object instance
    static addAirConditioning(carObject){
        if(carObject.hasAC){
            console.log("The car already has AC");
        } else {
            carObject.hasAC = true;
            carObject.price += 500;
        }
    }
    static print(){
        console.log("Hello from Car class");
    }
    static isRentable = false;
    static numberOfManufacturedCars = 0;
}

let car = new Car(5,"BMW", "222", 50000, 4, "SK123AB");
console.log(car);

car.buyCar(20000);
Car.addAirConditioning(car);
Car.print();

Car.isRentable = true;
console.log(Car.isRentable);




// GETTERS & SETTERS

class ElectricCar extends Car{
    constructor(id, name, seriesNum, price, numberOfWheels, plateNumber, hasAC, owner, numOfDoors){
        super(id, name, seriesNum, price, numberOfWheels, plateNumber, hasAC);
        this.owner = owner; // this will call the setter
        this.numOfDoors = numOfDoors;
    }
    get owner(){
        console.log(`We are getting the value of the owner`);
        
        return this._owner;
    }

    set owner(ownerName){
        console.log(`We are setting the value of the owner`);
        console.log(`We will not accept empty string`);
        !ownerName ? this._owner = "no owner" : this._owner = ownerName;
    }
}

let electricCar = new ElectricCar(6, "tesla", "3454", 50000, 4, "SK1234AB", true, "Petko", 3);
console.log(electricCar);
electricCar.owner = "Stefan"; // this will call set
console.log(electricCar.owner); //this will call get



