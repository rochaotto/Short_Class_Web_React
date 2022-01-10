/*
Escreva uma classe representando veículo com atributos como marca, modelo, licença etc. Faça também duas classes filhas como carro ou barco adicionando atributos e métodos específicos.
*/
class Veiculo {
    constructor (marca, modelo, licenca) {
        this.marca = marca;
        this.modelo = modelo;
        this.licenca = licenca;
    }
    
    acelerar() {
        console.log("Acelerar!");
        return 0;
    }
}

class Carro extends Veiculo {
    constructor (marca, modelo, licenca, placa, cor) {
        super(marca, modelo, licenca);
        this.placa = placa;
        this.cor = cor;
    }

    getPlaca () {
        return this.placa;
    }
    getCor () {
        return this.cor;
    }


}

class Embarcacao extends Veiculo {
    constructor (marca, modelo, licenca, material) {
        super(marca, modelo, licenca);
        this.material = material;
    }

    navegar() {
        console.log("Navegar!");
        return 0;
    }
    getMaterial () {
        return this.material;
    }
}

carro01 = new Carro("Ford","Mustang","123444567","jvc-1245", "prata");
console.log(carro01.getCor());
console.log(carro01.getPlaca());
console.log(carro01.acelerar());

barco01 = new Embarcacao("desconhecida", "Alvarenga", "121214545", "madeira");
console.log(barco01.getMaterial());
console.log(barco01.navegar());
console.log(barco01.acelerar());