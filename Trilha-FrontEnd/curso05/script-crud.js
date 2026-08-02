//Encontrar botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');
const ulTarefas = document.querySelector('.app__section-task-list');
const btnCancelar = document.querySelector('.app__form-footer__button--cancel');
const paragrafoDescricaoTarefa = document.querySelector('.app__section-active-task-description');

const btnRemoverConcluidas = document.querySelector('#btn-remover-concluidas');
const btnRemoverTodas = document.querySelector('#btn-remover-todas');

//getItem -> método da localStorage que permite pegar valores de um lugar salvo
let tarefas = JSON.parse(localStorage.getItem('tarefas')) || []; //Caso n tenha valor para converter ele coloca um array vazio
let tarefaSelecionada = null;
let liTarefaSelecionada = null;

function atualizarTarefas() {
    //localStorage ->  Os dados continuam salvos mesmo se você fechar a aba (só salva strings)
    //(onde irá salvar, oque deve salvar)
    localStorage.setItem('tarefas', JSON.stringify(tarefas));//convertendo objeto em strings usando JSON
}

function cancelarTarefa(){
    textarea.value = "";
    formAdicionarTarefa.classList.add('hidden');
}

function criarElementoTarefa(tarefa) {
    const li = document.createElement('li');
    //Cria uma classe e atribui ela ao elemento HTML "li"
    li.classList.add('app__section-task-list-item');

    const svg = document.createElement('svg');
    //Atribui um molde com classes de estilização para o elemento HTML "svg"
    svg.innerHTML = `<svg class="app__section-task-icon-status" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#FFF"></circle>
            <path d="M9 16.1719L19.5938 5.57812L21 6.98438L9 18.9844L3.42188 13.4062L4.82812 12L9 16.1719Z" fill="#01080E"></path>
        </svg>`;

    const paragrafo = document.createElement('p');
    //Atribui o valor de descriçao ao elemento 'p'
    paragrafo.textContent = tarefa.descricao;
    paragrafo.classList.add('app__section-task-list-item-description');

    const botao = document.createElement('button');
    botao.classList.add('app_button-edit');

    //quando o botão de editar for clicado
    botao.onclick = () => {
        //debugger
        //prompt -> abre caixa de dialogo com uma mensagem
        const novaDescricao = prompt("Qual é o novo nome da tarefa?");
        if (novaDescricao) {
            //Sobreescreve o paragrafo com a nova descricao passada
            paragrafo.textContent = novaDescricao;
            tarefa.descricao = novaDescricao;

            atualizarTarefas();
        }
    }

    const imagemBotao = document.createElement('img');
    //Passa como valor da imagem o caminho dela
    imagemBotao.setAttribute('src', 'imagens/edit.png');
    //coloca a imagem dentro do botão
    botao.append(imagemBotao);
    //coloca os elementos criados dentro da li
    li.append(svg);
    li.append(paragrafo);
    li.append(botao);

    if(tarefa.completa){
        li.classList.add('app__section-task-list-item-complete');
        botao.setAttribute('disabled', 'disabled');
    }else{
        //quando clicar em uma item da lista ele coloca o texto do item no elemento p de "paragrafoDescricao" 
        li.onclick = () => {
            //debugger
            //seleciona todoa elementos com esta classe e percorre o array de retornou
            document.querySelectorAll('.app__section-task-list-item-active')
            .forEach((elemento) => {
                //remove esta classe de todos os elementos
                elemento.classList.remove('app__section-task-list-item-active');
            });
    
            // Verifica se a tarefa clicada é a mesma que está selecionada acima
            if(tarefaSelecionada == tarefa){
                paragrafoDescricaoTarefa.textContent = '';
                liTarefaSelecionada = null;
                tarefaSelecionada = null;
                return
            }
            //atribui a tarefa que eu selecionei ao objeto tarefa com descricao
            tarefaSelecionada = tarefa;
            liTarefaSelecionada = li;
            paragrafoDescricaoTarefa.textContent = tarefa.descricao;
            // adiciona uma classe para estilização
            li.classList.add('app__section-task-list-item-active');
        }
    }
    return li;
}
    

btnAdicionarTarefa.addEventListener('click', () => {
    //toggle -> adiciona a classe CSS ao elemento se ela não existir, ou a remove se ela já estiver presente, 
    //funcionando exatamente como um interruptor
    formAdicionarTarefa.classList.toggle('hidden')
});

// quando clicado chama função cancelarTarefa
btnCancelar.addEventListener('click', cancelarTarefa);

//submit -> quando enviar um formulário
formAdicionarTarefa.addEventListener('submit', (evento) => {
    //Impede o comportamento padrão do formulário(recarregar página após submit)
    evento.preventDefault();
    //cria um objeto tarefa com a propriedade descricao cujo o valor é o valor do textarea escrito pelo usuário
    const tarefa = {
        descricao: textarea.value
    }
    //Coloca o objeto tarefa dentro da lista(array) tarefas
    tarefas.push(tarefa);
    //Pegando tarefa adicionada e colocando dentro da lista no HTML
    const elementoTarefa = criarElementoTarefa(tarefa);
    ulTarefas.append(elementoTarefa);

    atualizarTarefas();

    //Limpando textarea e escondendo form após adicionar tarefa nova
    textarea.value = '';
    formAdicionarTarefa.classList.add('hidden');
});

//Percorre o array de tarefas e exibe cada uma
tarefas.forEach(tarefa => {
    const elementoTarefa = criarElementoTarefa(tarefa);
    //Coloca o elemento criado dentro da ul
    ulTarefas.append(elementoTarefa);
});

document.addEventListener('FocoFinalizado', () => {
    if(tarefaSelecionada && liTarefaSelecionada){
        liTarefaSelecionada.classList.remove('app__section-task-list-item-active');
        liTarefaSelecionada.classList.add('app__section-task-list-item-complete');
        liTarefaSelecionada.querySelector('button').setAttribute('disabled', 'disabled');
        tarefaSelecionada.completa = true;
        atualizarTarefas();
    }
});

const removerTarefas = (somenteCompletas) => {
    //Limpa o elemento do HTML
    //Filtrando caso seja tarefa completa ou todas as tarefas
    const seletor = somenteCompletas ? ".app__section-task-list-item-complete" : ".app__section-task-list";//if ternário 
    document.querySelectorAll(seletor).forEach((elemento) => {
        elemento.remove();
    });
    //Limpa o elmento do localStorage
    //Filtrando caso seja tarefa completa utiliza o filtro ou todas as tarefas retorna array vazio
    tarefas = somenteCompletas ? tarefas.filter(tarefa => !tarefa.completa) : [];
    atualizarTarefas();
};

//Remove com o clique de cada botão
//Para remover somente as concluidas ele passa true como parametro para função(somenteCompletas?)
btnRemoverConcluidas.onclick = () => removerTarefas(true);
//Para remover todas ele passa flase para o prametro da função(somenteCompletas?)
btnRemoverTodas.onclick = () => removerTarefas(false);