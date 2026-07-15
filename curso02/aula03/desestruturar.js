const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias]

function exibeNomeENota(aluno){
    //Verifica se o aluno está dentro de lista no indice 0(array alunos)
    if(lista[0].includes(aluno)){
        //Desestruturação de lista -> separa os dois arrays de lista, e atribui nas variaveis passadas nos cochetes
        const [alunos,medias] = lista;
        //Não é mais necessário acessar o array lista e passar o indice de onde quero entrar
        const indice = alunos.indexOf(aluno);
        const mediaAluno = lista[1][indice];

        console.log(`${aluno} tem a média ${mediaAluno}`)
    }else{
        console.log("Estudante não existe na lista!!")
    }
}

exibeNomeENota("Juliana");
exibeNomeENota("Vini");