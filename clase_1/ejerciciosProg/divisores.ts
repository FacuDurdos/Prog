import * as rls from 'readline-sync';

let numero:number
let divisores:number=0;
let noDivisores:number=0;


function esDivisor(nro1:number,divisores:number,noDivisores:number) {
    for(let i:number=1; i<=nro1; i++) {
        if (nro1%i===0) {
            divisores++;
        } else if(nro1%i!=0) {
            noDivisores++;
        }
    }
return console.log("Existen",divisores,"divisores");    
}

for(let i:number=0; i<5; i++) {
    numero=rls.questionInt("Ingrese un numero: ");
    esDivisor(numero,divisores,noDivisores);
}
