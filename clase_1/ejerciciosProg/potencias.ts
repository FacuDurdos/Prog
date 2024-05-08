import * as rls from 'readline-sync';

let base:number = rls.questionInt("Ingrese la base: ");
let exponente:number = rls.questionInt("Ingrese el exponente: ");

while(exponente<0) {
    exponente = rls.questionInt("Ingrese otro exponente: ");
}
console.log(calcularPotencias(base,exponente));

function calcularPotencias(nro1:number,nro2:number) {
    let resultado:number=0;
    resultado=nro1**nro2;
return resultado;    
}

