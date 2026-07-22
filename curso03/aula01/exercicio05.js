//5 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Depois altere o gênero do livro para "Aventura".
const anoAtual = new Date().getFullYear();
const livro = {
    titulo: "Diário de um Banana",
    autor: "Jeff Kinney",
    anoPublicacao: 2007,
    genero: "Comédia",
    idadePublicacao: anoAtual - 2007
}

livro.titulo = "Aventura";

console.log(livro)