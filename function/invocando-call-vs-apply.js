/*
  Toda função possui os métodos call() e apply(). Eles são utilizados para indicar em qual escopo uma função deve ser executada.
*/

var getIdade = function(extra) {
  return this.idade + extra;
};

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade
};

console.log(pessoa.getIdade(2)); // 20
console.log(getIdade(2)); // undefined pois o this se refere ao escopo global, e o mesmo não tem idade definida

/* call 
  function.call(escopo, parametro1, patametro2);
*/
console.log(getIdade.call(pessoa, 2)); // 20

/* apply 
  function.apply(escopo, parametros);
*/
console.log(getIdade.apply(pessoa, [2])); // 20
