var nota = 10;

console.log("type", typeof nota);

console.log("toFixed", nota.toFixed(2));
console.log("toExponential", nota.toExponential(2));
console.log("toString", nota.toString());

console.log(0.1 + 0.2); /* 0.30000000000000004 */
console.log(3 / 0); /* Infinity */
console.log("Fellipe Botelho" * 10); /* NaN - Not a Number (PERIGOSO) */
console.log("0.2" + 0.2);

console.log(Number.isInteger(nota)); /* true */
console.log(Number.isFinite(3 / 0)); /* false */
