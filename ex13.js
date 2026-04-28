const readline = require ('readline-sync')

console.log ('  ')
console.log ('------ LIMITE DE INTERNET ------')
console.log ('  ')

let plano = readline.questionFloat ('Qual é o seu limite de internet(GB)?: ')
let utilizado = readline.questionFloat ('Quanto você gastou do GB: ')

let percentual = (utilizado/plano) *100
let diferenca = plano - utilizado

console.log ('  ')
console.log ('------ LIMITE ------')
console.log ('  ')

if (percentual < 80){
    console.log (`Uso dentro do limite. Você utilizou ${percentual.toFixed(2)}% do seu plano`)
}else if (percentual <= 100){
    console.log (`Atenção, você está perto do seu limite. Você utilizou ${percentual.toFixed(2)}% do seu plano.`)
}else{
    console.log (`Você atingiu o limite de internet. Você utilizou ${percentual.toFixed(2)}% do seu plano.`)
}