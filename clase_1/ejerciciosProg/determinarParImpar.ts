/* Para este algoritmo debo crear una variable
donde el usuario pueda ingresar un numero, despues determinar
si es par, impar o 0. ahi voy usar un if, donde compare el numero con el 0
para saber si es 0, sino es 0 voy a dividir el numero por 2 y compararlo con 
0 devuelta para saber si es par o impar. si es divisible por 2 y se comparo con 0 entonces 
es par sino es impar. */


import * as rls from 'readline-sync';

let numero: number = rls.questionInt("Ingrese su numero:");

if (numero===0) {
    (console.log("El numero ingresado es 0"))
    } else {
        if ((numero%2)===0) {
            (console.log("El numero ingresado es par"))
            } else {
                (console.log("El numero ingresado es impar"))
            }
        }        
