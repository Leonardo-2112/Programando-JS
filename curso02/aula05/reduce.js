const salaJs = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(listaDeNotas) {
    //reduce -> reduz todos os elementos de un array em um elemento só
    
    // const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => {
    //     return acumulador + nota;
    // }, 0);

    //Versão compacta
    const somaDasNotas = listaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = somaDasNotas / listaDeNotas.length;
    return media;
}

console.log(calculaMedia(salaJs));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));