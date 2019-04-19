/*
Quando nos referimos a escopo de variável estamos se referindo a qual local 
de nosso código uma determinada variável pode ser acessada. No JavaScript 
existem somente dois tipos de escopos, que são eles, escopo global e local. 
O código a seguir ilustra basicamente como funcionam esses dois escopos.
*/

var minhaVariavelGlobal = "Minha variavel global";

function mostrarNome() {
  var minhaVariavelLocal = "Minha variavel local";
  console.log(minhaVariavelGlobal);
  console.log(minhaVariavelLocal);
}

console.log(minhaVariavelLocal);
