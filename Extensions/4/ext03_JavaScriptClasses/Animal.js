export default class Animal {
    // Use the "#" prefix to make properties private
    #colour;
    #age;
    #sex;

    constructor(colour, age, sex) {
        Object.seal(this);
        this.#colour = colour;
        this.#age = age;
        this.#sex = sex;
    }

    // This method needs to be implemented by a child class
    makeSound() {
        throw new Error("This method must be overridden by a child class");
    }
}
