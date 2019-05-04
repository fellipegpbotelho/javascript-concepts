console.log(0 == ""); // true
console.log(0 == "0"); // true
console.log(false == undefined); // false
console.log(false == null); // false
console.log(null == undefined); // true
console.log(1 == true); // true
console.log(0 == false); // true
console.log(0 == "\n"); // true

console.log(10 == new Number(10)); // true

console.log(10 === "10"); // false
console.log(1 === true); // false

/* 
  Em uma comparação com || ou && é retornado o próprio operando e não o seu valor booleano
  Short-circuit operators: Operadores de curto-circuito são aqueles em que o segundo operando só é avaliado caso o primeiro não seja o suficiente pra resolver uma operação. 
*/
console.log(0 || 2); // 2
console.log(1 || 2); // 1
console.log(1 && 2); // 2
console.log(0 && 2); // 0

/*
  Quando avaliado em situações boleanas, os tipos assumem valores truthy ou falsy por meio da operação abstrata ToBoolean.
  Quando !! é usado a operação ToBoolean é forçada no operando.
  */
console.log(!!0); // false
console.log(!!NaN); // false
console.log(!!""); // false
console.log(!!false); // false
console.log(!!null); // false
console.log(!!undefined); // false

console.log(!!{}); // true
console.log(!![]); // true
