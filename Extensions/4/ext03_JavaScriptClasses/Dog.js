import Animal from "./Animal.js";

// Inherit from Animal class
export default class Dog extends Animal {
    #breed;

    constructor(breed, colour, age, sex) {
        super(colour, age, sex);
        Object.seal(this);
        this.#breed = breed;
    }

    getBreed() {
        return this.#breed;
    }

    // Polymorphism
    makeSound() {
        console.log("Woof!");
    }
}
