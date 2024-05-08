import * as rls from 'readline-sync';

const base: number = rls.questionInt("Introduzca la base del triangulo:");
const altura: number = rls.questionInt("Introduzca la altura del triangulo:");

let area: number = (base*altura);

console.log('El area es:',area);
console.log('La base es:',base);
console.log('La altura es:',altura);