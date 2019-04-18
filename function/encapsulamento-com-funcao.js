// factory function
var createCounter = function() {
  var value = 0;
  return {
    add: function() {
      return ++value;
    }
  };
};

// o return expoe o que é publico

var counter = createCounter();
console.log(counter.value); // undefined  - encapsulado
console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3

// constructor function
var Counter = function() {
  var value = 0;
  this.add = function() {
    return ++value;
  };
};
var counter = new Counter();
console.log(counter.value); // undefined - encapsulado
console.log(counter.add()); // 1
console.log(counter.add()); // 2
console.log(counter.add()); // 3
