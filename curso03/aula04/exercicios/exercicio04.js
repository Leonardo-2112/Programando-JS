// Crie um arquivo chamado manipulacaoJson.js. Dentro deste arquivo, realize as seguintes operações:
// a) Leia o conteúdo do arquivo animais.json.
// b) Converta o conteúdo lido para um objeto JavaScript utilizando JSON.parse().
const objAnimal = require('./animais.json');

// c) Adicione um novo animal ao array de animais. O novo animal deve ter um id único, nome, tipo e habitat.
const novoAnimal ={
    id: 4,
    nome: "Tigre",
    tipo: "Felino",
    habitat: "Selva"
};
objAnimal.animais.push(novoAnimal);

// d) Modifique o habitat de um animal existente no array de animais.
objAnimal.animais[0].habitat = "Selva";

// e) Remova um animal do array de animais.
objAnimal.animais.splice(0, 1);

// f) Converta o objeto modificado para uma string JSON utilizando JSON.stringify().
const stringAnimal = JSON.stringify(objAnimal);
console.log(stringAnimal);

// g) Imprima no console o objeto JavaScript resultante das operações.
console.log(objAnimal);
