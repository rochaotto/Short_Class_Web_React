/*
Escreva uma função que recebe o valor do raio de um círculo e retorne o seu perímetro (C = 2*pi*r)
*/

let perimetro2 = function(raio) {
    return 2*Math.PI*raio;
}
console.log(Math.PI);
console.log('=============');
console.log(perimetro2(2));
console.log('=============');

let perimetro = function(raio) {
    const PI = 3.1415
    return 2*PI*raio;
}
console.log(perimetro(2));