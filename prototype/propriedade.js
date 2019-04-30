/* 
  PROPRIEDADE PROTOTYPE
  Existe uma propriedade prototype em toda função javascript, sendo que podem ser anexadas propriedades e métodos a essa propriedade prototype quando se deseja implementar herança.
  A propriedade prototype é usada primariamente para herança: você adiciona métodos e propriedades dentro de uma propriedade prototype de uma função para tornar estes métodos e propriedades disponíveis para instâncias desta função.
*/

function PrintStuff(myDocuments) {
  this.documents = myDocuments;
}

// Nós adicionamos o método print() para a propriedade prototype de PrintStuff
// então outras instâncias (objetos) podem herdá-la
PrintStuff.prototype.print = function() {
  console.log(this.documents);
};

// Cria um novo objeto com o construtor PrintStuff(), então permitindo
// que este novo objeto de herde métodos e propriedades de PrintStuff
var newObject = new PrintStuff("I'm a new object and i can print");

// newObj herda todas as propriedades e métodos, incluindo o método print,
// da função PrintStuff. Agora newObj pode chamar print diretamente, mesmo
// nunca tendo criado um método print() nele.
newObject.print();
