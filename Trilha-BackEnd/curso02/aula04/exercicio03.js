//Você recebeu um array numeros contendo valores numéricos. 
// Crie um programa que verifique se um número específico está presente nesse array. 
// Se estiver, o programa deve retornar a posição (índice) desse número. 
// Caso contrário, se o número não estiver presente, o programa deve retornar "-1".

const lista = [10, 21, 12, 25, 22];

const num = 11;

for(i = 0; i < lista.length; i++){
    if(num === lista[i]){
        console.log(`O número ${num} está na posição ${i}`);
        break;
    }else{
        console.log("-1");
    }
}