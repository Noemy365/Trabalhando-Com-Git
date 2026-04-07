const readline = require ('readline-sync')

let notaMinima = 7
let notaFinal = readline.questionFloat ('Informe sua nota: ')

if (notaMinima <= notaFinal){
    console.log('Você atingiu o seu objetivo!')

}  else{
        console.log ('Você não passou de ano!')
}