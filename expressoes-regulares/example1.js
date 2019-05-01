/*
  RegExp API
  exec - Executa a RegExp, retornando os detalhes
  test - Testa a RegExp, retornando true ou false
*/

var regExp = /9999-9999/;
var telefone = "9999-9999";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));
