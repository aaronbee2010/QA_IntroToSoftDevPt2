let darthVader = {
    allegiance: "Empire",
    weapon: "lightsabre",
    sith: true
};
// console.log(darthVader.allegiance);
// console.log(darthVader.weapon);
if (darthVader.sith) {
    // console.log(darthVader.jedi);
    // console.log(Object.keys(darthVader).length);
}

darthVader.children = 2;
darthVader.childNames = ["Luke", "Leia"];
// console.log(darthVader.children);
// console.log(darthVader.childNames[0]);

for (const key in darthVader) {
    // console.log(`${key}: ${darthVader[key]}`);
}

darthVader.allegiance = "The light side";
for (const key in darthVader) {
    // console.log(`${key}: ${darthVader[key]}`);
}

delete darthVader.children;
for (const key in darthVader) {
    // console.log(`${key}: ${darthVader[key]}`);
}

let{allegiance, weapon, sith: isSith, childNames} = darthVader;
// console.log(allegiance);
// console.log(weapon);
// console.log(isSith);
// console.log(childNames);

for (const key in darthVader) {
    delete darthVader[key];
}
console.log(darthVader);
