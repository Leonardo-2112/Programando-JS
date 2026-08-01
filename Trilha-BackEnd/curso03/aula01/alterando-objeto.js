const estudante = {
  //chave: valor
    nome: 'José Silva',
    idade: 32,
    cpf: '11122233344',
    turma: 'JavaScript'
}
//atribui uma nova propriedade ao objeto
estudante.telefone = '(11)88888-4444';
console.log("Nova propriedade telefone: " + estudante.telefone);

//Se ja existe a propriedade ele altera
estudante.nome = "Leonardo Sousa";
console.log(estudante);

