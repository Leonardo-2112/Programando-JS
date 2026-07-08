const notas = [10, 6, 8];

//Adiciona valor no final do array
notas.push(7);

//Passa o array e entre cochetes o indice(posição do valor no array)
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;//length função que conta o comprimento do array

console.log(media)