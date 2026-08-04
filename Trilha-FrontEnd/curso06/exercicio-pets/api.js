const api = {
    async buscarPets() {
        try {
            const response = await fetch('http://localhost:3000/pets');
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pets');
            throw error;
        }

    },

    async salvarPets(pet) {
        try {
            const response = await fetch('http://localhost:3000/pets', {
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
            const response = await fetch(`http://localhost:3000/pets/${id}`);
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pet');
            throw error;
        }

    },
    async EditarPet(pet) {
        try {
            const response = await fetch(`http://localhost:3000/pets/${pet.id}`, {
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

    }
}

export default api;