/*
Crie uma classe Agenda com os atributos de contato (nome, telefone e e-mail) e com métodos para adicionar novo contato e excluir um existente.
*/

class Agenda {
    constructor () {
        this._agenda = [];
    }

    adicionar (contato){ 
        this._agenda.push(contato) 
    }

    excluir (contato) {
        this._agenda = this._agenda.filter((item) => item.nome !== contato);
    }

}

const agendaOtto = new Agenda();
console.log(agendaOtto);

agendaOtto.adicionar( {nome : 'contato1', telefone : 'telefone1', email : 'email1@teste.com'});
console.log(agendaOtto);

agendaOtto.adicionar({nome : 'contato2', telefone : 'telefone2', email : 'email2@teste.com'});
console.log(agendaOtto);

agendaOtto.adicionar( {nome : 'contato3', telefone : 'telefone3', email : 'email3@teste.com'});
console.log(agendaOtto);

agendaOtto.adicionar({nome : 'contato4', telefone : 'telefone4', email : 'email4@teste.com'});
console.log(agendaOtto);

agendaOtto.excluir('contato2');
console.log(agendaOtto);