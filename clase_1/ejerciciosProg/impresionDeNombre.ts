import * as rls from 'readline-sync';

let nombre:string;
let apellido:string;
let nombreCompleto:string="";


for(let i:number=0; i<3; i++) {
    nombre=rls.question("Ingrese el nombre: ");
    apellido=rls.question("Ingrese el apellido: ");
    console.log(dibujarGuiones(40));
    imprimirNombre(nombre,apellido,nombreCompleto);
    console.log(dibujarGuiones(40));
}


function imprimirNombre(nombre:string,apellido:string,nombreCompleto:string) {
    nombreCompleto= nombre+" "+apellido;
return console.log("El nombre completo es",nombreCompleto);        
}


function dibujarGuiones(cantidad:number) : string { 
	let x:number, linea:string = "";
	for (x=1; x<=cantidad; x++) {
linea += "-";
}
return linea;
}
