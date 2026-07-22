// 2 - Crie uma nova variável chamada anoAtual e atribua a ela o ano atual (utilize new Date().getFullYear()). 
const anoAtual = new Date().getFullYear();

// Crie um objeto chamado livro com as seguintes propriedades: título, autor, ano de publicação e gênero.
const livro = {
    titulo: "Diário de um Banana",
    autor: "Jeff Kinney",
    anoPublicacao: 2007,
    genero: "Comédia"
};


// Adicione a propriedade idadePublicacao diretamente ao objeto livro, representando há quantos anos o livro foi publicado. Calcule essa idade subtraindo o anoDePublicacao do anoAtual.
livro.idadePublicacao = anoAtual - livro.anoPublicacao;

// Crie uma string chamada mostrarDetalhes contendo os detalhes do livro, incluindo a informação da idade de publicação.
mostrarDetalhes = "Detalhes do Livro:\n\nTítulo: " + livro.titulo + "\nAutor: " + livro.autor + "\nAno de Publicação: " + livro.anoPublicacao + "\nGênero: " + livro.genero + "\nIdade de Publicação: " + livro.idadePublicacao + " anos";

// Exiba a string mostrarDetalhes no console para verificar se as informações, incluindo a idade de publicação, são exibidas corretamente.
console.log(mostrarDetalhes);

