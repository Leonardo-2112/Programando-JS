const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//primeira expressão: executada apenas uma vez(inicia a variavel indice com o valor)
//segunda expressão: condição de execução(continua executanto enquanto(while) o indice é menor que o comprimento do array)
//terceira expressão: executada sempre ao final do bloco(incrementa a variavel indice depois de todo o bloco)
for (let indice = 0; indice < notas.length; indice++){
    //exibe o indice, em seguida acessa o array no indice que está o valor da variavel
    //Ou seja começa com 0 ele exibe o 0(valor da variavel), e depois acessa o indice 0 do array de notas
    console.log(indice, notas[indice]);
}