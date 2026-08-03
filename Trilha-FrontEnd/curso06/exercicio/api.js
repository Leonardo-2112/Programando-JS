const api = {
        async buscarPets(){
        try {
            const response = await fetch('http://localhost:3000/pets');
            //Converte json para objeto JS
            return await response.json();
        } catch {
            alert('Erro ao buscar pets');
            throw error;
        }
         
    }
}

export default api;