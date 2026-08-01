const estudante = {
  //chave: valor
    nome: 'José Silva',
    idade: 32,
    cpf: '11122233344',
    turma: 'JavaScript'
}

function exibeInfoEstudante(objEstudante, infoEstudante){
    //notação de cochetes -> utiliza string para passar a propriedade do objeto
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'nome'));
console.log(exibeInfoEstudante(estudante, 'cpf'));

//Mesma coisa, porém sem a function
console.log(estudante ['nome']);
console.log(estudante ['cpf']);
