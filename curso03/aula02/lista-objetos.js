const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "11122233344",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5511999998888", "5511777774444"],//Declaração de Array no objeto
    //Declaração de um array de objetos
    enderecos: [{
        rua: "Rua Joseph Climber",
        numero: "45",
        complemento: "apto 43"
    }]
};

//Adicionando um objeto ao array de objetos (endereco)
estudante.enderecos.push({
    rua: "Rua Dona Clotilde",
    numero: "71",
    complemento: ""
})

console.log(estudante.enderecos);
console.log(estudante.enderecos[1]);

//filtando o array de enderecos para retornar apenas enderecos cujo a propriedade complemento tenha valor
const listaEnderecosComComplemento = estudante.enderecos.filter((endereco)=>endereco.complemento);

console.log(listaEnderecosComComplemento);