/*
  Iniciando e finalizando com um determinado caractere
  ^ - Inicia com um determinado caractere
  $ - Finaliza com um determinado caractere

  Ajuda a identificar unicamente
*/
var regExp = /^\(48\) 9999-9999$/;
var telefone = "(48) 9999-9999";

console.log(regExp.test(telefone));
