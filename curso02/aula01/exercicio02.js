//Crie um programa em Node.js que inicie com um array cinco elementos e 
// atribua um novo valor para a primeira posição (índice 0) desse array. 
// Em seguida, exiba o array antes e depois da alteração.

const lista = ["Posição 0", "Posição1", "Posição2", "Posição3", "Posição4"]
console.log("Lista Antes das Alterações:\n" + lista)

lista [0] = "Posição 0 alterada"
console.log("\nLista Após as Alterações:\n" + lista);