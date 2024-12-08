let num1 = parseInt(prompt("Ingrese el número 1: "));
let num2 = parseInt(prompt("Ingrese el número 2: "));
let num3 = parseInt(prompt("Ingrese el número 3: "));

let mayor;

if (num1 >= num2 && num1 >= num3) {
    // el mayor es el num1
    mayor = num1;
} else if (num2 >= num3) {
    // el mayor es el num2
    mayor = num2;
} else {
    // el mayor es el num3
    mayor = num3;
}
    

console.log("El mayor número es el " + mayor);