//Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.

const numeros = [10, 8, 90, 4, 9];

function soma(array){
    let total = 0;
    for(let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(soma(numeros));
