const notas = [10, 9.5, 8, 7, 6];

//map -> Sempre retorna um array com os resultados

// const notasAtualizadas = notas.map(function(nota){
//     return nota + 1;
// })

//Utilizando arrow-function
const notasAtualizadas = notas.map((nota)=> nota + 1 >= 10 ? 10: nota + 1)//if ternário verifica se a nota é maior que 10

console.log(notasAtualizadas)
