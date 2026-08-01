// 1 - Crie um objeto chamado pessoa que represente informações sobre uma pessoa. 
// O objeto deve ter as seguintes propriedades: nome e notas. 

const pessoa = {
    nome: "Leonardo",
    notas: [10, 9, 6, 7],
    // Adicione um método chamado calcularMediaNotas ao objeto pessoa. Este método deve calcular a média das notas da pessoa.
    calcularMedia: function(){
        let somaDasNotas = 0;
        this.notas.forEach(nota => {
            somaDasNotas += nota;
        });
        const media = somaDasNotas / this.notas.length;
        return media
    },
    // Adicione um método chamado classificarDesempenho ao objeto pessoa. 
    // Este método deve retornar uma categoria de desempenho com base na média calculada. 
    // Utilize as seguintes categorias:
    // Desempenho excelente: média >= 9
    // Bom desempenho: 7.5 <= média entre 7.6 e 8.9
    // Desempenho regular: 6 <= média entre 6 e 7.5
    // Desempenho insuficiente: média < 6
    classificarDesempenho: function(){
        const media = this.calcularMedia();
        let desempenho = "";
        if(media >= 9){
            desempenho = "Excelente";
            return desempenho;
        }else if(media >= 7.6){
            desempenho = "Bom Desempenho";
            return desempenho;
        }else if(media >=6 ){
            desempenho = "Desempenho Regular";
            return desempenho;
        }else{
            desempenho = "Desempenho Insuficiente";
            return desempenho;
        }
    }
}

// Chame o método calcularMediaNotas para calcular a média das notas da pessoa e imprima no console a média calculada.
console.log(pessoa.calcularMedia(pessoa.notas));

// Chame o método classificarDesempenho e imprima no console a categoria de desempenho da pessoa.
console.log(pessoa.classificarDesempenho(pessoa.media));
