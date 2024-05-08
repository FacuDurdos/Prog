import * as rls from 'readline-sync';

const numero1: number = rls.questionInt("Ingrese el numero: ");
const numero2: number = rls.questionInt("Ingrese hasta que numero: ");

for (let contador: number = 1; contador<=4; contador++) {
    console.log(numero1,"x",contador,"=",numero1*contador);
}