/*
  Um objeto é uma coleção dinâmica de chaves e valores de qualquer tipo de dado.
  É possível adicionar ou remover propriedades a qualquer momento.
*/

var pessoa = {
  nome: "João",
  idade: 20,
  telefone: null,
  endereco: {
    logradouro: "Rua das cabras",
    numero: 70,
    bairro: "Centro"
  }
};

console.log(typeof pessoa);
console.log("pessoa", pessoa);

// Atribuindo valores
pessoa.nome = "Fellipe";
pessoa["nome"] = "Fellipe";
pessoa.endereco.bairro = "Vila Guilhermina";
pessoa["endereco"]["bairro"] = "Vila Guilhermina";
pessoa.endereco["bairro"] = "Vila Guilhermina";
pessoa.telefone = null;
pessoa.peso = undefined;

console.log("pessoa alterada", pessoa);

// Apagando propriedades

delete pessoa.peso;
delete pessoa.telefone;

console.log("pessoa atributo deletado", pessoa);
