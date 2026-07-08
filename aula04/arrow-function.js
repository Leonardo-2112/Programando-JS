//Arrow Function
const estudanteReprovou = (notaFinal, faltas) => {
    if(notaFinal<7 && faltas>4){
        return true;
    }else{
        return false;
    }
}

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(10, 2));


//Maneira resumida de escrever arrow function
const exibeNome = (nome) => nome;

console.log(exibeNome("Leonardo"));
