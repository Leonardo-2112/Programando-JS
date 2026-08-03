import api from "./api.js";

const ui = {
    async renderizarPets() {
        const listaPets = document.getElementById("lista-pensamentos");

        try {
            const pets = await api.buscarPets();
            pets.forEach(pet => {
                listaPets.innerHTML += `
                    <li class="li-pensamento" data-id="${pet.id}">
                    <img src="imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
                    <div class="pensamento-conteudo">Nome: ${pet.nome}</div>
                    <div class="pensamento-conteudo">Espécie: ${pet.especie}</div>
                    <div class="pensamento-conteudo">Raça: ${pet.raca}</div>
                    </li>
                `;
            });
        } catch {
            alert('Erro ao renderizar pets');
        }
    }
}


//quando o arquivo for carregado
document.addEventListener("DOMContentLoaded", () => {
    ui.renderizarPets();
});