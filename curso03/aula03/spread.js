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
    },
    {
    rua: "Rua Dona Clotilde",
    numero: "71",
    complemento: null
    }]
};

function exibirTelefones(telefone1, telefone2){
    console.log(`ligar para ${telefone1}`);
    console.log(`ligar para ${telefone2}`);
}

exibirTelefones(estudante.telefones[0], estudante.telefones[1]);
//operador de espalhamento(spread) -> espalha todo o conteúdo de um array
exibirTelefones(...estudante.telefones);

const dadosEnvio = {
    destinatario: estudante.nome,
    // rua: estudante.enderecos[0].rua,
    // numero: estudante.enderecos[0].numero
    ...estudante.enderecos[0]//espalha o objeto de endereco dentro do objeto destinatario, ou seja, coloca tudo dentro de um mesmo objeto
};

console.log(dadosEnvio);
