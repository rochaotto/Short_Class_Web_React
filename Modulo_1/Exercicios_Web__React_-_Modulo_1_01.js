/*
1. Dada a variável idade, escreva um programa que imprima se a pessoa é maior ou menor de 18 anos.
*/
let idade_01 = 18;
let idade_02 = 15;
let idade_03 = 21;
let idade_04 = -10;
//let idade_05 = "";
let idade_05 = 0;
//let idade_05 = "dsfs";
//let idade_05 = null;

let validaIdade_01 = !idade_01 || idade_01 < 0 || isNaN(idade_01) ? false : true ; 
let validaIdade_02 = !idade_02 || idade_02 < 0 || isNaN(idade_02) ? false : true ;
let validaIdade_03 = !idade_03 || idade_03 < 0 || isNaN(idade_03) ? false : true ;
let validaIdade_04 = !idade_04 || idade_04 < 0 || isNaN(idade_04) ? false : true ;
let validaIdade_05 = !idade_05 || idade_05 < 0 || isNaN(idade_05) ? false : true ;

let validaMaioridade_01 = 18 - idade_01;
let validaMaioridade_02 = 18 - idade_02;
let validaMaioridade_03 = 18 - idade_03;
let validaMaioridade_04 = null;
let validaMaioridade_05 = null;


let avaliacao = 0;

if (!validaIdade_01){
    console.log("Idade não valida!");
}
else{
    if (!validaMaioridade_01) {
        avaliacao = "Pessoa tem 18 anos!";
    }
    else{
        avaliacao = validaMaioridade_01 > 0 ? "Pessoa maior de 18 anos!" : "Pessoa menor de 18 anos!";
    }
    console.log(avaliacao);
}



if (!validaIdade_02){
    console.log("Idade não valida!");
}
else{
    if (!validaMaioridade_02) {
        avaliacao = "Pessoa tem 18 anos!";
    }
    else{
        avaliacao = validaMaioridade_02 > 0 ? "Pessoa maior de 18 anos!" : "Pessoa menor de 18 anos!";
    }
    console.log(avaliacao);
}



if (!validaIdade_03){
    console.log("Idade não valida!");
}
else{
    if (!validaMaioridade_03) {
        avaliacao = "Pessoa tem 18 anos!";
    }
    else{
        avaliacao = validaMaioridade_03 > 0 ? "Pessoa maior de 18 anos!" : "Pessoa menor de 18 anos!";
    }
    console.log(avaliacao);
}



if (!validaIdade_04){
    console.log("Idade não valida!");
}
else{
    if (!validaMaioridade_04) {
        avaliacao = "Pessoa tem 18 anos!";
    }
    else{
        avaliacao = validaMaioridade_04 > 0 ? "Pessoa maior de 18 anos!" : "Pessoa menor de 18 anos!";
    }
    console.log(avaliacao);
}



if (!validaIdade_05){
    console.log("Idade não valida!");
}
else{
    if (!validaMaioridade_05) {
        avaliacao = "Pessoa tem 18 anos!";
    }
    else{
        avaliacao = validaMaioridade_05 > 0 ? "Pessoa maior de 18 anos!" : "Pessoa menor de 18 anos!";
    }
    console.log(avaliacao);
}

