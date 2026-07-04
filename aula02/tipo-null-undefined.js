let nomeEstudante;//Undefined -> Valor de variavel não definido, porém ela existe
console.log(typeof nomeEstudante);

let telefoneEstudante = null;//Não existe valor na variavel
console.log(typeof telefoneEstudante);//Typeof quando nulo retorna objeto


console.log(telefoneEstudante + 10);//null se comporta como ZERO em operações matemáticas
console.log(nomeEstudante + 5);//Undefined Retorna NaN, pois o resultado não é um número