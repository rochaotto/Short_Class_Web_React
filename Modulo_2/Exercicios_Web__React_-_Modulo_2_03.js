/*
Crie uma classe Ponto que represente um ponto no plano cartesiano com atributos exclusivamente numéricos x e y.
*/

class Ponto {
    constructor (x,y){
        this.x = x;
        this.y = y;
    }
}

const ponto01 = new Ponto (10,20);
const ponto02 = new Ponto (5,10);
console.log(ponto01);
console.log(ponto02);