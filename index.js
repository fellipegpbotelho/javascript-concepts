function start() {
  const initialNumber = 1000;
  const name = "Fellipe Botelho";
  const printInitialNumber = function() {
    console.log(initialNumber);
    const name = "Alfredo Geraldo";
    const printName = function() {
      console.log(name);
    };
    printName();
  };
  printInitialNumber();
}

const number = 5;

start();
