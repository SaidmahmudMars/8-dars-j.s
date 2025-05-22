let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

// "n" harfi bor bo‘lgan so‘zlar
let withN = letterSearch.filter(word => word.toLowerCase().includes('n'));

// "n" harfi yo‘q bo‘lgan so‘zlar
let withoutN = letterSearch.filter(word => !word.toLowerCase().includes('n'));

console.log("N harfi bor so‘zlar:", withN);
console.log("N harfi yo‘q so‘zlar:", withoutN);
