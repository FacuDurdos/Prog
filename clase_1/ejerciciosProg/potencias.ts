import * as rls from 'readline-sync';

let base:number = rls.questionInt("Ingrese la base: ");
let exponente:number = rls.questionInt("Ingrese el exponente: ");

function calcularPotencias(nro1:number,nro2:number) {
    let resultado:number=0;
    if (nro2>=0) {
        resultado=nro1**nro2;
    }
return resultado;    
}

console.log(calcularPotencias(base,exponente));