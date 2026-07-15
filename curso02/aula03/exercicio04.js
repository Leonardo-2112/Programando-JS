//Crie uma função que receba uma array de números inteiros e retorne o 
// menor valor e o maior valor da array, no seguinte formato: 
// 'o menor número é X e o maior número é Y'.

const numeros = [14, 16, 21, 12,];

function menorMaior(array) {
    let menor = array[0];
    let maior = array[0];

    for (let i = 0; i < array.length; i++) {
        //se o numero do indice for maior que o atual numero da variavel maior ele substitui a variavel "maior" pelo número atual do indice do array
        if (array[i] > maior) {
            maior = array[i];
        }
        if (array[i] < menor) {
            menor = array[i];
        }
    }
    return `O maior número é ${maior}, e o menor número é ${menor}`
}

console.log(menorMaior(numeros));







