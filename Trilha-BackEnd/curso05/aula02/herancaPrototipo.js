const user = {
    nome: 'Luliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    }
};

const admin = {
    nome: 'Mariana',
    email: 'm@m.com',
    nascimento: '2023-01-01',
    role: 'admin',
    ativo: true,
    criarCurso: function () {
        console.log("Curso Criado");
    }
};

//Funciona como uma herança, 
// no primeiro parametro é passado quem vai herdar("Classe Filha"), 
// e no segundo parametro quem vai "ceder" as propriedades("Classe Mãe")
Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();