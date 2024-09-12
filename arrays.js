//Ejercicio 1
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosMultiplicados = [];

for (let i = 0; i < numeros.length; i++) {
    let resultado = numeros[i] * 2;
    numerosMultiplicados.push(resultado);
}

console.log("Números originales:", numeros);
console.log("Números multiplicados por 2:", numerosMultiplicados);

//Ejercicio 2

let pares = [];

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0 && i > 0) {
        pares.push(i);
    }
}

console.log("Primeros 10 números pares:", pares);