const rangeErrorButton = document.querySelector("#rangeErrorButton");
const referenceErrorButton = document.querySelector("#referenceErrorButton");
const syntaxErrorButton = document.querySelector("#syntaxErrorButton");
const typeErrorButton = document.querySelector("#typeErrorButton");
const customErrorButton = document.querySelector("#customErrorButton");

const rangeErrorParagraph = document.querySelector("#rangeErrorParagraph");
const referenceErrorParagraph = document.querySelector("#referenceErrorParagraph");
const syntaxErrorParagraph = document.querySelector("#syntaxErrorParagraph");
const typeErrorParagraph = document.querySelector("#typeErrorParagraph");
const customErrorParagraph = document.querySelector("#customErrorParagraph");

const rangeErrorTry = event => {
    try {
        let pi = 3.14159;
        pi.toFixed(100000);
    } catch(e) {
        rangeErrorParagraph.textContent = `RangeError: ${e.message}`;
    } finally {
        event.target.style.backgroundColor = "hsla(0, 100%, 75%, 1.0)";
    }
};
const referenceErrorTry = event => {
    try {
        ++i;
    } catch(e) {
        referenceErrorParagraph.textContent = `ReferenceError: ${e.message}`;
    } finally {
        event.target.style.backgroundColor = "hsla(120, 100%, 75%, 1.0)";
    }
};
const syntaxErrorTry = event => {
    try {
        eval("foo bar");
    } catch(e) {
        syntaxErrorParagraph.textContent = `SyntaxError: ${e.message}`;
    } finally {
        event.target.style.backgroundColor = "hsla(240, 100%, 75%, 1.0)";
    }
};
const typeErrorTry = event => {
    try {
        const foo = {};
        foo.bar();
    } catch(e) {
        typeErrorParagraph.textContent = `TypeError: ${e.message}`;
    } finally {
        event.target.style.backgroundColor = "hsla(60, 100%, 75%, 1.0)";
    }
};
const customErrorTry = event => {
    try {
        const numerator = 69420;
        const denominator = 0;
        if (denominator === 0) {
            const e = new Error();
            e.message = "You can't divide by zero!";
            throw e;
        }
    } catch(e) {
        customErrorParagraph.textContent = `CustomError: ${e.message}`;
    } finally {
        event.target.style.backgroundColor = "hsla(300, 100%, 75%, 1.0)";
    }
};

rangeErrorButton.addEventListener("click", rangeErrorTry);
referenceErrorButton.addEventListener("click", referenceErrorTry);
syntaxErrorButton.addEventListener("click", syntaxErrorTry);
typeErrorButton.addEventListener("click", typeErrorTry);
customErrorButton.addEventListener("click", customErrorTry);
