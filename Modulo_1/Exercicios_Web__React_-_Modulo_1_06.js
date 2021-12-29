/*
Escreva um programa que imprime todos os números primos entre 1 e 100.
*/

const max = 100;

// for (let i = 1, primo = false; i <= max; i++) {
//     if (i <=3 ) primo = true;
//     else {
//         for (let k = 2; k < i; k++) {
//             if (!(i % k)) {
//                 primo = false;
//                 break;
//             }
//             else primo = true;
//         }
//     }
//     if (primo) console.log(i);
// }

console.log("\n");

for (let i = 1, validaPrimo = false; i <= max; i += 2) {
   if (i <=3 ) validaPrimo = true;
   else {
        p = Math.sqrt(i);
        for (let j = 3; j <= p; j += 2 ) {
            if (!(i % j )) {
                validaPrimo = false;
                break;
            }
            validaPrimo = true;
        }
    } 
   if(validaPrimo) console.log(i);
}