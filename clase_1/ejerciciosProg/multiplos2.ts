import * as rls from 'readline-sync';

let numero1: number = rls.questionInt("Ingrese el primer numero: ");
let numero2: number = rls.questionInt("Ingrese el segundo numero: ");

function esMultiplo(nro1:number,nro2:number) {
    let resultado:boolean=true
    if (nro1%nro2===0) {
        resultado=true
    } else if (nro1%nro2!=0) {
        resultado=false
    }
return resultado    
}

console.log(esMultiplo(numero1,numero2));