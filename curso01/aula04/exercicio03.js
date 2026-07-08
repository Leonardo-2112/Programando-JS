//Crie uma função que receba uma string e verifique se é um palíndromo 
// (uma palavra que é lida da mesma forma de trás para frente) utilizando 
// o método de string reverse(). Retorne true se for um palíndromo e 
// false caso contrário. Imprima o resultado no console.

function comparaString(palavra){
    const palavraInvertida = palavra.split('').reverse().join('');//Inverte a ordem da String
    if(palavra === palavraInvertida){
        return true;
    }else{
        return false;
    }
}

console.log(comparaString("ovo"));