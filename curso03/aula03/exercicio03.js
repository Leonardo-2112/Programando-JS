// 3 - Crie um arquivo chamado metodosObjeto.js para realizar este exercício.
// Utilize o objeto carro do exercício 2 com as propriedades iniciais (marca, modelo, ano, cor) e adicione:
// ligado: uma propriedade do tipo booleana que indica se o carro está ligado ou não.
// ligar: um método que imprime no console uma mensagem indicando que o carro está ligado.
// desligar: um método que imprime no console uma mensagem indicando que o carro está desligado. Observação: se o carro já está ligado (ligado = true), não pode ser ligado novamente e vice-versa.
// obterDetalhes: um método que retorna uma string contendo todos os detalhes do carro (marca, modelo, ano, cor, estado de ligado/desligado).
const carro = {
    marca: "BMW",
    modelo: "X6",
    ano: 2025,
    cor: "Branco",
    ligado: null,
    ligar: function(){
        if(this.ligado === true)
            console.log("O carro não pode ser ligado novamente");
        else{
            this.ligado = true;
            console.log("O carro foi ligado");
        }
    },
    desligar: function(){
        if(this.ligado === false)
            console.log("O carro não pode ser desligado novamente!");
        else{
            this.ligado = false;
            console.log("O carro foi desligado");
        }
    },
    obterDetalhes: function(){
        return `
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Ano: ${this.ano}
        Cor: ${this.cor}
        Está Ligado: ${this.ligado}`;
    }

}
// Em seguida, faça o seguinte:
// Chame os métodos ligar e desligar do objeto carro e imprima no console as mensagens resultantes.
carro.ligar();
carro.desligar();

// Chame o método obterDetalhes e imprima no console a string retornada.
console.log("Detalhes do Veículo: " + carro.obterDetalhes());