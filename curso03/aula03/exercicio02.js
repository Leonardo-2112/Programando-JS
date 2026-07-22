// 2 - Crie um objeto chamado carro que represente as informações de um veículo. O objeto deve ter as seguintes propriedades:

// marca (string): marca do carro.
// modelo (string): modelo do carro.
// ano (number): ano de fabricação do carro.
// cor (string): cor do carro.
const carro = {
    marca: "BMW",
    modelo: "X6",
    ano: 2025,
    cor: "Branco"
}

// Utilize o loop for...in para percorrer todas as propriedades do objeto carro e imprima no console o nome da propriedade e o seu valor.
for(let chave in carro){
    console.log(`Nome da Propriedade: ${chave}   Valor da propriedade: ${carro[chave]}`);
}

// Adicione mais propriedades ao objeto carro para representar características adicionais do veículo.
carro.tipo = "SUV";
carro.cambio = "Automático";
// Utilize novamente o loop for...in para percorrer todas as propriedades atualizadas do objeto carro e imprima no console o nome da propriedade e o seu valor.
for(let chave in carro){
    console.log(`Nome da Propriedade: ${chave}   Valor da propriedade: ${carro[chave]}`);
}
