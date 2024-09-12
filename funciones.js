//Ejercicio 1
function esPar(numero) {
    return numero % 2 === 0;
}

console.log("El número 8 es par: "+esPar(8));
console.log("El número 11 es par: "+esPar(11));
console.log("El número 3 es par: "+esPar(3));
console.log("El número -50 es par: "+esPar(-50));
console.log("El número 19 es par: "+esPar(19));

//Ejercicio 2

function convertirCelsiusAFahrenheit(celsius) {
    const fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}

const temperaturaCelsius = prompt("Ingrese los grados Celsius: "); 
const temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
console.log(temperaturaCelsius+"°C son equivalentes a "+temperaturaFahrenheit+"°F");