const estudante = require('./estudante.json');

//stringfy -> Converte o json em string 
const stringEstudante = JSON.stringify(estudante);

console.log(stringEstudante);
console.log(typeof stringEstudante);

//como está convertido não da para manipular como se fosse um objeto
console.log(stringEstudante.nome);

//Converte para objeto JSON
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log(typeof objEstudante);

//Agora convertido para objeto é possível manipular como objeto
console.log(objEstudante.nome);


