//import -> importa o arquivo (forma mais moderna e mais usada porém precisa de configuração)
//import estudante from './estudante.json';

//require -> importa o arquivo (forma mais simples nativo do node.js) 
// A conversão automática de um objeto JSON em um objeto JavaScript é uma das propriedades específicas da função require()
const estudante = require('./estudante.json');

console.log(estudante);
console.log(typeof estudante);

const chaves = Object.keys(estudante);
console.log(chaves);
