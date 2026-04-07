const readline = require ('readline-sync')

let meta = 40
let horasEstudadas = readline.questionFloat ('Quantas horas você estudou: ')
let diferenca = meta - horasEstudadas

console.log ('===== Horas Estudadas =====')

if(meta <= horasEstudadas){
    console.log ('Parabens, você atingiu a meta')
    console.log (`você alcançou ${Math.abs(diferenca)}`)

}   else{
    console.log (`Faltaram ${diferenca} horas estudadas`)
}