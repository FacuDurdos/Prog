import * as rls from 'readline-sync';

let altura: number = rls.questionFloat("Introduzca su altura:");

if (altura>=1.30) {
    (console.log("Puede subirse a la montaña rusa"))
    } else {
    (console.log("No puede subirse a la montaña rusa"))
    }

