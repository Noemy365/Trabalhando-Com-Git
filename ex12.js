const readline = require ('readline-sync')

console.log ('  ')
console.log ('------ AULAS DO CURSO ------')
console.log ('  ')

let totalDeAulas = readline.questionInt ('Qual é o total de aulas no curso?: ')
let aulasAssistidas = readline.questionInt ('Quantas aulas foram assistidas no curso?: ')

let percentual = (aulasAssistidas/totalDeAulas) *100
let diferenca = totalDeAulas - aulasAssistidas

console.log ('  ')
console.log ('------ PORCENTAGEM DE AULAS ASSISTIDAS ------')
console.log ('  ')

if (percentual <50){
    console.log(`Você ainda está no começo do curso. Você assistiu à ${percentual.toFixed(2)}% das aulas totais.`)
}else if (percentual < 100){
    console.log(`Você está avançando bem. Você assistiu à ${percentual.toFixed(2)}% das aulas totais.`)
}else{
    console.log ('Parabéns! Você concluiu o curso. Você assistiu o total de 100% das aulas do curso.')
}