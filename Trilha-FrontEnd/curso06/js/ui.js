import api from "./api.js";

const ui = {

    async preencherFormulario(pensamentoId) {
        //Atribui os valores aos inputs HTML
        const pensamento = await api.buscarPensamentoPorId(pensamentoId);
        document.getElementById("pensamento-id").value = pensamento.id;
        document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
        document.getElementById("pensamento-autoria").value = pensamento.autoria;
    },

    async limparDados() {
        document.getElementById("pensamento-form").reset();
    },


    async renderizarPensamentos() {
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const mensagemVazia = document.getElementById("mensagem-vazia");
        listaPensamentos.innerHTML = "";

        try {
            const pensamentos = await api.buscarPensamentos();
            if (pensamentos.length === 0) {
                mensagemVazia.style.display = "block";
            } else {
                mensagemVazia.style.display = "none";
                //Chama função adicionar o pensamento na lista HTML
                pensamentos.forEach(ui.adicionarPensamentoNaLista)
            }
        } catch {
            alert('Erro ao renderizar pensamentos');
        }
    },

    adicionarPensamentoNaLista(pensamento) {
        //Criando elemento e atribuindo classe e valor
        const listaPensamentos = document.getElementById("lista-pensamentos");
        const li = document.createElement("li");
        li.setAttribute("data-id", pensamento.id);
        li.classList.add("li-pensamento");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "assets/imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const pensamentoConteudo = document.createElement("div");
        pensamentoConteudo.textContent = pensamento.conteudo;
        pensamentoConteudo.classList.add("pensamento-conteudo");

        const pensamentoAutoria = document.createElement("div");
        pensamentoAutoria.textContent = pensamento.autoria;
        pensamentoAutoria.classList.add("pensamento-autoria");

        //Criando botão HTML para editar 
        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        //Quando clicar preencher o formulário
        botaoEditar.onclick = () => {
            ui.preencherFormulario(pensamento.id);
        };
        //Criando o icone/imagem do botão de Editar
        const iconeEditar = document.createElement("img");
        iconeEditar.src = "assets/imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        //Atribuindo o icone dentro do botão de Editar
        botaoEditar.appendChild(iconeEditar);



        const botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("botao-excluir");
        botaoExcluir.onclick = async () => {
            try {
                await api.excluirPensamento(pensamento.id);
            } catch (error) {
                alert("Erro ao excluir pensamento");
            }
        };

        //Criando o icone/imagem do botão de Excluir
        const iconeExcluir = document.createElement("img");
        iconeExcluir.src = "assets/imagens/icone-excluir.png";
        iconeExcluir.alt = "Excluir";
        //Atribuindo o icone dentro do botão de Excluir
        botaoExcluir.appendChild(iconeExcluir);


        //Cria uma div e atribui o botão completo(botão + icone) nela
        const icones = document.createElement("div");
        icones.classList.add("icones");

        icones.appendChild(botaoEditar);
        icones.appendChild(botaoExcluir);

        //Colocando um elemento dentro do outro
        li.appendChild(iconeAspas);
        li.appendChild(pensamentoConteudo);
        li.appendChild(pensamentoAutoria);
        li.appendChild(icones);

        //Colocando o item de lista dentro da lista
        listaPensamentos.appendChild(li)
    }
}

export default ui;