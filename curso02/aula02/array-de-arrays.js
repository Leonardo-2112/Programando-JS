const alunos = ['João', 'juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

//Cria um array, colocando outros arrays como valores
const lista = [alunos, medias]

console.log(
    
    `A aluna da posição 1 da lista é ${lista[0][1]}.`//Passa o array de aluno (posiçao 0 no array "lista") e dentro deste array passa a aluna Juliana(posição 1 no array de alunos)
    `A nota desta aluna é ${lista[1][1]}`//Passa o array de notas (posiçao 1 no array "lista") e dentro deste array passa a a nota 8 (posição 1 no array de notas)
);