import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item");

//adiciona um evento, primeiro parametro é quando executar, segundo parametro é oque executar
botaoAdicionar.addEventListener("click", (evento) => {
    //target -> pega o componente que foi clicado
    //console.log(evento.target);
    //prevenDefault -> previne a perca de dados ao comportamento padrão do usuário
    evento.preventDefault();
    //Atribui o retorno do item criado na função criarItemDaLista a variavel itemDaLista
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista);
    //Chama a função para verificar se a lista está vazia após adicionar algum item
    verificarListaVazia(listaDeCompras);
});



verificarListaVazia(listaDeCompras);