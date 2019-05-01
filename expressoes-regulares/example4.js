/*
  Grupos de caracteres
  [abc] - Aceita qualquer caractere dentro de um grupo, nesse caso a, b e c
  [^abc] - Não aceita qualquer caractere dentro de um grupo, nesse caso a, b, ou c
  [0-9] - Aceita qualquer caractere entre 0 e 9
  [^0-9] - Não aceita qualquer caractere entre 0 e 9
*/
var regExp = /^\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]$/;
var telefone = "(80) 9876-1234";

console.log(regExp.test(telefone));
