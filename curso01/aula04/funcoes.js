
//Parâmetros
function exibeInfosEstudante(nome, nota){
    //Retorna mas não exibe
    return `O nome é ${nome} e a nota é ${nota}`;
}

//Chama a função passando valor ao Parametro criado
exibeInfosEstudante("Leonardo", 10);

//Chama a função passando valor e exibindo na tela
console.log(exibeInfosEstudante("Ana", 7));
