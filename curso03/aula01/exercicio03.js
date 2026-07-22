// 3 - Crie um objeto livro com as seguintes propriedades: título, autor, ano de publicação, gênero, idade de publicação. 
// Depois, utilize colchetes para acessar diretamente as propriedades do objeto livro e 
// imprimir no console os detalhes do livro.
const livro = {
    titulo: "Diário de um Banana",
    autor: "Jeff Kinney",
    anoPublicacao: 2007,
    genero: "Comédia"
};
const anoAtual = new Date().getFullYear();
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

console.log(`Livro: ${livro["titulo"]}\nAutor: ${livro["autor"]}\nAno de Publicação: ${livro["anoPublicacao"]}\nG~enero: ${livro["genero"]}\nIdade de Publicação: ${livro["idadePublicacao"]}`);
