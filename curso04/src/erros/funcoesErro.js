export default function trataErros(erro){
    if(erro.code === 'ENOENT'){
        throw new Error('Arquivo não encontrado');
    }
    else{
        return 'Erro na aplicação';
    }
}

//module.exports -> serve para definir quais dados, funções ou objetos um arquivo JavaScript pode compartilhar com outros arquivos
//module.exports = trataErros;
