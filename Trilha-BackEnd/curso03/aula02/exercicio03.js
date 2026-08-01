// 3 - Crie uma lista de pessoas chamada pessoas que será um array contendo objetos. Cada objeto deve representar uma pessoa e conter as seguintes propriedades:

// nome (string): nome da pessoa.
// idade (number): idade da pessoa.
// cidade (string): cidade de residência da pessoa.
// Adicione pelo menos três objetos à lista pessoas com informações fictícias de diferentes pessoas.

const pessoas = [
    pessoa01 = {
        nome: "Leonardo",
        idade: 18,
        cidade: "São Paulo"
    },
    pessoa02 = {
        nome: "Lucas",
        idade: 22,
        cidade: "Rio de Janeiro"
    }
];

// a) Crie uma função chamada mostrarListaPessoas que aceita a lista pessoas como parâmetro e imprima no console as informações de cada pessoa na lista.
    function mostrarInfoPessoa(lista){
        pessoas.forEach((pessoa)=>{
            console.log(`==================================================================
                Nome: ${pessoa.nome}
                Idade: ${pessoa.idade}
                Cidade: ${pessoa.cidade}`);
        });
        
    }
// b) Adicione uma nova pessoa à lista pessoas utilizando o método push. Certifique-se de que a nova pessoa tenha informações distintas das pessoas já existentes na lista.
pessoas.push({
    nome: "Clotilde", 
    idade: 65, 
    cidade: "Salvador"})

// c) Chame a função mostrarListaPessoas para verificar se as informações, incluindo a nova pessoa, são exibidas corretamente no console.
mostrarInfoPessoa(pessoas);

// d) Crie uma função chamada filtrarPorCidade que aceita a lista pessoas e uma string cidade como parâmetros.
// A função deve retornar uma nova lista contendo apenas as pessoas que residem na cidade fornecida.
function filtrarPorCidade(pessoas, cidade){
    return pessoas.filter(pessoa => pessoa.cidade === cidade);
}
// Chame a função filtrarPorCidade passando a lista pessoas e uma cidade fictícia como argumentos e imprima no console o resultado obtido.
const localidade = filtrarPorCidade(pessoas, "São Paulo");
console.log(localidade);
