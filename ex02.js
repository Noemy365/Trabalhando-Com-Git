const readline = require('readline-sync')

let nome = readline.question('Informe seu nome:')
let nomeDoPrato = readline.question('Informe o nome do prato:')
let valorDoPrato = readline.questionFloat('Valor do seu prato:')

console.log('========= RESUMO DO PEDIDO ==========')
console.log(`Cliente: ${nome}`)
console.log(`Prato escolhido: ${nomeDoPrato}`)
console.log(`Valor: ${valorDoPrato}`)