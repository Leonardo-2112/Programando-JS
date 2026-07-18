//5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const numeros = [3, 10, 16, 15, 23, 29, 28, 43, 72];

const numerosFiltrados = numeros.filter((numero)=>{
    return numero % 3 === 0 && numero > 5;
});

console.log(numerosFiltrados);