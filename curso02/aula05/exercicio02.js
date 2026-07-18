// 2 - Crie um array de números chamado valores. 
//Depois,escreva um programa que some todos os 
//elementos deste array utilizando o método reduce.
 const valores = [10, 7, 5, 9, 6];

 const soma = valores.reduce((acumulador, valores) => {
    return acumulador + valores;
 },0)

 console.log(soma);