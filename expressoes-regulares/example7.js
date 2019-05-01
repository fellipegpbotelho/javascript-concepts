/*
  Quantificadores
  Os quantificadores podem ser aplicados a caracteres, grupos, conjuntos ou metacaracteres
  ? - Zero ou um
  * - Zero ou mais
  + - Um ou mais
*/
var regExp = /^\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}$/;

var telefone = "(80) 998761234";
console.log(regExp.test(telefone));

var telefone2 = "(80) 99876-1234";
console.log(regExp.test(telefone2));
