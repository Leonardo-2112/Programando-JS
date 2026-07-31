// Exercício 2) Criando um checkbox dinâmico com JavaScript

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
    
    containerDiv.appendChild(inputCheckbox)
    containerDiv.appendChild(nomeItem);

    itemDaLista.appendChild(containerDiv);

    lista.appendChild(itemDaLista);

});