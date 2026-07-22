const estudante = {
    nome: "José Silva",
    idade: 32,
    cpf: "11122233344",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5511999998888", "5511777774444"],//Declaração de Array no objeto
    //Declaração de um array de objetos
    // enderecos: [{
    //     rua: "Rua Joseph Climber",
    //     numero: "45",
    //     complemento: "apto 43"
    // },
    // {
    // rua: "Rua Dona Clotilde",
    // numero: "71",
    // complemento: null
    // }]
};

//Array com as chaves do objeto estudante
const chavesObjeto = Object.keys(estudante);
//exibe este array
console.log(chavesObjeto);

//Verifica se dentro deste array de chaves tem a chave "enderecos", caso não tenha exibe erro
if(!chavesObjeto.includes("enderecos")){
    console.error("É necessário ter um endereço cadastrado")
}