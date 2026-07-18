//Crie uma função que receba um array de números e retorne a soma de todos os elementos.

const numeros = [3, 10, 16, 15, 23, 29, 28, 43, 72];

function soma(array){
    const somaDosNumeros = numeros.reduce((acumulador, numero) => {
        return acumulador + numero;
    },0)
    return somaDosNumeros;
}

console.log(soma(numeros));