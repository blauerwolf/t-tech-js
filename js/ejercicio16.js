let matricula = prompt("Ingrese la matrícula: ");
let calificaciones = 0;

for (let i = 0; i < 5; i++) {
    let calificacion = parseFloat(prompt("Ingrese la nota nro " + i + " :"));
    calificaciones += calificacion;
}

let promedio = calificaciones / 5;

if (promedio >= 7) {
    console.log("Matrícula: " + matricula + ", Promedio: " + promedio + ", aprobado.");
} else {
    console.log("Matrícula: " + matricula + ", Promedio: " + promedio + ", no aprobado.");
}