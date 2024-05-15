import * as rls from 'readline-sync'

let arrLetras: string[] = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t","u","v","w","x","y","z");

console.log(arrLetras);

let arrNombres: string[] = new Array("Facundo","Julian","Lionel","Angel","Emiliano");
let index:number;
let estaEnArreglo:boolean = false
let nombre: string=rls.question("Ingrese un nombre: ");

for(index=0; index<5; index++) {
    if (arrNombres[index]===nombre){
        estaEnArreglo=true;
        break;
    }
}

console.log(arrNombres);

if (estaEnArreglo){
    console.log(nombre,"esta en el arreglo");
} else {
    console.log(nombre,"no esta en el arreglo");
}
