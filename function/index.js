/* function declaration */
function soma(a, b) {
  /* soma é o nome da funcao e a variável soma que está sendo criada */
  return a + b;
}

/* function expression */
var soma = function(a, b) {
  return a + b;
};

/* named function expression */
var soma = function soma(a, b) {
  return a + b;
};

/*
  - Diferença
    - function declaration: é carregada antes do código ser interpretado
    - function expression: é carregadas no momento da interpretação
*/

console.log(soma); // [Function: soma]
console.log(soma(2, 2)); // 4
