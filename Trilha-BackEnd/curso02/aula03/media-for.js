const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let i = 0; i < notas.length; i++){
    //incrementa notas de acordo com o indice a variavel somaDasNotas
    somaDasNotas += notas[i];
}
//Pega a soma de todas as notas feitas pelo FOR, e calcula a média de acordo com a quantidade de notas(tamanho do array)
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`)