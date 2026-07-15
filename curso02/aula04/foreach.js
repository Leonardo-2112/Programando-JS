const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

//forEach -> função de array
//passamos o parametro para o forEach, que no caso é uma function, que tem seus prórios parametros
notas.forEach (function (nota) {
    somaDasNotas += nota;
})

const media = somaDasNotas / notas.length;

console.log(`A média das notas é ${media}`);