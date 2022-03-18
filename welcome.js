var age = parseInt(prompt("cual es tu edad?"));

// convirtiendo edad a segundo
let ageInSeconds = age*365*24*60*60;
console.log(ageInSeconds);
// mostrando la edad en la web
document.write(`Tienes ${age} año de edad y convertidos en segundos es ${ageInSeconds}`);
