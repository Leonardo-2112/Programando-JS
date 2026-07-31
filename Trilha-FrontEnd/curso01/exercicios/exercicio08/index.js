// Exercício 5) Criando e manipulando elementos no DOM

// Você recebeu a tarefa de criar uma aplicação para listar seus filmes favoritos e a princípio você conta com seguinte estrutura no seu arquivo HTML:
// Seu objetivo é capturar os valores que são digitados no campo de input e ao clicar no botão adicionar eles na tela.

// Para isso, você precisa:

// Usar o document.getElementByID para capturar os elementos de input, button e ul;
const button = document.getElementById("adicionar_Button");
const input = document.getElementById("input_item");
// Criar uma função chamada adicionarFilme() que vai:
function adicionarFilme() {
    // Capturar o valor do campo de input;
    const valorInput = input.value;
    if (input.value === "") {
        alert("Por favor, insira um item!");
        return
    }
    // Criar um elemento da <li>da lista com a ajuda do createElement;
    const containerLi = document.createElement("li");
    // Inserir o valor do input no elemento <li> através do textContent;
    containerLi.textContent = valorInput;
    // Adicionar os itens na lista com o appendChild;
    const containerUl = document.getElementById("lista_de_filmes");
    containerUl.appendChild(containerLi);
    //Limpar input
    input.value = "";
}
// Adicionar um evento de clique ao botão e implementar a função adicionarFilme(), para que o valor seja acrescentado de fato à lista.
button.addEventListener("click", adicionarFilme);

