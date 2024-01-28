// declaration: let a;
// assignment: a = 5;
// initialisation (declaration + assignment in same statement): let b = 7;


let numTest = 45.324568; // number
console.log(numTest); // 45.324568

let twoDecimalPoints = numTest.toFixed(2); // string
console.log(twoDecimalPoints); // 45.32

let stringTest = `I am the very model of a modern major general`;
let indexOfM = stringTest.indexOf(`m`);
console.log(indexOfM); // 3 <- 0-based index of first match

indexOfM = stringTest.indexOf(`M`);
console.log(indexOfM); // -1 <- no result found

stringTest = stringTest.toUpperCase(); // "I AM THE VERY MODEL OF A MODERN MAJOR GENERAL"
indexOfM = stringTest.indexOf(`M`);
console.log(indexOfM); // 3

// indexOf -> first occurence
// lastIndexOf -> last occurence
let start = stringTest.indexOf("MODEL");
let end = stringTest.lastIndexOf('MAJOR');

// param1 = inclusive, param2 = exclusive
let subStr = stringTest.substring(start, end);
console.log(subStr); // "MODEL OF A MODERN "

document.write(`<p>${subStr}</p>`);

















