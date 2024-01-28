import Dog from "./Dog.js";
import Maths from "./Maths.js";

const buster = new Dog("labrador", "cream", 4, "m");

console.log(buster.getBreed());
buster.makeSound();

console.log(Maths.PI);
console.log(Maths.E);
console.log(Maths.mod(5, 2));
console.log(Maths.pow(5, 2));

// Simulating inheritance with pure JS via prototypes (without object-oriented JS)
//
// Still prefer classes to be honest

// Define constructor of parent class
function Vehicle(model, colour) {
    this._model = model;
    this._colour = colour;
}

// Add abstract method to prototype of parent class
Vehicle.prototype = {
    accelerate: () => {
        throw new Error("This method must be overridden by a child class");
    }
}

// Create child class and inherit properties from parent class
function Car() {
    Vehicle.call(this);
}

// Child class inherits prototype from parent class
Car.prototype = new Vehicle();
Car.prototype.accelerate = () => {
    console.log("Vroom!");
}

// Instantiate instance of child class and call method from this new instance
let myCar = new Car("Renault Megane", "Black");
myCar.accelerate();
