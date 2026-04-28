const readline = require ('readline-sync')

let limiteCal = 2000
let calConsumidas = readline.questionFloat ('Quantas calorias foram consumidas hoje?: ')

let percentual = (calConsumidas/limiteCal)*100
let diferenca = limiteCal - calConsumidas

if(calConsumidas <= limiteCal){
    console.log ('Você está dentro do limite diário.')
}else{
    console.log (`Você não está dentro do limite diário. Você execedeu ${percentual.toFixed(2)}%`)
}