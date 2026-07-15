const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//Atribui o valor de cada indice a variavel nota(guarda o elemento e não o indice)
//Acessa o array inteiro
for(let nota of notas){
    somaDasNotas += notas;
}
//Pega a soma de todas as notas feitas pelo FOR, e calcula a média de acordo com a quantidade de notas(tamanho do array)
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`)