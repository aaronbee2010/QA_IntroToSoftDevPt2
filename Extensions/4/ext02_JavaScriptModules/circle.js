export { area, circumference };

function area(r) {
    return Math.PI * Math.pow(r, 2);
}

function circumference(r) {
    return 2 * Math.PI * r;
}

export default {
    radius: 5,
    centre: [0, 0],
}
