// Exercise 1
function calculateAverage(numbers) {
    let sum = 0;

    // Make sure i is never >= to numbers.length, otherwise you'll go out-of-bounds (OOB)
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let average = sum / numbers.length;
    return average;
}

let numberList = [2, 4, 6, 8, 10];
let result = calculateAverage(numberList);
console.log("The average is: " + result);

// Exercise 2
function reverseString(inputString) {
    let reversedString = "";

    // Make sure to add character from inputString[0] (first character) to output string
    for (let i = inputString.length - 1; i >= 0; i--) {
        reversedString += inputString[i];
    }
    
    return reversedString;
}

let inputString = "Reverse me";
let result2 = reverseString(inputString);
console.log(result2);

// Exercise 3
// This "error" is more difficult to find, because the code works as intended with the current numberList.
// Think about other possible numberLists and how this code might behave with those

function findMaxNumber(numbers) {
    // This function works with number arrays of length >= 1 only, 
    // so we need to account for empty arrays
    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

let numberList2 = [5, 8, 2, 1, 10];
let result3 = findMaxNumber(numberList2);
console.log("The maximum number is: " + result3);
