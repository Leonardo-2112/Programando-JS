const estudantes = require('./estudantes.json');

function filtarPorPropriedade(lista, propriedade){
     return lista.filter((estudante) => {
        //Verifica se dentro do objeto endereco tem a não propriedade do parametro
        return !estudante.endereco.hasOwnProperty(propriedade);
     })
};

const listaEnderecosImclompletos = filtarPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosImclompletos);
