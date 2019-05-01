/*
  Escapando caracteres especiais
  \ - A barra é utilizada antes de caracteres especiais, com o objetivo de escapá-los
*/
var regExp = /\(48\) 9999-9999/;
var telefone = "(48) 9999-9999";

console.log(regExp.test(telefone));
