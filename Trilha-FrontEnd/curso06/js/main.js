import ui from "./ui.js";
import api from "./api.js";

const btnCancelar = document.getElementById("botao-cancelar");

//quando o arquivo for carregado
document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPensamentos();
    
    const formularioPensamento = document.getElementById("pensamento-form");
    btnCancelar.addEventListener("click", manipularCancelamento);
    formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
});


function manipularCancelamento() {
  ui.limparDados();
}

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pensamento-id").value;
    const conteudo = document.getElementById("pensamento-conteudo").value;
    const autoria = document.getElementById("pensamento-autoria").value;
    
    try {
        //Se houver id ele edita, se não tiver id ele adiciona
        if(id){
            await api.editarPensamento({conteudo, autoria, id});
        }else{
            await api.salvarPensamentos({conteudo, autoria});
        }
        ui.renderizarPensamentos();
    } catch {
        alert("Erro ao salvar pensamento");
    }
}

