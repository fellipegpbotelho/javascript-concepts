/*
  Metacaracteres
  . - Representa qualquer caractere
  \w - Representa o conjunto [a-zA-Z0-9_]
  \W - Representa o conjunto [^a-zA-Z0-9_]
  \d - Representa o conjunto [0-9]
  \D - Representa o conjunto [^0-9]
  \s - Representa um espaço em branco
  \S - Representa um não espaço em branco
  \n - Representa uma quebra de linha
  \t - Representa um tab
*/
var regExp = /<table><tr>(<td>\(\d{2}\)\s\d{4,5}-?\d{4}<\/td>)+<\/tr><\/table>/;

var telefone =
  "<table><tr><td>(80) 999778899</td><td>(90) 99897-8877</td><td>(70) 98767-9999</td></tr></table>";
console.log(regExp.test(telefone));
