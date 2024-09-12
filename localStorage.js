//Ejercicio 1

const formulario = document.getElementById('formularioCorreo');
const emailInput = document.getElementById('email');
const correoGuardadoDiv = document.getElementById('correoGuardado');
const btnEliminar = document.getElementById('btnEliminar');

function mostrarCorreo() {
    const correo = localStorage.getItem('correo');
    if (correo) {
        correoGuardadoDiv.textContent = `Correo guardado: ${correo}`;
        btnEliminar.style.display = 'block'; 
    } else {
        correoGuardadoDiv.textContent = '';
        btnEliminar.style.display = 'none'; 
    }
}

mostrarCorreo();

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const correo = emailInput.value;
    localStorage.setItem('correo', correo);

    mostrarCorreo();
});

btnEliminar.addEventListener('click', () => {
    localStorage.removeItem('correo'); 
    mostrarCorreo();
});