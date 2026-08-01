export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto)
    // flatMap: Filtra parágrafos vazios e mapeia palavras duplicadas em um único loop para melhor performance.
    const contagem = paragrafos.flatMap((paragrafo)=>{
        if(!paragrafo)
            return[]
        return verificaPalavrasDuplicadas(paragrafo)
    });
    return contagem;
}

function extraiParagrafos(texto){
    //separa dentro de um array os paragrafos(separador \n) com letras minusculas(toLowerCase) 
    //Pega os paragrafos arrumados, filtra por paragrafos que são vazios, e verifica as palavras duplicadas 
    //chamando a função e passando os paragrafos tratados como parametro
    return texto.toLowerCase().split('\n');
}


function limpaPalavras(palavra){
    // A expressão regular abaixo busca por todos os caracteres especiais listados dentro dos colchetes
    // e os substitui por uma string vazia, garantindo que todas as ocorrências sejam removidas (graças ao 'g' de global).
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_~()]/g, '');
}


function verificaPalavrasDuplicadas(texto){
    //Criar um array com as palavras
    //Pega todas as palvras usando o espaço como separador
    const listaPalavras = texto.split(' ');
    const resultado = {};
    
    //contar as ocorrências(palavras duplicadas)
    listaPalavras.forEach(palavra => {
        //Verifica tamanho da paavra
        if(palavra.length >= 3){
            //Padroniza palavras sem caracteres especiais com a function
            const palavraLimpa = limpaPalavras(palavra)
            //montar um objeto com o resultado
            //Cria a propriedade com o nome da palavra e atribui +1 ao valor, caso não exista ele cria com a propriedade com o valor 1 
                resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
        });
    return resultado;
}
