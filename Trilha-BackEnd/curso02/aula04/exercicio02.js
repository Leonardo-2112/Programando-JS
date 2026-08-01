//Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros:
// um array e uma função de callback que executa alguma operação matemática. 
// Essa função deve iterar por cada elemento do array e aplicar a função de callback
// em cada um dos elementos, imprimindo o resultado da operação no console.

function executaOperacaoEmArray(array, callback){
    return array.map(callback);
}

function operacaoMatematica(num){
    return num * 2;
}

const lista = [10, 9, 4, 6];
const listaDobrados = executaOperacaoEmArray(lista, operacaoMatematica);

console.log(listaDobrados);