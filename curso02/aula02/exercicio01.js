//Crie uma função que receba dois arrays e os concatene em um único array.
function concatenaArrays(lista1, lista2){
    listaFinal = lista1.concat(lista2);
    return listaFinal;
}

console.log(concatenaArrays(["Leonardo", "Andressa", "Beatriz"], [18, 41, 23]));