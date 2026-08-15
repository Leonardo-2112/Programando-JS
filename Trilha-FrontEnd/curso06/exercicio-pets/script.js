import api from "./api.js";

const ui = {
    async preencherFormulario(petId) {
        const pet = await api.buscarPetPorId(petId);
        document.getElementById("pet-id").value = pet.id;
        document.getElementById("pet-nome").value = pet.nome;
        document.getElementById("pet-especie").value = pet.especie;
        document.getElementById("pet-raca").value = pet.raca;
    },

    async limparDados() {
        document.getElementById("pet-form").reset();
    },

    async renderizarPets() {
        const listaPets = document.getElementById("lista-pets");
        const mensagemVazia = document.getElementById("mensagem-vazia");
        listaPets.innerHTML = ""

        try {
            const pets = await api.buscarPets();
            pets.forEach(ui.adicionarPetNaLista)
            if(pets.length === 0){
                mensagemVazia.style.display = "block";
            }else{
                mensagemVazia.style.display = "none";
                pets.forEach(ui.adicionarPetNaLista);
            }
        } catch {
            alert('Erro ao renderizar pets');
        }
    },
    adicionarPetNaLista(pet) {
        //Criando elemento e atribuindo classe e valor
        const listaPets = document.getElementById("lista-pets");
        const li = document.createElement("li");
        li.setAttribute("data-id", pet.id);
        li.classList.add("li-pet");

        const iconeAspas = document.createElement("img");
        iconeAspas.src = "imagens/aspas-azuis.png";
        iconeAspas.alt = "Aspas azuis";
        iconeAspas.classList.add("icone-aspas");

        const petNome = document.createElement("div");
        petNome.textContent = `Nome: ${pet.nome}`;
        petNome.classList.add("pet-nome");

        const petEspecie = document.createElement("div");
        petEspecie.textContent = `Espécie: ${pet.especie}`;
        petEspecie.classList.add("pet-especie");

        const petRaca = document.createElement("div");
        petRaca.textContent = `Raça: ${pet.raca}`;
        petRaca.classList.add("pet-raca");

        const botaoEditar = document.createElement("button");
        botaoEditar.classList.add("botao-editar");
        botaoEditar.onclick = () => {
            ui.preencherFormulario(pet.id);
        };

        const iconeEditar = document.createElement("img");
        iconeEditar.src = "imagens/icone-editar.png";
        iconeEditar.alt = "Editar";
        botaoEditar.appendChild(iconeEditar);


        const botaoExcluir = document.createElement("button");
        botaoExcluir.classList.add("botao-excluir");

        botaoExcluir.onclick = async () => {
            try {
                await api.excluirPet(pet.id);
            } catch (error) {
                alert("Erro ao excluir pet");
            }
        };

        const iconeExcluir = document.createElement("img");
        iconeExcluir.src = "imagens/icone-excluir.png";
        iconeExcluir.alt = "Excluir";
        botaoExcluir.appendChild(iconeExcluir);


        const icones = document.createElement("div");
        icones.classList.add("icones");

        icones.appendChild(botaoEditar);
        icones.appendChild(botaoExcluir);

        //Colocando um elemento dentro do outro
        li.appendChild(iconeAspas);
        li.appendChild(petNome);
        li.appendChild(petEspecie);
        li.appendChild(petRaca);
        li.appendChild(icones);

        //Colocando o item de lista dentro da lista
        listaPets.appendChild(li)

    }

}

async function manipularSubmissaoFormulario(event) {
    event.preventDefault();
    const id = document.getElementById("pet-id").value;
    const nome = document.getElementById("pet-nome").value;
    const especie = document.getElementById("pet-especie").value;
    const raca = document.getElementById("pet-raca").value;

    try {
        if (id) {
            await api.editarPet({ nome, especie, raca, id })
        } else {
            await api.salvarPets({ nome, especie, raca });
        }
        ui.renderizarPets();
    } catch {
        alert("Erro ao salvar pets");
    }
}


//quando o arquivo for carregado
document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPets();

    const btnCancelar = document.getElementById("botao-cancelar");
    const formularioPets = document.getElementById("pet-form");
    formularioPets.addEventListener("submit", manipularSubmissaoFormulario);
    btnCancelar.addEventListener("click", ui.limparDados);
});

