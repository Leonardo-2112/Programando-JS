//Considere uma situação em que você está verificando se um 
// usuário está logado e tem permissão de administrador para 
// acessar determinada funcionalidade. Utilize variáveis booleanas 
// para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.

const login = "admin@gmail.com";
const senha = "admin123";
let estaLogado= false;
const nivelPermissao = "admin";
//Verifica senha e login, para logar no sistema
if(login==="admin@gmail.com" && senha==="admin123"){
    estaLogado = true;
}

//Verifica se esta logado e nivel de acesso
if(nivelPermissao == "admin" && estaLogado){
    console.log("Olá administraor, Seja Bem-Vindo ao sistema");
}else{
    console.log("Acesso Negado!\nÉ necessário estar logado, e ser um administador");
}