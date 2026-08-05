//tem que passar o tipo da function e dos parametros
function soma(valor1: number, valor2 : number):number{
    return valor1+valor2;
}

const usuario ={
    nome: "Leonardo",
    idade: 18,
    turma:{
        nome: "1TDSPV",
        ano: 2026
    }
}


//Declara como uma classe
interface Aluno {
    nome: string
    idade:number
}
//Instancia esta classe
const aluno:Aluno ={
    nome: "Leonardo",
    idade: 18
}

//Atribui mais de um tipo para a variavel
type NumeroString = string | number;

//let NumeroString = 10;
//let NumeroString = '10';

