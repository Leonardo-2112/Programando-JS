//Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.

const notas = [10, 8, 4, 9 ,5];
let somaDasNotas = 0;
for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]; 
}
const media = somaDasNotas / notas.length;

console.log("A média dos números é " + media)