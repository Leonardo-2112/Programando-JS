//6 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
//Em seguida, exclua a propriedade avaliacao do objeto livro. 
//Depois, exiba os detalhes do livro no console, verificando se as informações atualizadas, sem a avaliação, são exibidas corretamente.
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Diário de um Banana",
    autor: "Jeff Kinney",
    anoPublicacao: 2007,
    genero: "Comédia",
    idadePublicacao: anoAtual - 2007,
    avalicao: null
};

delete livro.avalicao;

console.log(livro);
