function areaTriangulo(base, altura) {
    return base * altura / 2;
}

function perimetroTriangulo(base, altura) {
    const hipotenusa = Math.sqrt(base ** 2 + altura ** 2);
    const perimetro = base + altura + hipotenusa;
    return perimetro;
}

let b = parseFloat(prompt("Ingrese la base del triángulo: "));
let h = parseFloat(prompt("Ingrese la altura del triángulo: "));

console.log("Área del triángulo: " + areaTriangulo(b, h));
console.log("Perímetro del triángulo: " + perimetroTriangulo(b, h));
