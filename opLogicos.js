// Operadores lógicos y condicionales
// Ejercicio 1

let a = 25;
let b = 45;
let c = 35;

if (a > b && a > c) {
    console.log("El mayor de los tres números es: " + a);
} else if (b > a && b > c) {
    console.log("El mayor de los tres números es: " + b);
} else if (c > a && c > b) {
    console.log("El mayor de los tres números es: " + c);
} else {
    console.log("Los tres números son iguales o hay dos números iguales que son los mayores.");
}

//Ejercicio 2

let numeroIngresado = prompt("Ingrese un número: ");

if (numeroIngresado % 2 == 0) {
    console.log("El número "+numeroIngresado+ " es par.");
} else {
    console.log("El número "+numeroIngresado+" es impar.");
}
