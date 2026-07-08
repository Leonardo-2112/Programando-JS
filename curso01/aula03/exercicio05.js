//Imagine um sistema que determina se um usuário tem idade suficiente para 
// comprar o ingresso para um show. Declare duas variáveis que determinem a 
// idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) 
// para determinar se o usuário pode realizar a compra.

const idadeMinima = 18;
const idadeUsuario = 17;

if(idadeUsuario >= idadeMinima){
    console.log("Pode realizar a compra!")
}else{
    console.log(`Compra não aprovada!\nIdade miníma para compra é de ${idadeMinima} anos`)
}