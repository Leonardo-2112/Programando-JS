const api = {
    async buscarPensamentos(){
        try {
            const response = await fetch('http://localhost:3000/pensamentos');
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pensamentos');
            throw error;
        }
         
    }
}

export default api;