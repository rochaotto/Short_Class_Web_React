/*
Complemente o exercício anterior incluindo as seguintes faixas etárias:
     Idade      Faixa
●    < 12       Criança
●    12-18      Adolescente
●    18-60      Adulto
●    > 60       Idoso
*/

const idade = 0;
let validaIdade = ((!idade) || (idade < 0) || isNaN(idade)) ? false : true ;

if (!validaIdade){
    console.log("Idade não valida!");
}
else{
    if (idade < 12) console.log("É uma criança!");
    else {
        if (idade >= 12 && idade <=18) console.log("É um adolescente!");
        else {
            if (idade >= 18 && idade <=60) console.log("É um adulto!");
            else console.log("É um idoso!");
        }
    }
}