interface Workout{
    nome: string
    repeticoes: number
    series: number
}

//Lista do tipo workout
const treinos: Workout[] = [];

function registrarTreino (treino:Workout):void{
    treinos.push(treino);
}

function listarTreinos():void{
    treinos.forEach((treino) =>{
        console.log(treino);
    })
}

const workout1:Workout ={
    nome: "Supino reto",
    repeticoes: 20,
    series: 3
}

registrarTreino(workout1);
listarTreinos();
