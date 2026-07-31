// Exercício 1) Capturando a data atual

// Você está trabalhando nesse projeto de lista de tarefas e quer acrescentar a data e o horário 
// em que uma tarefa foi adicionada à lista, então agora você recebeu um desafio! 
// Sua missão é criar uma função que capture o momento atual e exiba esse valor no console do navegador.
const button = document.getElementById("button-item");
const inputItem = document.getElementById("input-item");

function pegarDataEHoraAtual() {
    const dataAtual = new Date();
    console.log(dataAtual);
    // Exercício 2) Ajustando o formato do dia da semana
    // Contudo, não é um formato fácil de entender e por isso agora, 
    // seu objetivo é manipular o valor do dia da semana para ser exibido como o exemplo abaixo:
    // quarta-feira
    // Uma dica valiosa é que você pode usar o método toLocaleDateString() para te ajudar nesse processo.
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    console.log(diaDaSemana);


    // Exercício 3) Exibindo a data no formato brasileiro 
    // Agora chegou a vez de formatar a data no formato brasileiro para que ele fique da seguinte maneira:
    // dd/mm/aaaa
    // você precisa exibir no console tanto o dia da semana quanto a data formatada. 
    // O resultado deve ser:
    // quarta-feira, dd/mm/aaaa
    const dataFormatada = new Date().toLocaleDateString("pt-BR");
    const dataEDiaDaSemana = `${diaDaSemana} (${dataFormatada})`;
    console.log(dataEDiaDaSemana);


    // Exercício 4) Formatando o horário
    // Você já formatou o dia da semana e a data, agora é o momento de formatar o horário 
    // você precisa exibir no console do navegador o dia da semana, a data e a hora.
    const hora = new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"});
    const dataCompleta = `${diaDaSemana} (${dataFormatada}) às ${hora}`;
    console.log(dataCompleta);  
}

button.addEventListener("click", (evento) => {
    pegarDataEHoraAtual();
});


