// Add code here for part 5-7


// Do nt change the code between here and the next comment
const blueParagraph = document.querySelector("#blueText");

function blueToRed() {
    blueParagraph.style.color = "red";
    blueParagraph.textContent = blueParagraph.textContent.replace("blue", "red");
};

const greenParagraphs = document.querySelectorAll(".greenBg");

function greenToPink() {
    for(let greenParagraph of greenParagraphs) {
        greenParagraph.className = 'hotpinkBg';
        greenParagraph.textContent = greenParagraph.textContent.replace("green", "hotpink");
    }
}

const tnrParagraph = document.querySelector("#tnrParagraph");

function tnrToArial() {
    tnrParagraph.style.fontFamily = "arial";
    tnrParagraph.textContent = tnrParagraph.textContent.replace("Times New Roman", "Arial");
}

// Add the event handlers for mouse over, mouse out and click on tnrParagraph here and register them
document.getElementById("textColour").addEventListener("click", blueToRed);
document.getElementById("bgColour").addEventListener("click", greenToPink);
document.getElementById("fonts").addEventListener("click", tnrToArial);

const mouseOver = event => {
    event.target.style.backgroundColor = "limegreen";

    if (event.target.textContent.includes("background")) {
        event.target.textContent = event.target.textContent.replace("out", "over");
    } else {
        let textNode = document.createTextNode(". I have had my background colour changed on mouse over.");
        event.target.appendChild(textNode);
    }

    
};
const mouseOut = event => {
    event.target.style.backgroundColor = "yellow";

    if (event.target.textContent.includes("background")) {
        event.target.textContent = event.target.textContent.replace("over", "out");
    } else {
        let textNode = document.createTextNode(". I have had my background colour changed on mouse out.");
        event.target.appendChild(textNode);
    }
};

tnrParagraph.addEventListener("mouseover", mouseOver);
tnrParagraph.addEventListener("mouseout", mouseOut);

const elementClick = (event) => {
    event.target.style.backgroundColor = "white";
    event.target.textContent = "I have no event listeners attached to me now";
    document.querySelector("#fonts").removeEventListener("click", tnrToArial);
    event.target.removeEventListener("click", elementClick);
    event.target.removeEventListener("mouseover", mouseOver);
    event.target.removeEventListener("mouseout", mouseOut);
    if (event.target.id == "tnrParagraph") {
        blueParagraph.textContent = "Event listeners enabled";
        blueParagraph.addEventListener("click", elementClick);
        blueParagraph.addEventListener("mouseover", mouseOver);
        blueParagraph.addEventListener("mouseout", mouseOut);
    } else {
        tnrParagraph.textContent = "Event listeners enabled";
        tnrParagraph.addEventListener("click", elementClick);
        tnrParagraph.addEventListener("mouseover", mouseOver);
        tnrParagraph.addEventListener("mouseout", mouseOut);
    }
};

tnrParagraph.addEventListener("click", elementClick);
