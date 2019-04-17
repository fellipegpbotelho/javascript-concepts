var nome = "Fellipe Botelho";

// Básicos
console.log(nome.charAt(2)); // l
console.log(nome.charCodeAt(0)); // 70
console.log(nome.concat(" - Nome completo")); // Fellipe Botelho - Nome completo
console.log(nome.indexOf("B")); // 8
console.log(nome.lastIndexOf("e")); // 11
console.log(nome.replace("Botelho", "Pereira")); // Fellipe Pereira
console.log(nome.split(" ")); // [ 'Fellipe', 'Botelho' ]
console.log(nome.length); // 15
console.log(nome.match("Botelho")); // [ 'Botelho', index: 8, input: 'Fellipe Botelho' ]
console.log(nome.substring(0, 7)); // Fellipe
console.log(nome.substring(8)); // Botelho
console.log(nome.trim()); // FellipeBotelho
console.log(nome.search("llipe")); // 2
console.log(nome.valueOf()); // Fellipe Botelho
console.log(nome.toLowerCase()); // fellipe botelho
console.log(nome.toUpperCase()); // FELLIPE BOTELHO
