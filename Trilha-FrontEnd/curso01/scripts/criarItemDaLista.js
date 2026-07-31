import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista(){
    //Valida que é necessário algo no campo de input para adicionar a lista
    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    //Cria um elemento
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    //Atribui classe a um elemento
    containerItemDaLista.classList.add("lista-item-container");
    //Cria um elemento input do tipo checkbox
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    //Adiciona contador no id
    inputCheckbox.id = "checkbox-" + contador++;
    //Cria um elemento 'p' e acessa o seu texto e atribui o valor do input(texto digitado) a variavel nomeItem
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    //Quando clicar no checkbox
    inputCheckbox.addEventListener("click", function(){
        //Caso esteja marcado(checked) ele adiciona a decoração
        if(inputCheckbox.checked){
            nomeItem.style.textDecoration = "line-through";
        }
        //Caso não esteja marcado ele remove toda Decoração
        else{
            nomeItem.style.textDecoration = "none";
        }
    });

    //appendChild ->  adicionar um novo elemento como o último filho de um elemento pai na página HTML
    containerItemDaLista.appendChild(inputCheckbox)
    containerItemDaLista.appendChild(nomeItem);

    itemDaLista.appendChild(containerItemDaLista);
    //dataCompleta recebe a string de retorno da função gerarDiaDaSemana
    const dataCompleta = gerarDiaDaSemana();
    
    //Cria um elemento p e atribui a string de dataCompleta ao valor do elemento HTML
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;

    //Adiciona uma classe CSS ao Elemento criado
    itemData.classList.add("texto-data");

    //Adiciona itemData como filho de itemDaLista
    itemDaLista.appendChild(itemData);
    
    return itemDaLista;
}