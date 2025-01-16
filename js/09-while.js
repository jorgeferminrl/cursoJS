'use strict'

var year = 2025;

while (year <= 2051) {
    // Ejecuta esto
    console.log("Estamos en el año " + year);
    // // Incremento
    // year++;

    if (year == 2000) {
        break;
    }

    // Decremento
    year--;
}

// Do while
var years = 25;
do {
    alert("Solo cuando sea diferente a 20");
    years--;
} while (years > 20);