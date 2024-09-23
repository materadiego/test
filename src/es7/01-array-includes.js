// Arrays
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers.includes(1));

const list = ["Otto", "Diego", "Pepe"];
console.log(list.includes("diego"));
console.log(list.includes("Diego"));

// Objetos
const letras = { a: 1, b: 2, c: 3 };

console.log("a" in letras);
console.log(letras.hasOwnProperty("a"));
