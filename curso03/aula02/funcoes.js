const estudante ={
    nome: "José Silva",
    idade: 32,
    cpf: "11122233344",
    turma: "JavaScript",
    bolsista: true,
    telefones: ["5511999998888","5511777774444"],//Declaração de Array no objeto
    media: 7.5,
    //Declaração de Função dentro de objeto
    estaAprovado: function(mediaBase){
        //Operador ternário
        return this.media >= mediaBase ? true:false
    }
};

//acessando a função dentro do objeto
console.log(estudante.estaAprovado(7));
