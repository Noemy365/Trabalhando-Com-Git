const readline = require ('readline-sync')

console.log('----------------------')
console.log('|     BIBLIOTECA     |')
console.log('----------------------')

let tamanhoTotal = 20
let qtdBaixados = readline.questionInt('Quantos GB foram baixados?')
let percentual = (qtdBaixados / tamanhoTotal) * 100

console.log('---------------------')
console.log('|     RESULTADO     |')
console.log('---------------------')

console.log(`Foram carregados ${percentual}% do arquivo`)