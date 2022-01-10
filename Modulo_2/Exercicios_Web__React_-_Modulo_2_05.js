/*
Crie uma classe Conta que representa uma conta bancária cujo saldo e senha de acesso são informações privadas (protegidas). Adicione também os métodos depositar e sacar.
*/

class Conta {
    constructor (numeroConta, titular) {
        this.numeroConta = numeroConta;
        this.titular = titular;
        this._saldo = 0;
        this._senha = "abc123";

    }

    get senha() {
        return this._senha;
    }

    get saldo () {
        return this._saldo;
    }

    depositar(valor) {
        this._saldo = valor;
        return 0;
    }

    sacar(valor) {
        if (valor <= this._saldo) {
            this._saldo -= valor;
            return valor;
        }
        else {
            console.log("Saldo insuficente!");
            return 0;
        }
    }
}