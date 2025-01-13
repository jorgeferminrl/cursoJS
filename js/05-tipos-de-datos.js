'use strict'

// Operadores
var numero1 = 7;
var numero2 = 12;

var operacion = numero1 + numero2;
alert("El resultado de la operación es: "+operacion);

// Tipos de datos
var numeroEntero = 44;              // Numéricos
var cadenaTexto = 'Hola "qué" tal'; // Textos
var verdaderoFalso = false;         // Booleano
var numeroFalso = "33";             // String


console.log(cadenaTexto);
console.log(verdaderoFalso);
console.log(numeroFalso+7);         // Números en texto se concatenan
console.log(Number(numeroFalso)+7); // Función Number convierte un número de tipo texto a numérico
console.log(String(numeroFalso)+4); // Convertir cualquier variable a string

// typeof devuelve el tipo de dato de cualquier variable
console.log(typeof numeroEntero);
console.log(typeof cadenaTexto);
console.log(typeof verdaderoFalso);
console.log(typeof numeroFalso);
console.log(typeof cadenaTexto);