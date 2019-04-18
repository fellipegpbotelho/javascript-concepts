var counter = 0;
var add = function() {
  return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function(item) {
  itens.push(item);
  return itens;
};

console.log(add("A"));
console.log(add("B"));
console.log(add("C"));

console.log(add());

// Poluição do escopo global
