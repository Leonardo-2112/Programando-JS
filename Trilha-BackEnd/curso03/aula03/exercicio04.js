// 4 - No objeto carro, adicione uma nova propriedade chamada placa representando a placa do veículo. 
const carro = {
    marca: "BMW",
    modelo: "X6",
    ano: 2025,
    cor: "Branco",
    ligado: null,
    placa: "ABC1234"
};

// Defina a propriedade placa como não enumerável, para que ela não seja listada ao percorrer as propriedades do objeto.
Object.defineProperty(carro, "placa", {enumerable: false});
// Utilize um loop for...in para percorrer as propriedades do objeto carro e imprima no console apenas as propriedades enumeráveis.
for(let propriedade in carro){
    console.log(`Nome da Propriedade: ${propriedade}   Valor da propriedade: ${carro[propriedade]}`);
}
// Utilize o método Object.keys() para obter um array contendo apenas as chaves enumeráveis do objeto carro e imprima no console esse array.
const chavesEnumeradas = Object.keys(carro);
console.log("Array contendo apenas chaves enumeradas:\n" + chavesEnumeradas)

// Tente acessar a propriedade placa diretamente usando carro.placa e imprima no console o resultado obtido.
console.log("Acessando diretamente a propriedade placa: " + carro.placa);