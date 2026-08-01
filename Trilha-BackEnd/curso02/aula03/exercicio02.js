//Crie uma função que receba uma array e imprima no console o número do índice e o elemento.

const lista = ["Banana", "Uva", "Maçã", "Manga", "Abacaxi"];

function imprimeNoConsole(array){
    for(let i = 0; i < array.length; i++){
        console.log("\nElemento: "+ lista[i] + "\nIndice do Elemento:" + i);
    }
}
imprimeNoConsole(lista);

