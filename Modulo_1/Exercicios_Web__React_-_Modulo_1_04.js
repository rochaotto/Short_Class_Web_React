/*
Escreva um programa que imprime a soma dos 100 primeiros números naturais.
*/
for (let i = 0, soma = 0; i < 100; i++) {
    soma += i;
    if(i == 99) console.log(soma);
}