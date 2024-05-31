"use strict";
(() => {


const msg = 'Hola tsc';
const hero = {
    name: "iron man",
    age: 45,
};
console.log(hero.name);
console.log(hero.age);
const a = 10;
let b;
function sayHello(msg) {
    console.log(msg);
}
;
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName} ${lastName || 'X'}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || 'X'}`;
        }
    };
    const user = fullName('Joselito', 'Vazconselos', false);
    console.log(user);
})();
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'X'}`;
    };
    const user = fullName('Jose');
    console.log(user);
})();
;
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const user = fullName('Jose', 'Maria');
    console.log(user);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')} `;
    };
    const superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    let myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
;
(() => {
    const hero = 'Flash';
    function returnName() {
        return hero;
    }
    const activateBatSignal = () => {
        return 'Batisñal activada';
    };
    console.log(typeof activateBatSignal);
    let name = 'Jesus';
    const hello = (name) => 'Hello ' + name;
    console.log(hello(name));
})();
const suma = (a, b) => a + b;
function suma2(a, b) {
    return a + b;
}
var contar = (heroes) => {
    return heroes.length;
};
var superHeroes = ['Flash', 'Arrow', 'Superman', 'Linterna verde'];
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log('Batiseñal activada');
    }
    else {
        console.log('Batman de vacaciones');
    }
};
const unirHeroes = (...personas) => {
    return personas.join(', ');
};
const noHaceNada = (numero, texto, booleano, arreglo) => void {};
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
        getName() {
            return this.name;
        },
    };
    let Superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Super speed', 'Strong'],
        getName() {
            return this.name;
        },
    };
})();
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log("Disparando");
    }
};
const villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: "psiquico",
    estatura: 1.78
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
let mystique;
mystique = charles;
mystique = apocalipsis;
console.log(batimovil);
;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super speed', 'Time travel'],
        getName() {
            return this.name;
        },
    };
    let Superman = {
        name: 'Clark Kent',
        age: 40,
        powers: ['Super speed', 'Strong'],
        getName() {
            return this.name;
        },
    };
    console.log(flash, Superman);
})();
;
(() => {
    let myCustomVariable = 'fer';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: ['Rich']
    };
    console.log(typeof myCustomVariable);
})();
})() 
//# sourceMappingURL=main.js.map