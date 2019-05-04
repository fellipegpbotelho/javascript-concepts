console.log(typeof 10); // number
console.log(typeof "Fellipe Botelho"); // string
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object
console.log(typeof {}); // object
console.log(typeof /abc/); // object
console.log(typeof []); // object
console.log(typeof new Date()); // object

var Pessoa = function(nome, idade) {
  this.nome = nome;
  this.idade = idade;
};

var alfredo = new Pessoa("Alfredo", 20);

console.log(alfredo instanceof Pessoa); // true
console.log(alfredo instanceof Date); // false

console.log("nome" in alfredo); // true
console.log("peso" in alfredo); // false

delete alfredo.idade;
console.log("nome" in alfredo); // false
