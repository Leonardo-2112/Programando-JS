const estudante = 'Leonardo';
const docente = 'Ana';
//Fazer uma citação utilizando aspas simples dentro da dupla
const cumprimento = "Nosso lema é 'estudar bastante'";
//fazendo uma citação dento da outra utilizando crase -> aspas duplas -> aspas simples
const citacao = `Léo diz: "nosso lema é 'estudar bastante'"`;

console.log(cumprimento);
console.log(citacao);


//Concatenação
console.log('O estudante se chama ' + estudante);

//Template string (Interpolação)
console.log(`O estudante se chama ${estudante}`);//Utiliza a crase e coloca a variavel dentro de chaves após um sifrão -> $


const senha = 'SenhaSegura123' + estudante.toUpperCase();//Método para colocar o valor em maiúsculo

console.log(senha);
