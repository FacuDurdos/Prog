import * as rls from 'readline-sync';

let usuario: string = "Juan";
let clave: string = "claveJuan";

let usuarioIngresado: string = rls.question("Ingrese su usuario:");
let claveIngresada: string = rls.question("Ingrese su clave:");

if (usuario==usuarioIngresado) {
    if (clave==claveIngresada) {
        (console.log("Se ha logueado correctamente"))
        } else {
            (console.log("Clave de usuario incorrecta"))
    }   
    } else {
        (console.log("Usuario incorrecto"))
    }        