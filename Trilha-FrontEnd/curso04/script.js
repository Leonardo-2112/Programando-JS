const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

const duracaoFoco = 1500; 
const duracaoDescansoCurto = 300; 
const duracaoDescansoLongo = 900; 

const botaoInicar = document.querySelector('app__card-primary-button');
const timer = document.getElementById('timer');


//Quando clica no botão de foco altera o atributo para "classe" foco
focoBt.addEventListener('click', () =>{
    //Chama a função para alterar o contexto, passando o valor como parametro
    alterarContexto('foco')

});

//Quando clica no botão de foco altera o atributo para "classe" descanso-curto
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});

//Quando clica no botão de foco altera o atributo para "classe" descanso-longo
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
});

//Substitui o valor do atributo e o caminho a imagem de acordo com o contexto(parametro) passado
function alterarContexto(contexto){
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
