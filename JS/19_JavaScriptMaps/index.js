let hanSolo = new Map();
hanSolo.set("vehicle", "Millenium Falcon");
hanSolo.set("bff", "Chewbacca");
hanSolo.set("sweetheart", "Leia");

console.log(hanSolo.size); // Get number of keys in map
console.log(hanSolo.get("vehicle")); // Get value of corresponding key
console.log(hanSolo.has("sweetheart")); // Check if key exists in map
console.log(hanSolo.has("jedi"));

hanSolo.set("son", "Ben");
console.log(hanSolo.get("son"));

// for (const property of hanSolo) {
//     console.log(`${property[0]}: '${property[1]}'`);
// }

for (const [key, value] of hanSolo) {
    console.log(`${key}: '${value}'`);
}

hanSolo.set("bff", "Luke");
hanSolo.delete("son");
hanSolo.clear();
console.log("Cleared 'hanSolo' map...");

for (const [key, value] of hanSolo) {
    console.log(`${key}: '${value}'`);
}
