import * as rls from 'readline-sync';

const precioProducto = rls.questionInt ("Ingrese el precio del producto:");

let descuento10 : number = precioProducto*0.1;

let precioFinal : number = precioProducto-descuento10;

console.log("El precio final es:", precioFinal);