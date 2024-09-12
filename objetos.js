//Ejercicio 1

let persona = {
    nombre:"Nicolás",
    edad: 24,
    ciudad:"Mendoza",

    cambiarCiudad: function (nuevaCiudad){
        this.ciudad = nuevaCiudad;
    }
}

console.log("Propiedades iniciales:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

persona.cambiarCiudad("Guaymallen")

console.log("Propiedades actualizadas:");
console.log("Nombre: " + persona.nombre);
console.log("Edad: " + persona.edad);
console.log("Ciudad: " + persona.ciudad);

//Ejercicio 2

let libro = {
    titulo: "Don Quijote de la Mancha",
    autor: "Cervantes Saavedra",
    año: 2013,

    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        let añosDesdePublicacion = añoActual - this.año;

        if (añosDesdePublicacion > 10) {
            console.log("El libro '" + this.titulo + "' es antiguo.");
        } else {
            console.log("El libro '" + this.titulo + "' es reciente.");
        }
    }
}

libro.esAntiguo();