//=========================================EXERCICIO 02===========================================================

// 2 - Adicione ao objeto pessoa uma nova propriedade chamada endereco. Esta propriedade deve ser um objeto representando o endereço da pessoa, com as seguintes subpropriedades:
// rua (string): nome da rua.
// cidade (string): nome da cidade.
// estado (string): nome do estado.
// Preencha as subpropriedades do objeto endereco com valores fictícios.
const pessoa = {
    nome: "Leonardo",
    idade: 18,
    solteiro: true,
    hobbies: ["Jogar futebol", "Natação", "Academia", "Assistir séries"],
    endereco: {
        rua: "Rua José das Couves",
        numero: "10",
        cidade: "São Paulo",
        estado: "SP"
    }
}
// Modifique a função mostrarInfoPessoa para incluir as informações do endereço da pessoa ao ser chamada.
function mostrarInfoPessoa(objeto){
        console.log(`Nome: ${objeto.nome}  Tipo: ${typeof objeto.nome}
        Idade: ${objeto.idade}  Tipo: ${typeof objeto.idade}
        Está Solteiro: ${objeto.solteiro}  Tipo: ${typeof objeto.solteiro}
        Hobbies: ${objeto.hobbies}  Tipo: ${typeof objeto.hobbies}
        Endereço: ${objeto.endereco.rua} ${objeto.endereco.numero}
        Cidade: ${objeto.endereco.cidade}
        Estado: ${objeto.endereco.estado}`);
}
// No final do arquivo infoPessoa.js, chame a função mostrarInfoPessoa para verificar se as informações atualizadas, incluindo o endereço, são exibidas corretamente no console. 
mostrarInfoPessoa(pessoa);