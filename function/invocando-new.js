/* Funções fábrica */

var criarPessoa = function(nome, idade) {
  return {
    nome: nome,
    idade: idade
  };
};

console.log(criarPessoa("Fellipe", 21));
console.log(criarPessoa("Arika", 21));

/* Funções construtoras */

var Pessoa = function(nome, idade) {
  // this referencia o objeto que está sendo criado por meio do new
  this.nome = nome;
  this.idade = idade;
};

console.log(new Pessoa("Fellipe", 21));
console.log(new Pessoa("Arika", 21));

var pedro = {};
Pessoa.call(pedro, "Pedro", 20);
console.log(pedro);

var maria = {};
Pessoa.call(maria, "Maria", 52);
console.log(maria);
