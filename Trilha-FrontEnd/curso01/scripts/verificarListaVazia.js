//querySelector -> permite pegar o elemento que quiser(id, classe e etc), utilizando a mesma semântica do CSS(. -> classe/ # -> id)
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia");

function verificarListaVazia(listaDeCompras) {
    //querySelectorAll -> busca todos os elementos passados no parametro dentro da variavel (retorna um array)
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    //Verifica se o array retornado esta vazio
    if (itensDaLista.length === 0) {
        //caso esteja vazio aparece a mensagem(block)
        mensagemListaVazia.style.display = "block";
    }
    //Caso não esteja vazia remove a mensagem da tela
    else {
        mensagemListaVazia.style.display = "none";
    }
}

export default verificarListaVazia;