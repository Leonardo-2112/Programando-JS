const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button ');
const musicaFocoInput = document.querySelector('#alternar-musica');
const startPauseBt = document.querySelector('#start-pause');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const imgComecar = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.getElementById('timer');

let intervaloId = null
let tempoDecorridoEmSegundos = 1500;

//Cria uma instancia do Objeto Audio
const musica = new Audio('sons/luna-rise-part-one.mp3');
const musicaPlay = new Audio('sons/play.wav');
const musicaPause = new Audio('sons/pause.mp3');
const musicaAcabouTempo = new Audio('sons/beep.mp3');

//Cria um loop para a música continuar tocando após acabar o tempo do audio
musica.loop = true;

//change -> true or faalse (ligado ou desligado. Usado em inputs)
musicaFocoInput.addEventListener('change', () => {
    //paused -> propriedade do JS verificando se esta pausado 
    if(musica.paused){
        //Caso esteja pausado ele despausa utilizando o método play do objeto Audio
        musica.play();
    }
    //Caso esteja rolando ele pausa utilizando o método pause do objeto Audio
    else{
        musica.pause();
    }
})

//Quando clica no botão de foco altera o atributo para "classe" foco
focoBt.addEventListener('click', () =>{
    tempoDecorridoEmSegundos = 1500;
    //Chama a função para alterar o contexto, passando o valor como parametro
    alterarContexto('foco');
    focoBt.classList.add('active');
    
});

//Quando clica no botão de foco altera o atributo para "classe" descanso-curto
curtoBt.addEventListener('click', () => {
    //Altera o tempo do timer de acordo com o lugar que está
    tempoDecorridoEmSegundos = 300;
    alterarContexto('descanso-curto');
    //classList ->  propriedade de leitura que serve para ver e mexer nas classes de um elemento HTML
    curtoBt.classList.add('active');
});

//Quando clica no botão de foco altera o atributo para "classe" descanso-longo
longoBt.addEventListener('click', () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
});

//Substitui o valor do atributo e o caminho a imagem de acordo com o contexto(parametro) passado
function alterarContexto(contexto){
    //Chama função para mostrar o tempo toda vez que alterar o contexto
    mostrarTempo();
    //Percorre o array de botôes removendo o active de todos
    //(como dentro dos eventos a função é chamada antes do classList.add funciona perfeitamente)
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })

    //setAttribute -> primeiro parametro é o elemento a ser alterado, segundo parametro é o valor a ser alterado
    html.setAttribute("data-contexto", contexto);
    //passa o atributo que quer alterar e em seguida o valor que vai ser atribuido ao atributo
    banner.setAttribute("src", `imagens/${contexto}.png`);

    //Pega o contexto(foco/descando-curto/longo) e muda o texto com innerHTML em cada caso específico
    switch (contexto) {
        case "foco":
            titulo.innerHTML = ` Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>`;
            break;
        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar à superfície.<br>
                <strong class="app__title-strong"> Faça uma pausa longa.</strong>`
        default:
            break;
    }
}


const contagemRegressiva = () =>{
    if(tempoDecorridoEmSegundos <= 0){
        musicaAcabouTempo.play();
        alert('Tempo Finalizado');
        zerar();
        return
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
};

function iniciarOuPausar(){
    if(intervaloId){
        musicaPause.play();
        zerar();
        return
    }
    musicaPlay.play();
    //setInterval -> 1 parametro oque ele vai executar, 2 parametro a cada quando tempo ele vai executra isto (em milisegundos)
    intervaloId = setInterval(contagemRegressiva, 1000);
    //textContent -> inserir texto (não entende com tag HTML)
    iniciarOuPausarBt.textContent = "Pausar";
    imgComecar.setAttribute("src", "imagens/pause.png");
}

startPauseBt.addEventListener('click', iniciarOuPausar);

function zerar(){
    //clearInterval -> interrompe um comando
    clearInterval(intervaloId);
    //textContent -> inserir texto (não entende com tag HTML)
    iniciarOuPausarBt.textContent = "Começar";
    imgComecar.setAttribute("src", "imagens/play_arrow.png");
    intervaloId = null;
}

function mostrarTempo(){
    //Instancia o objeto date e mutiplica para ficar em milisegundos
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    //Formata para aparecer em minutos
    const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {minute: '2-digit', second: '2-digit'});
    //Exibe na tela chamando o elemento HTML atribuido na variavel "tempoNaTela"
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}
//Inicia com o timer na Tela
mostrarTempo();