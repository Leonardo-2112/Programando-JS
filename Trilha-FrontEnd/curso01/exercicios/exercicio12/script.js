// Exercício 5) Implementando a data e horário dos itens na lista
// Com este código em mãos, implemente a função gerarData()
// para que ao adicionar um item na lista o resultado apareça da seguinte maneira:



//Constantes que capturam os elementos HTML
const tarefaInput = document.getElementById("tarefaInput");
const adicionarButton = document.getElementById("adicionarButton");

//Aplica um ouvidor de eventos que ao ser clicado vai executar a função adicionarItemNaLista
adicionarButton.addEventListener("click", adicionarItemNaLista);

//Função que gera e formata a data e hora atual
function gerarData() {
    const dataAtual = new Date();
    const diaDaSemana = dataAtual.toLocaleDateString("pt-BR", { weekday: "long" });
    const dataCompleta = dataAtual.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" });
    const hora = dataAtual.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
    return `${diaDaSemana}, ${dataCompleta} às ${hora}`;
}

//Função que adiciona uma nova atividade na lista de tarefas
function adicionarItemNaLista(){
    const tarefa = tarefaInput.value;
    if (tarefa) {
        //Pega o retorno da função
        const data = gerarData();
        //Cria elemento data
        const itemData = document.createElement("p");
        //Cria o elemento tarefa
        const novaTarefa = document.createElement("li");
        //Atribui o valor de data ao elemento HTML itemData
        itemData.textContent = data;
        //Atribui o valor de tarefa ao elemento HTMl novaTarefa
        novaTarefa.textContent = tarefa;
        //Pega o elemento lista
        const listaTarefas = document.getElementById("listaTarefas");
        //Atribui os elementos criados (novaTarefa e itemData) como filho de listaTarefas
        listaTarefas.appendChild(novaTarefa);
        listaTarefas.appendChild(itemData);
        //Limpar o valor do campo input
        tarefaInput.value = "";
    }
}