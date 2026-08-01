// 3 - Considere duas listas de cores:
// const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
// const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']
// Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho']
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul']

//Concatena ambas
const listaDeCores = coresLista1.concat(coresLista2);
//Remove elemntos duplicados da lista concatenada
const listaFinal = new Set(listaDeCores);

console.log(listaFinal);