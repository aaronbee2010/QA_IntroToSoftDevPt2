// Like Math, but Bri'ish
export default class Maths {
    static #pi = 3.14159265359;
    static #e = 2.718281828459;

    constructor() {
        Object.seal(this);
    }

    static get PI() {
        return this.#pi;
    }

    static get E() {
        return this.#e;
    }

    static mod(a, b) {
        return a % b;
    }

    static pow(a, b) {
        return a ** b;
    }
}
