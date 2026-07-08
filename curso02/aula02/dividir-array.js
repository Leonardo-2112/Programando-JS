const listaEstudante = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'André', 'Carlos', 'Paulo', 'Bia', 'Viviane', 'Isabela', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

//slice -> Separa o array de acordo com os paramentros passados(início-fim)
const sala1 = listaEstudante.slice(0, listaEstudante.length/2);//pega a primeira metade do array e define como o fim do slice 

const sala2 = listaEstudante.slice(listaEstudante.length/2); //Passa só o parametro do inicio 

//OBS: o parametro de fim não pega o último valor passado, já o de ínicio pega o primeiro valor do array

console.log(sala1);
console.log(sala2);