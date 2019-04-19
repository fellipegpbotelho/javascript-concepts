var meuNome = "Fellipe";

function mostrarNome() {
  var meuUltimoNome = "Botelho";
  console.log("Meu nome é ", meuNome);
  // Modificando a variável global
  meuNome += " " + meuUltimoNome;
}

mostrarNome();

// Verificando se a variável global foi alterada pela função
console.log(meuNome); // Foi alterada para Fellipe Botelho
