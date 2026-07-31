// Exercício 1) Adicionando funcionalidade ao botão de salvar

// Imagine que você está trabalhando no desenvolvimento de uma aplicação web para uma lista de tarefas.
// Você já tem o layout pronto e agora precisa fazer a parte funcional do botão de salvar.

// Quando alguém digita um item no campo de texto e clica em "Salvar", o item deve ser adicionado à lista abaixo do campo de entrada. 
// Vamos criar essa funcionalidade usando JavaScript.

// No arquivo script.js, selecione o campo de entrada e o botão de salvar usando getElementById.
// Adicione um ouvinte de eventos ao botão que, ao ser clicado, chama uma função para adicionar a tarefa à lista.
// Dentro da função, obtenha o valor digitado no campo de entrada e crie um novo elemento HTML para esse item.
// Imprima no console o valor dentro desse input.

const input = document.getElementById("input-item");
const button = document.getElementById("button-item");
const lista = document.getElementById("lista-de-compras");

button.addEventListener('click', (evento) => {
    evento.preventDefault();    
    if (input.value === "") {
        alert("Por favor, insira um item!");
        return
    }
    let itemDaLista = document.createElement("li");
    let containerDiv = document.createElement("div");
    let nomeItem = document.createElement("p");
    nomeItem.innerText = input.value;
    itemDaLista.appendChild(containerDiv);
    containerDiv.appendChild(nomeItem);
    lista.appendChild(itemDaLista);

});