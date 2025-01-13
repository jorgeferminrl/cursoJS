'use strict'

// Pruebas con let y var

// Prueba con var
// Las variables con var mantienen su valor dentro y fuera de bloques

var numero = 40;

if (true) {
    var numero = 50;
    console.log(numero);
}

// Al salir del bloque sigue con el valor que se le asignó dentro del bloque
console.log(numero); // valor 50

///////////////////////////////////////////
// Prueba con let 

// Las variables con let mantienen su valor solo dentro del bloque

var texto = "Curso JS";
console.log(texto);

if (true) {

    let texto = "Curso de desarrollo web";
    console.log(texto);
}
// Al salir, la variable sigue pintando el valor que se le indicó fuera del texto
console.log(texto);