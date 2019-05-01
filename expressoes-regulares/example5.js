/*
  Quantificadores
  Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
  {n} - Quantifica um número específico
  {n,} - Quantifica um número mínimo
  {n,m} - Quantifica um número mínimo e um número máximo
*/
var regExp = /^\([0-9]{2}\) [0-9]{4}-[0-9]{4}$/;
var telefone = "(80) 9876-1234";

console.log(regExp.test(telefone));
