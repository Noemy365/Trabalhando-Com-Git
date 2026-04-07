const readline = require ('readline-sync')

let objetivo = 500
let dinheiroGuardado = readline.questionFloat ('Quanto dinheiro você guardou esse mês: ')
let diferenca = objetivo - dinheiroGuardado

console.log ('===== DINHEIRO =====')

if(objetivo <= dinheiroGuardado){
    console.log ('Vocẽ foi inteligente, parabens')
    console.log (`Você passou ${Math.abs(diferenca)} da sua meta`)

}else {
    console.log (`Faltaram ${diferenca} pra alcançar a meta`)
}