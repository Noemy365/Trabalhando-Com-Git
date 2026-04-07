const readline = require('readline-sync')

let freteGratis = 100
let valorCompra = readline.questionFloat ('Qual o valor da compra: ')
let diferenca = freteGratis - valorCompra

if(valorCompra > freteGratis){
    console.log('Você tem frete gratis')

}   else{
    console.log('Você não adquiriu o frete gratis')
     console.log(`Faltam ${Math.abs(diferenca)} pra adquirir o frete gratis`)
}