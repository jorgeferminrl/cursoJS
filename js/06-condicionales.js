'use strict'

// Condicional IF
// Si A es igual a B entonces haz algo

var edad1 = 10;
var edad2 = 12;

if (edad1 > edad2) {
    console.log("Edad uno es mayor que edad dos");
} else {
    console.log("La edad dos es mayor que la edad uno");
}

var edad = 18;
var nombre = 'David Suarez';

/* 
--- Operadores relacionales ---
    Mayor:         >
    Menor:         <
    Mayor o igual: >=
    Menor o igual: <=
    Igual:         ==
    Distinto:      !=
*/

if (edad >= 18) {
    //Es mayor de edad
    console.log(nombre + " tiene " + edad + " años, es mayor de edad");
    if (edad <= 33) {
        console.log("Todavía es millenial");
    } else if (edad >= 70) {
        console.log("Es un anciano");
    } else {
        console.log("Ya no es millenial")
    }
} else {
    console.log(nombre + " tiene " + edad + " años, es menor de edad");
}

/*
 Operadores lógicos
    AND(Y):    &&
    OR(O):     ||
    Negación:  !
 */

var year = 2025;
// Negación
if (year != 2026) {
    console.log("El año no es 2026, realmente es: "+year);
}

// AND
if(year >= 2000 && year <= 2026){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

// OR
if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}else{
    console.log("AÑO NO REGISTRADO");
}