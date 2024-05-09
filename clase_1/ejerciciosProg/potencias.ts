import * as rls from 'readline-sync';

let base:number = rls.questionInt("Ingrese la base: ");
let exponente:number = rls.questionInt("Ingrese el exponente: ");

while(exponente<0) {
    exponente = rls.questionInt("Ingrese un exponente mayor a 0: ");
}
console.log(calcularPotencias(base,exponente));

function calcularPotencias(base:number,exponente:number) {
    let resultado:number=0;
    resultado=base**exponente;
return resultado;    
}

