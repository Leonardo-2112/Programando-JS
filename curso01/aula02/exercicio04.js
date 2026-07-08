//Crie uma variável numérica e uma string. 
// Faça a conversão da variável numérica para 
// string e da string para número. 
// Exiba os tipos de dados resultantes no console.
let numero = 10;
let texto = "20";

const numeroConvertido = String(numero);
const textoConvertido = Number(texto);

console.log('Tipo de dado após conversão de número para string: ', typeof numeroConvertido);
console.log('Tipo de dado após conversão de string para número: ', typeof textoConvertido);