import c, * as Circle from "./circle.js";

console.log(Circle);

const p1Text = document.querySelector("#p1");
const p2Text = document.querySelector("#p2");
const regex = /: .*$/;

const calcRadius = () => {
    const radius = document.querySelector("#number").value;
    const area = Circle.area(radius);
    p1Text.textContent = p1Text.textContent.replace(regex, `: ${area}`);
};

const calcCircumference = () => {
    const radius = document.querySelector("#number").value;
    const circumference = Circle.circumference(radius);
    p2Text.textContent = p2Text.textContent.replace(regex, `: ${circumference}`);
};

document.querySelector("#button").addEventListener("click", calcRadius);
document.querySelector("#button").addEventListener("click", calcCircumference);
