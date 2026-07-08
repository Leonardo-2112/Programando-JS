const notas = [10, 6, 8, 5.5, 10];

//Remove o último valor do array
notas.pop();

//Passa o array e entre cochetes o indice(posição do valor no array)
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;//length função que conta o comprimento do array

console.log(media.toFixed(2));//Formata as casas decimais após a virgula
