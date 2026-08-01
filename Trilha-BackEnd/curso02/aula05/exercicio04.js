//4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const numeros = [10, 16, 15, 23, 29, 28, 43, 72];

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
});

console.log (numerosPares);