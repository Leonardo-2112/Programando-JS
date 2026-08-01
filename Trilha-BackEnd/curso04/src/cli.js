//fs -> File system (biblioteca do NodeJS)
//importa o módulo fs no arquivo
// const fs = require('fs');
// const trataErros = require('./erros/funcoesErro');
import fs from 'fs';
import path from 'path';
import trataErros from './erros/funcoesErro.js';
import { contaPalavras } from './index.js';
import { monstaSaidaArquivo } from './helpers.js';
//Importa a biblioteca externa
import { Command } from 'commander';
import chalk from 'chalk';

//Cria uma instancia da biblioteca
const program = new Command();

//Utilizando métodos da biblioteca instanciada
program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto a ser processado')
    .option('-d, --destino <string>', 'caminho da pasta onde salvar o arquivo de resultados')
    .action((options) => {
        const { texto, destino } = options;
        if (!texto || !destino) {
            console.error(chalk.red("Erro favor inserir caminho de origem e destino"));
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino)
            console.log(chalk.green('Texto processado com sucesso!'));
        } catch (error) {
            console.log(chalk.red('Ocorreu um erro no processamento', erro));
        }
    });

program.parse();

function processaArquivo(texto, destino) {
    // readFile -> método da biblioteca File system
    //utiliza o método fs.readFile para ler o conteúdo do arquivo
    fs.readFile(texto, 'utf-8', (erro, texto) => {     //Ultimo parametro é uma função callback
        //Try -> colocamos o código que queremos que dê certo (TENTAR)
        try {
            if (erro)
                //throw -> lança o erro para frente
                throw erro;
            const resultado = contaPalavras(texto);
            criaESalvaArquivo(resultado, destino)
        }
        //Catch -> Caso haja erro ele captura e decide oq fazer(PEGAR)
        catch (erro) {
            //O que faxer com o erro?
            //função do arquivo externo
            trataErros(erro);
        }
    });
}


// async -> função assincrona (código assincrono pode exercutar sem bloquear o restante do código, realizando mais de uma operação ao mesmo tempo)
async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = monstaSaidaArquivo(listaPalavras);
    try {
        //Promises -> Pendente/Resolvida/Rejeitada
        //await -> pausa a execução de uma função assíncrona até que uma Promise seja resolvida ou rejeitada.
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo Criado');
    } catch (erro) {
        throw erro;
    }
}

//Mesma resultado sem async/await com then
// function criaESalvaArquivo(listaPalavras, endereco){
//     const arquivoNovo = `${endereco}/resultado.txt`;
//     const textoPalavras = JSON.stringify(listaPalavras);//converte para string
//     fs.promises.writeFile(arquivoNovo, textoPalavras)
//     //then -> processamento feito com o resultado da promessa
//     .then(() => {
//         console.log('Arquivo Criado');
//     }).catch((erro) => {
//         throw erro;
//     //finally -> define um bloco de código que roda sempre, aconteça um erro ou não
//     }).finally(() => console.log('Operação Finalizada')
//     )

// }