/* Tengo que crear 4 variables 
donde el usuario pueda ingresar por pantalla,
llamadas vuelta1, vuelta2, vuelta3, vuelta4.
Despues hacer un programa donde calcule el tiempo total
y el promedio de cada una */

import * as rls from 'readline-sync';

let vuelta1: number = rls.questionFloat("Ingrese tiempo vuelta 1:");
let vuelta2: number = rls.questionFloat("Ingrese tiempo vuelta 2:");
let vuelta3: number = rls.questionFloat("Ingrese tiempo vuelta 3:");
let vuelta4: number = rls.questionFloat("Ingrese tiempo vuelta 4:");

let tiempoTotal: number = (vuelta1+vuelta2+vuelta3+vuelta4);

let promedio: number = (tiempoTotal/4);

console.log("El tiempo total es de:",tiempoTotal);
console.log("El promedio es de:",promedio);
