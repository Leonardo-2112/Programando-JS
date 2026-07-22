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

for (let chave in estudante){
    //Verifica o tipo de dado
    const tipo = typeof estudante[chave];
    //Exibe somente caso não seja objeto ou função
    if(tipo != "object" && tipo != "function"){
        const texto = `A chave ${chave} tem o valor: ${estudante[chave]}`
        console.log(texto);
    }
}

