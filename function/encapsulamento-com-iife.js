// Immediately-Invoked Function Expression - Module Pattern
var counter = (function() {
  var value = 0;
  return {
    add: function() {
      return ++value;
    }
  };
})();

//console.log(counter.value); // undefined  - encapsulado
//console.log(counter.add()); // 1
//console.log(counter.add()); // 2
//console.log(counter.add()); // 3

// Evolução do module pattern -
var counter = (function() {
  var value = 0;
  return {
    add: function() {
      return ++value;
    },
    reset: function() {
      value = 0;
    }
  };
})();

//console.log(counter.value); // undefined  - encapsulado
//console.log(counter.add()); // 1
//counter.reset(); // 2
//console.log(counter.add()); // 3

// Revealing module pattern
var counter = (function() {
  var value = 0;
  var _add = function() {
    return ++value;
  },
  var _reset = function() {
    value = 0;
  }
  return {
    add: _add,
    reset: _reset
  };
})();

const jQuery1 = function() {
  console.log("jQuery 1.0.0");
};

const jQuery2 = function() {
  console.log("jQuery 2.0.0");
};

(function($) {
  $();
})(jQuery2);
