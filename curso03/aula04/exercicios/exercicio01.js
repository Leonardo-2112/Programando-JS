// Crie um arquivo chamado utilizarRequire.js e, dentro dele, utilize a função require() para importar o conteúdo do arquivo dados.json.
const dados = require('./dados.json');

// Imprima no console o conteúdo importado utilizando a função console.log().
console.log(dados);

// Acesse diferentes propriedades do objeto importado e imprima no console para verificar o acesso aos dados.
console.log(dados.produtos[0]);
console.log(dados.usuarios[0]);
