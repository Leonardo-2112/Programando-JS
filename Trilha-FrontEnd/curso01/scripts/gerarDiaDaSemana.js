function gerarDiaDaSemana() {
    //Cria uma instancia do objeto Date
    //toLocaleDateString -> formata a data (padrão da data, como exibir dias da semana/ do mes e etc)
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { weekday: "long" });
    const data = new Date().toLocaleDateString("pt-BR");

    //toLocaleTimeString -> formata a Hora (padrão do horário, o que vai ser exibido "hora e minuto")
    const hora = new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" });

    //Sring com a data completa(dia da semana, data no formato DD/MM/AAAA e horario formatado)
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    return dataCompleta;
}
//Export default -> //Permite expor apenas um único valor, classe ou função principal por arquivo.
                    // Na importação, você pode dar o nome que quiser para o item importado.
                    // Na importação, não se usa chaves {}
export default gerarDiaDaSemana;