import * as rls from 'readline-sync';

const numero1: number = rls.questionInt("Ingrese el primer numero: ");
const numero2: number = rls.questionInt("Ingrese el segundo numero: ");
let suma: number = numero1+numero2;

for (let contador: number = numero1+1; contador<numero2; contador++) {
    suma+=contador;
}

console.log("la suma entre los numeros es: ",suma);
