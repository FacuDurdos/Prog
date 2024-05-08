import * as rls from 'readline-sync';

for (let multiplo: number = 1; multiplo<=100; multiplo++) {
        if (multiplo%2===0 && multiplo%3===0) {
                console.log(multiplo," es multiplo de 2 y 3");
          }  else if (multiplo%2===0) {
                console.log(multiplo," es multiplo de 2");
          } else if (multiplo%3===0) {
                console.log(multiplo," es multiplo de 3");
          }                        
}
   