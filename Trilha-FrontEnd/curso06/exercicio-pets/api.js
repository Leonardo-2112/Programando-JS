const URL_BASE = "http://localhost:3000";

const api = {
    async buscarPets() {
        try {
            const response = await fetch(`${URL_BASE}/pets`);
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pets');
            throw error;
        }

    },

    async salvarPets(pet) {
        try {
            const response = await fetch(`${URL_BASE}/pets`, {
                //POST -> Envia info
                method: "POST",
                //headers -> cabeçalho da requisição
                headers: {
                    "Content-Type": "application/json"
                },
                //body -> conteúdo da requisição
                body: JSON.stringify(pet)
            });
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao salvar pets');
            throw error;
        }

    },
    async buscarPetPorId(id) {
        try {
            const response = await fetch(`${URL_BASE}/pets/${id}`);
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pet');
            throw error;
        }

    },
    async editarPet(pet) {
        try {
            const response = await fetch(`${URL_BASE}/pets/${pet.id}`, {
                //POST -> Envia info
                method: "PUT",
                //headers -> cabeçalho da requisição
                headers: {
                    "Content-Type": "application/json"
                },
                //body -> conteúdo da requisição
                body: JSON.stringify(pet)
            });
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao editar pet');
            throw error;
        }

    },
    async excluirPet(id) {
        try {
            const response = await fetch(`${URL_BASE}/pets/${id}`, {
                //delete -> apaga info
                method: "DELETE",
            });
        } catch {
            alert('Erro ao excluir pet');
            throw error;
        }

    }
}

export default api;