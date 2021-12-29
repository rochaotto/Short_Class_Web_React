/*
Escreva uma função para cada operação matemática básica (soma, subtração, multiplicação e divisão). As funções devem receber dois números e retornar o resultado da operação.
*/
//Funçao anonima ou expressões de funçoes
const sum = function (var1, var2) {
    return var1 + var2;
}
//Arrouw function ou expressão de funções curta
const soma = (var1, var2) => var1 + var2;
const subtracao = (var1, var2) => var1 - var2;
const multiplicacao = (var1, var2) => var1 * var2;
const divisao = (var1, var2) => var1 / var2;

let escreva = function (texto) {
    console.log(texto);
}

const a = 10 ;
//const a = 0 ;
//const a = "10" ;
//const a = null ;
const b = 2;
//const b = 0;

let validaVar1 = ((!a) || typeof(a) == "string") ? false : true ;
let validaVar2 = ((!b) || typeof(b) == "string") ? false : true ;
//escreva (validaVar1);
//escreva (validaVar2);
if (!(validaVar1 && validaVar2)) {
    if ((a === 0) || (b === 0)) {
        if (!(b === 0)) {
            escreva(soma(a, b));
            escreva(subtracao(a, b));
            escreva(multiplicacao(a, b));
            escreva(divisao(a, b));
        }
        else {
            escreva(soma(a, b));
            escreva(subtracao(a, b));
            escreva(multiplicacao(a, b));
            escreva("Divisão não definida!");
        }
    }
    else escreva("Valor não valido!"); 
}
else {
    escreva(soma(a, b));
    escreva(subtracao(a, b));
    escreva(multiplicacao(a, b));
    escreva(divisao(a, b));
}