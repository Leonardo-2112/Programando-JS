const user = {
    nome: 'Luliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email);
    }
}

// user.exibirInfos();

// const exibir = user.exibirInfos;
// exibir()

const exibir = function(){
    console.log(this.nome, this.email);
}

//bind -> método para prender ou agrupar algo
const exibirNome = exibir.bind(user);
exibirNome();