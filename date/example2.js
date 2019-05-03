var today = Date.parse("2015/06/13");

console.log(new Date(today));
console.log(new Date("12/25/2014"));

// RFC 2822
console.log(new Date("Thu Dec 25 2014"));
console.log(new Date("Thu Dec 25 2014 10:30:00"));

// ISO 8601
console.log(new Date("2015-12-25"));
console.log(new Date("2015-12-25T10:30:00"));
