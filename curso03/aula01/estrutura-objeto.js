const estudante = {
  //chave: valor
    nome: 'José Silva',
    idade: 32,
    cpf: '11122233344',
    turma: 'JavaScript'
}

//Utiliza ponto após o nome do objeto para acessar uma propriedade deste objeto
console.log(estudante.nome);

//Dá para manipular com métodos de string caso o valor da propriedade seja uma string
console.log(`O nome do estudante é: ${estudante.nome}`);
//substring() -> primeiro parametro é o indice do caractere que ele vai começar, segundo parametro é a a quantidade de caractere que ele vai pegar
console.log(`Os três primeiros números do cpf são: ${estudante.cpf.substring(0, 3)}`)