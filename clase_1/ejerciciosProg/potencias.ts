import * as rls from 'readline-sync';

let base:number; 
let exponente:number;
let i:number;


for(i=0;i<5;i++){
    base=rls.questionInt("Ingrese la base: ");
    exponente=rls.questionInt("Ingrese el exponente: ");
    calcularExponente(exponente);
    console.log(calcularPotencias(base,exponente));
}


function calcularExponente(exponente:number){
    while(exponente<0) {
    exponente = rls.questionInt("Ingrese un exponente mayor a 0: ");
    }
}


function calcularPotencias(base:number,exponente:number) {
    let resultado:number=0;
    resultado=base**exponente;
return resultado;    
}
