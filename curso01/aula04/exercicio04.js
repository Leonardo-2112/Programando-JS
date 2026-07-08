//Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. 
// Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior.
// Imprima o maior valor no console.

function maior(num1, num2, num3){
    if(num1 > num2 && num1>num3){
        return "O maior número é: " + num1
    }else if(num2 > num1 && num2 > num3){
        return "O maior número é: " + num2;
    }else if(num3 > num1 & num3 > num2){
        return "O maior número é: " + num3;
    }else{
        return "Os números são iguais"
    }
}

console.log(maior(7, 7, 7))