// 4 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
//Depois, adicione uma nova propriedade chamada avaliacao.
//Esta propriedade deve ser inicializada como null.

const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Diário de um Banana",
    autor: "Jeff Kinney",
    anoPublicacao: 2007,
    genero: "Comédia",
    idadePublicacao: anoAtual - 2007,
    avalicao: null
};
// No final do arquivo livro.js, adicione uma avaliação ao objeto.
// Caso a propriedade avaliacao seja null, atribua a avaliação ao objeto livro.
// Caso contrário, imprima uma mensagem indicando que o livro já possui uma avaliação.
const novaAvaliacao = {
    nota: 9, 
    comentario: "Ótimo Livro"
};

if(livro.avalicao === null){
    livro.avaliacao = novaAvaliacao;
}else{
    console.log("O livro ja possui avaliação")
}

console.log(`Livro: ${livro["titulo"]}\nAutor: ${livro["autor"]}\nAno de Publicação: ${livro["anoPublicacao"]}\nG~enero: ${livro["genero"]}\nIdade de Publicação: ${livro["idadePublicacao"]}\nAvaliação: ${livro.avaliacao.nota}\nComentário: ${livro.avaliacao.comentario}`);
