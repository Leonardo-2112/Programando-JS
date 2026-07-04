// Declare uma variável usando var fora de um bloco de código (por exemplo, if) 
// e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco 
// e fora dele utilizando console.log e analise os resultados. 
// Faça o mesmo processo utilizando let e compare com os resultados anteriores.


//Usando VAR
//Da para acessar dentro e fora do bloco

// var globalVar = "Variavel Global Usando VAR"
// if(1>0){
//     var localVar = "Variavel Local Usando VAR"
//     console.log(globalVar);
//     console.log(localVar);
// }
// console.log (globalVar);
// console.log(localVar);


//Usando LET
//Da para acessar a variavel global independente do ambiente, 
//já a local da para acessar somente no bloco em que ela foi criada
// let globalLet = "Variavel Global Usando LET"
// if(1>0){
//     let localLet = "Variavel Local Usando LET"
//     console.log(globalLet);
//     console.log(localLet);
// }
// console.log (globalLet);
// console.log(local);