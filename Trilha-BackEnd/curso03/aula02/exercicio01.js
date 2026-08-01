
//=========================================EXERCICIO 02===========================================================

// 1 - Crie um arquivo chamado infoPessoa.js. Nesse arquivo, crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
// Este objeto deve ter as seguintes propriedades:
// nome (string): Nome da pessoa.
// idade (number): Idade da pessoa.
// solteiro (boolean): Indicador de estado civil (true se solteiro, false se casado).
// hobbies (array): Lista de hobbies da pessoa.
// Adicione valores a cada propriedade do objeto pessoa. Use valores fictícios para simular uma pessoa específica.

const pessoa = {
    nome: "Leonardo",
    idade: 18,
    solteiro: true,
    hobbies: ["Jogar futebol", "Natação", "Academia", "Assistir séries"]
}

// Crie uma função chamada mostrarInfoPessoa que aceite o objeto pessoa como parâmetro e imprima todas as informações da pessoa no console, incluindo o tipo de dado de cada propriedade.
function mostrarInfoPessoa(objeto){
    console.log(`Nome: ${objeto.nome}  Tipo: ${typeof objeto.nome}
        Idade: ${objeto.idade}  Tipo: ${typeof objeto.idade}
        Está Solteiro: ${objeto.solteiro}  Tipo: ${typeof objeto.solteiro}
        Hobbies: ${objeto.hobbies}  Tipo: ${typeof objeto.hobbies}`);
}

// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa passando o objeto pessoa como argumento.
mostrarInfoPessoa(pessoa);



