const estudantes = require('./estudantes.json');

//primeiro parametro é o array na qual desejo fazer a busca
//segundo parametro é a chave por qual desejo procurar
//terceiro parametro é o valor desta chave que desejo procurar
function buscaInformacao(lista, chave, valor){
    //Procura pelo valor dentro do array
    return lista.find((estudante) => estudante[chave].includes(valor))
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '47933865848');
console.log(telefoneEstudante);
