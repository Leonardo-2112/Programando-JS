// 5 - Crie um novo objeto chamado carroNovo para representar as informações de um novo carro. O objeto deve ter as seguintes propriedades:
// marca (string): marca do novo carro.
// modelo (string): modelo do novo carro.
// ano (number): ano de fabricação do novo carro.
// cor (string): cor do novo carro.
const carro = {
    QuantidadePorta: 4,
    placa: "ABC1234"
};

const carroNovo = {
    marca: "BMW",
    modelo: "X6",
    ano: 2025,
    cor: "Branco",
};

// Utilize o operador de espalhamento (...) para criar um novo objeto chamado carroComNovosDetalhes que herde todas as 
// propriedades do objeto carro e adicione as propriedades do objeto carroNovo.
const carroComNovosDetalhes = {
    ...carroNovo,
    ...carro
}

// Imprima no console o objeto carroComNovosDetalhes para verificar as informações do carro com os novos detalhes.
console.log(carroComNovosDetalhes);

// Modifique o valor de uma propriedade no objeto carroComNovosDetalhes e imprima novamente o objeto no console para confirmar as alterações.
carroComNovosDetalhes.cor = "Azul";
console.log(carroComNovosDetalhes);