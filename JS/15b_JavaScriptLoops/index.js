for (let i = 1; i < 10; ++i) {
    console.log(i);
}

let x = 2;
let loopCounter = 0;
while (x < 10000) {
    x = x ** 2;
    ++loopCounter;

    console.log(`x = ${x}, loopCounter = ${loopCounter}`);
}

for (let i = 9; i > 0; --i) {
    console.log(i);
}

/*
    7 falsy bois

    * 0
    * -0
    * ""
    * undefined
    * null
    * NaN
    * false
*/
