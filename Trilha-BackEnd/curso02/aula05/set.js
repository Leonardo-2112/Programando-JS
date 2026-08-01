const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//Set -> não tem acesso aos métodos de array(push, concat etc)
//const nomesAtualizados = new Set(nomes);

//Transforma o Set em array, permitindo utilizar os métodos de array
// const listaNomesAtualizados = [...nomesAtualizados];

//Versão compactada
const listaNomesAtualizados = [...new Set (nomes)];

//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);