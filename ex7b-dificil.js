/**
 * Fíjate en estos dos códigos
 */

// Mostrar la tabla de multiplicar del 3
console.log("Tabla de multiplicar del 3:");
for (let i = 1; i <= 10; i++) {
    console.log("3 * " + i + " = " + 3 * i);
}

// Mostrar la tabla de multiplicar del 4
console.log("Tabla de multiplicar del 4:");
for (let i = 1; i <= 10; i++) {
    console.log("4 * " + i + " = " + 4 * i);
}

/**
 * ¿Te has fijado que solo un valor varia de estas tablas?
 * ¿No podrías usar una variable para mostrar la tabla de multiplicar de cualquier número?
 * Crea un bucle for que, en función de la variable 'tablaDel' , calcule la tabla de multiplicar y la muestre por consola
 * 
 * Por ejemplo, para tablaDel = 1, deberia mostrar toda la tabla de multiplicar del 1. Para tablaDel = 2, deberia mostrar la tabla de multiplicar del 2. etc.
 */

let tablaDel = 6;
// for...
console.log(`Tabla de multiplicar de ${tablaDel}`)
for (let i = 1; i <=10; i++) {
    console.log(`${tablaDel} * ${i} = ${tablaDel * i}`)
}