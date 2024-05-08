import * as rls from 'readline-sync';

let numero: number = rls.questionInt("Ingrese su numero:");

for(let contador: number = 0; contador<10; contador++) {
    if (numero===0) {
        numero = rls.questionInt("ingrese otro numero: ");
        } else if (numero%2===0) {
            console.log(numero," es par");
            numero = rls.questionInt("ingrese otro numero: ");  
        } else if (numero%2!=0) {
            console.log(numero," es impar");
            numero = rls.questionInt("ingrese otro numero: ");  
        }       
}
