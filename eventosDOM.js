//Ejercicio 1
const items = document.querySelectorAll('#miLista li');

items.forEach(item => {
    item.addEventListener('click', () => {
        console.log(item.textContent);
    });
});

//Ejercicio 2

const campoTexto = document.getElementById('miCampo');
const btnDeshabilitar = document.getElementById('btnDeshabilitar');
const btnHabilitar = document.getElementById('btnHabilitar');

btnDeshabilitar.addEventListener('click', () => {
    campoTexto.disabled = true;
});

btnHabilitar.addEventListener('click', () => {
    campoTexto.disabled = false;
});