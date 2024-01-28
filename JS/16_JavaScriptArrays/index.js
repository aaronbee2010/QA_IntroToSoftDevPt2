let quote = ["I", "am", "your", "friend"];
console.log(quote); // Array(4) [ "I", "am", "your", "friend" ]
console.log(quote[2]); // "your"

quote.pop();
quote.push("father");
console.log(quote); // [ "I", "am", "your", "father" ]

quote.unshift("Luke");
console.log(quote); // [ "Luke", "I", "am", "your", "father" ]

let erroneousWord = "Luke";
let lukeIsHere = quote.find(word => { return word === erroneousWord});
let lukeIsAt;
/* if "Luke" is found in the quote array, find its index, then use that index
   to replace "Luke" with "No" */
if (lukeIsHere) {
    lukeIsAt = quote.findIndex(word => { return word === erroneousWord});
    quote[lukeIsAt] = "No";
}
console.log(quote); // [ "No", "I", "am", "your", "father" ]

// Generate string from quote array
let output = "";
for (let i = 0; i < quote.length; i++) {
    output += quote[i];
    if (i == 0) {
        output += ","
    }
    if (i != quote.length - 1) {
        output += " ";
    } else {
        output += "!";
    }
}
console.log(output);
