//Desenvolva um programa em Node.js que simule uma clínica veterinária. 
// Crie um array vazio chamado clinica que representará a fila de animais na clínica. 
// Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console.
// Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const fila = [];
fila[0] = "Mel-Cachorro";
fila[1] = "Clodoaldo-Peixe";
fila[2] = "Berg-Gato";

console.log("Fila de Espera:\n" + fila);

fila.pop();
fila.pop();
fila.pop();

console.log("\nFila de Espera:\n" + fila);
