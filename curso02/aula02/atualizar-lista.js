const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Majorie', 'Leo'];

//splice ->
//  primeiro parametro é de inicio, começa a contar do valor passado em diante 
//  segundo parametro é referente a quantidade de indices a serem removidos a partir do parametro de inicio
//  terceiro parametro valor adicionado de acordo com o parametro de inicio

listaEstudantes.splice(1, 2, "Rodrigo");

console.log(listaEstudantes);