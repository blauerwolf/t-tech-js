let nacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
let fechaActual = new Date();
let year = fechaActual.getFullYear();

console.log("Usted tiene " + (year - nacimiento));