"use strict";
(() => {
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hola ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    // let myFunction: Function;
    // myFunction = 10;
    // console.log(myFunction);
    // let myFunction: (y:number, x: number) => number;
    // myFunction = addNumber;
    // console.log(myFunction(1,2));
    // let myFunction: (y:string) => string;
    // myFunction = greet;
    // console.log(myFunction('Fer'));
    let myFunction;
    // let myFunction: () => void;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
