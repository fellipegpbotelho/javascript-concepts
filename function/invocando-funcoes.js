/* Invocando diretamente no escopo global */
var soma = function(a, b) {
  return a + b;
};

console.log(soma(5, 6)); // 11

var produto = {
  nome: "Sapato",
  preco: 150
};

var formulaImpostoA = function(preco) {
  return preco * 0.1;
};

var formulaImpostoB = function(preco) {
  return preco * 0.2;
};

/* lambda function: funções passadas por parâmetro para outra funcão */
var calcularPreco = function(produto, formulaImposto) {
  return produto.preco + formulaImposto(produto.preco);
};

console.log("lambda (formula A): ", calcularPreco(produto, formulaImpostoA)); // 165
console.log("lambda (formula B): ", calcularPreco(produto, formulaImpostoB)); // 180

/* Retornando uma função */
var helloWorld = function() {
  return function() {
    return "Hello World";
  };
};

console.log(helloWorld); // [Function: helloWorld]
console.log(helloWorld()); // [Function]
console.log(helloWorld()()); // "Hello World"

/* Retornando de um objeto */
var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: function() {
    return this.idade;
  }
};

console.log(pessoa.getIdade()); // 20

/*
  Uma função passa a ter um this, caso ela esteja sendo executada por meio de um objeto
  O this se refere ao escopo ao qual está sendo invocado
*/

var getIdade = function() {
  return this.idade;
};

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade
};

console.log(pessoa.getIdade()); // 20
