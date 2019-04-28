/*
  O que é um closure?
  Um closure é uma função interior que tem acesso a variáveis de uma função exterior - cadeia de escopo. O closure tem três cadeias de escopo: ele tem acesso ao seu próprio escopo (variáveis definidas entre suas chaves), ele tem acesso as variáveis da função exterior e tem acesso as variáveis globais.
  A função interior tem acesso não somente as variáveis da função exterior, mas também aos parâmetros dela. Note que a função interior não pode chamar o objeto arguments da função exterior, entretanto, pode chamar parâmetros da função externa diretamente.
  Você cria um closure adicionando uma função dentro de outra função.
*/

function showName(firstName, lastName) {
  var nameIntro = "Your name is ";

  function makeFullName() {
    return nameIntro + firstName + " " + lastName;
  }

  return makeFullName;
}

//var makeFullName = showName("Fellipe", "Botelho");

//console.log(makeFullName());

function celebrityID() {
  var celebrityID = 999;
  return {
    getID: function() {
      return celebrityID;
    },
    setID: function(newId) {
      celebrityID = newId;
    }
  };
}

var mjID = celebrityID();

console.log(mjID.getID());
mjID.setID(555);
console.log(mjID.getID());
