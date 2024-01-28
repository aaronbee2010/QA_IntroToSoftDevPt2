const colours = ['red', 'green', 'blue', 'orange', 'lime','olive', 'black', 'yellow'];

function buildP(placeholder, num) {
    let i = 0;
    let j;
    do {
        const p = document.createElement("p");
        // textNodes appear to expire after one use?
        const textNode = document.createTextNode("Have you tried turning it off and on again?");
        p.appendChild(textNode);

        /*  Generate random index number between 0 and (colours.length - 1), both inclusive.

            We then use this index to generate a random colour and assign it to the "color"
            property of the new <p> element  */
        j = Math.floor(Math.random() * colours.length);
        p.style.color = colours[j];

        placeholder.appendChild(p);

        i++;
    } while (i < num);
}

const myPlaceholder = document.querySelector("#placeholder");
buildP(myPlaceholder, 5);
