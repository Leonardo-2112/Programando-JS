const URL_BASE = "http://localhost:3000";

const api = {
    async buscarPensamentos(){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`);
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
         
    },
    async salvarPensamentos(pensamento){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos`, {
                //POST -> Envia info
                method: "POST",
                //headers -> cabeçalho da requisição
                headers: {
                    "Content-Type": "application/json"
                },
                //body -> conteúdo da requisição
                body: JSON.stringify(pensamento)
            });
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao salvar pensamentos');
            throw error;
        }
         
    },
        async buscarPensamentoPorId(id){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pensamento');
            throw error;
        }
    },
    async editarPensamento(pensamento){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
                //PUT -> Alterar info
                method: "PUT",
                //headers -> cabeçalho da requisição
                headers: {
                    "Content-Type": "application/json"
                },
                //body -> conteúdo da requisição
                body: JSON.stringify(pensamento)
            });
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao editar pensamentos');
            throw error;
        }
    },
     async excluirPensamento(id){
        try {
            const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
                //DELETE -> Exlui info
                method: "DELETE",
            });
        } catch {
            alert('Erro ao excluir pensamentos');
            throw error;
        }
    }

}

export default api;