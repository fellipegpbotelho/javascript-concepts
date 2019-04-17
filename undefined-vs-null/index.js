var pessoa = {};

console.log(pessoa.idade);

pessoa = {
  nome: "Fellipe",
  idade: 21
};

console.log(pessoa.nome, pessoa.idade);

for (var propriedade in pessoa) {
  console.log(propriedade);
}

pessoa.idade = undefined;

console.log(pessoa.idade);

for (var propriedade in pessoa) {
  console.log(propriedade);
}

// null - é a ausencia de um valor em uma determinada propriedade já existente

pessoa.nome = null;

console.log(pessoa.nome);
