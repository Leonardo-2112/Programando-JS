// Exercício 3) Adicionando informações de data e hora na lista de compras
// Você trabalha com desenvolvimento web e recentemente adicionou uma funcionalidade em um aplicativo de lista de 
// tarefas que permite aos usuários adicionar itens à lista de tarefas a realizar e as já concluídas. 
// Agora, sua liderança solicitou que cada item inclua informações sobre a data e hora em que foi adicionado.
// Seu objetivo é implementar essa funcionalidade utilizando JavaScript para criar um elemento de parágrafo 
// que mostra essas informações de maneira formatada e clara.// Exercício 2) Criando um checkbox dinâmico com JavaScript

// Você está trabalhando em um projeto de lista de tarefas e sua tarefa é adicionar checkboxes 
// dinamicamente para cada item que o usuário inclui na lista. Cada checkbox deve ter um ID único 
// que aumenta automaticamente conforme novos itens são adicionados. Use seu conhecimento em JavaScript para criar uma 
// função que gera esses elementos e os insere no DOM conforme descrito.

const input = document.getElementById("input-item");
const button = document.getElementById("button-item");
const lista = document.getElementById("lista-de-compras");
let contador = 1;

button.addEventListener('click', (evento) => {
    evento.preventDefault();    
    if (input.value === "") {
        alert("Por favor, insira um item!");
        return
    }
    const itemDaLista = document.createElement("li");
    let containerDiv = document.createElement("div");
    let nomeItem = document.createElement("p");
    nomeItem.innerText = input.value;
    let inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    inputCheckbox.addEventListener("click", function(){
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        }else{
            nomeItem.style.textDecoration = "none";
        }
    });
    const data = new Date().toLocaleDateString("pt-BR");
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});
    const hora = new Date(). toLocaleTimeString("pt-Br", {hour: "numeric", minute: "numeric"});
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    const elementoData = document.createElement("p");
    console.log(dataCompleta);
    
    elementoData.innerText = dataCompleta;
    elementoData.classList.add("texto-data");

    
    itemDaLista.appendChild(containerDiv);
    
    containerDiv.appendChild(inputCheckbox);
    containerDiv.appendChild(nomeItem);
    containerDiv.appendChild(elementoData);


    lista.appendChild(itemDaLista);

});