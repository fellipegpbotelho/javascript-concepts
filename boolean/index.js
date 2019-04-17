var isento = true;
var estudante = false;

console.log(isento.toString());
console.log(estudante.valueOf());
// falsy
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!""); // false
console.log(!!false); // false
console.log(!!null); // false
console.log(!!undefined); // false
// truthy
console.log(!!1); // true
console.log(!!10); // true
console.log(!!-1); // true
console.log(!!isento); // true
console.log(!!"string"); // true
console.log(!!{}); // true
console.log(!![]); // true
