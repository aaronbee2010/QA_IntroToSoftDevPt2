// Set up code - do not remove
document.querySelector('button#textColour').addEventListener('click', blueToRed);
document.querySelector('button#bgColour').addEventListener('click', greenToPink);
document.querySelector('button#fonts').addEventListener('click', tnrToArial);
// Do not alter lines of code 2-4!

function blueToRed() {
    let blueParagraph = document.getElementById("blueParagraph");
    blueParagraph.style.color = "#ff0000";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
}

function greenToPink() {
    let greenBgs = document.querySelectorAll(".greenBg");
    // As references are passed to the iterable variable, we can use these
    // iterables to modify the properties of the original elements they point to.
    //
    // This is because the greenBgs array consists of objects, which are non-primitive values!
    //
    // If the iterables had primitive values passed to them, then the iterables could NOT
    // be used to modify the corresponding element in the array!
    for (const greenBg of greenBgs) {
        greenBg.style.backgroundColor = "#ff00ff";
        greenBg.textContent = greenBg.textContent.replace("green", "pink");
    }
}

function tnrToArial() {
    let tnrParagraph = document.getElementById("tnrParagraph");
    tnrParagraph.style.fontFamily = "Arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}
