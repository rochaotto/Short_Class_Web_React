/*
Crie uma classe represente o tipo de objeto carro.
*/

class Carro {
    constructor (proprietario, cor, placa, modelo) {
        this.proprietario = proprietario;
        this.cor = cor;
        this.placa = placa;
        this.modelo = modelo;
    }
}

const carro01 = new Carro("Otto", "prata", "jkl-2214", "Maverick");
const carro02 = new Carro("Fulano", "azul", "abc-1122", "Mustang");
console.log(carro01);
console.log(carro02);