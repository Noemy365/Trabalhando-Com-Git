const readline = require ('readline-sync')

let limiteDiario = 4
let tempoDiario = readline.questionFloat ('Por quantas horas você utilizou o celular hoje?: ')
let percentual = (tempoDiario/limiteDiario)*100

if(tempoDiario <= limiteDiario){
    console.log ('Você está dentro do limite.')
}else{
    console.log(`Você ultrapassou o limite diário a ${percentual.toFixed(2)}%`)
}