//Ejercicio 1

const cambiarColor = document.getElementById('cambiarColor');
const parrafos = document.querySelectorAll('p');

cambiarColor.addEventListener('click', () => {
    parrafos.forEach(parrafo => {
        parrafo.style.color = 'blue';
    });
});

//Ejercicio 2
const botonAlerta = document.getElementById('mostrarAlerta');
const campoTexto = document.getElementById('campoTexto');

botonAlerta.addEventListener('click', () => {
    alert("El mensaje ingresado es: "+campoTexto.value);
});