//Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const lista = ["Banana", "Abacaxi", "Uva", "Laranja", "Morango"];

//Percorre o array, primeiro parametro valor/elemento. segundo parametro indice
lista.forEach((elemento, indice) => {
    console.log(`\nElemento - ${elemento} \nIndice - ${indice}`);
})
