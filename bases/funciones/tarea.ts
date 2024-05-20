//Funciones basicas
const suma = (a: number, b: number) => a + b;

function suma2(a: number, b: number): number {
    return a + b;
}

var contar = (heroes: string[]):number =>  {
    return heroes.length;
}
var superHeroes: string[] = ['Flash', 'Arrow', 'Superman', 'Linterna verde'];

// console.log(contar(superHeroes));

const llamarBatman = ( llamar:boolean = true) => {
    if(llamar) {
        console.log('Batiseñal activada');        
    } else {
        console.log('Batman de vacaciones');
        
    }
}
// llamarBatman(false);

const unirHeroes = (...personas:string[]): string => {
    return personas.join(', ');
}

const noHaceNada = (numero:number, texto: string, booleano: boolean, arreglo: string[]) => void {}

let noHaceNadaTampoco: (n:number, s:string, b:boolean, arr: string[]) => void;

noHaceNadaTampoco = noHaceNada;

 
