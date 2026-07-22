// 4 - Crie um objeto chamado calculadora que terá os seguintes métodos:

// soma: uma função que aceita dois parâmetros e retorna a soma deles.
// subtracao: uma função que aceita dois parâmetros e retorna a subtração do segundo parâmetro do primeiro.
// multiplicacao: uma função que aceita dois parâmetros e retorna o resultado da multiplicação deles.
// divisao: uma função que aceita dois parâmetros e retorna o resultado da divisão do primeiro pelo segundo. 
// Certifique-se de tratar a divisão por zero, retornando uma mensagem apropriada nesse caso.
const calculadora = {
    soma: function(num1, num2){
        return num1 + num2;
    },
    subtracao: function(num1, num2){
        return num1 - num2;
    },
    multiplicacao: function(num1, num2){
        return num1 * num2;
    },
    divisao: function(num1, num2){
        if(num1 === 0 || num2 === 0)
            return "Não é possível divisão por zero!"
        else
            return num1 / num2;
    },
    // b) Adicione um novo método chamado calcularMedia ao objeto calculadora. 
    // Esta função deve aceitar um array de números como parâmetro e retornar a média aritmética dos valores.
    calcularMedia: function(array){
        let acumulador = 0;
        array.forEach(numero => {
            acumulador += numero;
        });
        const media = acumulador / array.length;
        return media
    }
};

// a) Chame cada função dentro do objeto calculadora passando valores como argumentos e imprima no console os resultados obtidos.
console.log("Soma: " + calculadora.soma(10, 3));
console.log("Subtração: " + calculadora.subtracao(10, 9));
console.log("Multiplicação: " + calculadora.multiplicacao(10, 3));
console.log("Divisão: " + calculadora.divisao(9, 3));

// c) Chame a função calcularMedia passando um array de números e imprima no console o resultado obtido.
console.log("A média é:");
console.log(calculadora.calcularMedia([10, 6, 8, 4]));