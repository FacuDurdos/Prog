import * as rls from 'readline-sync';

let numero1: number = rls.questionInt("Ingrese primer numero:");
let numero2: number = rls.questionInt("Ingrese segundo numero:");
let numero3: number = rls.questionInt("Ingrese tercer numero:");

if (numero1>numero2 && numero1>numero3) {
    console.log("El numero "+numero1+" es el mayor")
    } else {
        if (numero2>numero1 && numero2>numero3) {
            console.log("El numero "+numero2+" es el mayor")
        } else {
            if (numero3>numero1 && numero3>numero2) {
                console.log("El numero "+numero3+" es el mayor")
            }
        }
    }            
         