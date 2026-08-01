//1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array 
// contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.

// Dica: é possível usar o spread operator diretamente em um parâmetro de função para 
// "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

const frutas = ["banana", "abacaxi", "manga", "uva"];
const nomes = ["Leonardo", "Andressa", "Beatriz", "Gabriel"];
const notas = [10, 8, 6, 7];

function juntarArray(...arrays){
    return juncaoArray = [...arrays];
}


console.log(juntarArray(frutas, nomes, notas));

