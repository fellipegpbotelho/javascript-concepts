var hoje = new Date();
console.log(hoje.getTime());

console.log(new Date("1997/07/14"));
console.log(new Date(Date.parse("1997/07/14")));

console.log(new Date()); // today
console.log(new Date("July 14, 1997 22:00:00")); // my birthday
console.log(new Date("1997-07-14T22:00:00Z")); // my birthday
