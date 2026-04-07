const readline = require ('readline-sync')

let meta = 10000
let passos = readline.questionInt ('Quantos passos vocẽ deu hoje?')
let diferenca = meta - passos

console.log('====== RESULTADO ======')

if(passos >= meta ){
    console.log ('Parabens, vocẽ atingiu a sua meta')
    console.log (`Você passou ${Math.abs(diferenca)} passos da meta`)
}else  {
console.log (`Faltaram ${diferenca}`)
}