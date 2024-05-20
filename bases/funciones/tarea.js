"use strict";
//Funciones basicas
const suma = (a, b) => a + b;
function suma2(a, b) {
    return a + b;
}
var contar = (heroes) => {
    return heroes.length;
};
var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna verde'];
// console.log(contar(superHeroes));
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
    else {
        console.log('Batman de vacaciones');
    }
};
// llamarBatman(false);
const unirHeroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => void {};
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
