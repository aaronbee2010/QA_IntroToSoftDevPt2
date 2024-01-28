const nameInput = document.querySelector("[name='name']");
const myForm = document.querySelector("form");

const formSubmit = (event) => {
    event.preventDefault();
    window.alert("The form has been submitted");

    for (let i = 0; i < 3; ++i) {
        console.log(event.target[i].value);
    }
};

const validateNameLength = event => {
    if (event.target.value.length < 2) {
        window.alert("Name is not long enough");
        nameInput.focus();
    }
};

myForm.addEventListener("submit", formSubmit);
nameInput.addEventListener("change", validateNameLength);
