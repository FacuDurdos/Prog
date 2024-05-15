let arrEjercicio: number[] = new Array(4,7,9,3,1,45,67,23,29,78,11,16);
let i: number;
let numeroMayor: number = arrEjercicio[0];

for (i=0; i<arrEjercicio.length; i++) {
    if (numeroMayor<arrEjercicio[i]) {
        numeroMayor=arrEjercicio[i];
    } 
}

console.log("El numero mas grande es:",numeroMayor);

let numeroGlobal: number= 78;

function parImpar (numero:number) {
    if (numero%2===0) {
        console.log("El numero ingresado es par");
        } else {
            console.log("El numero ingresado es impar");
        }
}


parImpar(numeroGlobal);