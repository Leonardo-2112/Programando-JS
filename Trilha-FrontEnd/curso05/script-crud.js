//Encontrar botão adicionar tarefa

const btnAdicionarTarefa = document.querySelector('.app__button--add-task');
const formAdicionarTarefa = document.querySelector('.app__form-add-task');
const textarea = document.querySelector('.app__form-textarea');

const tarefas = [];

btnAdicionarTarefa.addEventListener('click', () => {
    //toggle -> adiciona a classe CSS ao elemento se ela não existir, ou a remove se ela já estiver presente, 
    //funcionando exatamente como um interruptor
    formAdicionarTarefa.classList.toggle('hidden')
});

//submit -> quando enviar um formulário
formAdicionarTarefa.addEventListener('submit', (evento) => {
    //Impede o comportamento padrão do formulário(recarregar página após submit)
    evento.preventDefault();
    //cria um objeto tarefa com a propriedade descricao cujo o valor é o valor do textarea escrito pelo usuário
    const tarefa = {
        decricao: textarea.value
    }
    //Coloca o objeto tarefa dentro da lista(array) tarefas
    tarefas.push(tarefa);
    //localStorage ->  Os dados continuam salvos mesmo se você fechar a aba (só salva strings)
    //(onde irá salvar, oque deve salvar)
    localStorage.setItem('tarefas', JSON.stringify(tarefas));//convertendo objeto em strings usando JSON
});