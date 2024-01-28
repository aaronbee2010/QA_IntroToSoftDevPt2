// Arithmetic Operators
console.log(5 + 5); // 10
console.log(5 * 10); // 50
console.log(10 % 3); // 1
console.log(5 + 10 / 2 * 5 - 10); // 20
console.log((6 + 10) / 2 * 5 - 10); // 30

// Assignment operators
let x = 5;
console.log(x = x + 1); // 6 <- increment then return
console.log(x += 1); // 7    <- increment then return
console.log(x++); // 7       <- return then increment
console.log(++x); // 9       <- increment then return

// Relational operators
console.log(5 > 3); // true
console.log(3 != 3); // false
console.log((3 <= 2) && (5 > 2)); // false
console.log(!(5 > 3)); // false

// Mismatched types
console.log(5 + "5"); // "55"
console.log(5 + true); // 6
console.log(5 * "5"); // 25
console.log(1 == true); // true
console.log(1 === true); // false
