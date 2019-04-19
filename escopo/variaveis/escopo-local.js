/*
Uma variável se torna local quando ela é declarada dentro de uma função, 
de tal maneira a qual ela somente estará acessível dentro dessa função.
*/

var meuNome = "Fellipe";

function mostrarNome() {
  var meuUltimoNome = "Botelho";
  var formatarNome = function() {
    meuUltimoNome = meuUltimoNome.toUpperCase();
  };
  formatarNome();
  console.log("Meu nome é " + meuNome + " " + meuUltimoNome);
}

mostrarNome();

// A variável meuUltimoNome fica indefinida pois o escopo dela está em mostrarNome
console.log("Meu nome é " + meuNome + " " + meuUltimoNome);
