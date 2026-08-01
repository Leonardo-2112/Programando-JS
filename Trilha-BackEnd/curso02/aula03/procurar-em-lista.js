const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeNomeENota(aluno){
    //Verifica se o aluno está dentro de lista no indice 0(array alunos)
    if(lista[0].includes(aluno)){
        //indexOf -> procura na lista o valor passado e retorna o indice do valor
        const indice = lista[0].indexOf(aluno);

        //Acessa o array medias que esta dentro do array lista no indice 1, 
        //após isso passa a variavel indice na qual esta armazenado o indice do aluno no array de alunos
        //Ou seja, ele pega a media e o aluno no mesmo indice em dois arrays diferentes que são unidos pelo array lista
        const mediaAluno = lista[1][indice];

        console.log(`${aluno} tem a média ${mediaAluno}`)
    }else{
        console.log("Estudante não existe na lista!!")
    }
}

exibeNomeENota("Juliana");
exibeNomeENota("Vini");