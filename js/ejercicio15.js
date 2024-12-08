let categoria = parseInt(prompt("Ingrese la categoría del trabajador: "));
let sueldo = parseFloat(prompt("Ingrese el sueldo del trabajador: "));
let aumento;

switch (categoria) {
    case 1:
        aumento = sueldo * 1.15;
        break;
    case 2: 
        aumento = sueldo * 1.19;
        break;
    case 3:
        aumento = sueldo * 1.21;
        break;
    default:
        aumento = sueldo * 1.235;
}

alert("La categoría es: " + categoria + ", el aumento es: " + aumento);