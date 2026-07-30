function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1);
}

function monstaSaidaArquivo(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafo, indice) => {
        //join -> transforma array em string utilizando o separador , 
        const duplicadas = filtraOcorrencias(paragrafo).join(', ');
        textoFinal += `Palavras Duplicadas no parágrafo ${indice + 1}: ${duplicadas}\n`;
    })

    return textoFinal;
}

export{ monstaSaidaArquivo };