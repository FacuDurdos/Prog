import * as rls from 'readline-sync';

let precioProducto1: number = rls.questionInt("Precio del producto 1:");
let precioProducto2: number = rls.questionInt("Precio del producto 2:");
let precioProducto3: number = rls.questionInt("Precio del producto 3:");

let precioCompra: number =(precioProducto1+precioProducto2+precioProducto3);

console.log("El precio de la compra es:", precioCompra);


if (precioCompra>1000) {
    (console.log("Se aplica 10% de descuento"))
    } else {
        (console.log("No aplica descuento"))
    } 


