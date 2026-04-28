const readline = require ('readline-sync')

console.log ('  ')
console.log ('------ META DE VENDAS ------')
console.log ('  ')

let metaDiaria = 5000
let metaAtingida = readline.questionFloat ('Valor total faturado do dia: ')
let percentual = (metaAingida/metaDiaria) *100
let diferenca = metaDiaria - metaAtingida

if (metaAtingida < metaDiaria){
    console.log (`Você não alcançou a meta diária. Faltou ${percentual.toFixed(2)}.`)
}else {
    console.log (`Você alcançou (ou excedeu) a meta diária em ${percentual.toFixed(2)} `)
}