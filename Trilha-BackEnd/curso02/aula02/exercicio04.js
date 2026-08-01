//4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. 
// Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal 
// seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ["Strogonoff de Frango", "Filé à Parmegiana", "Risoto de Camarão", "Feijoada"];
const menuDeSobremesas = ["Petit Gâteau", "Crème Brûlée", "Cheesecake", "Pudim"];

const menuCompleto = menuPrincipal.concat(menuDeSobremesas);

console.log(menuCompleto);