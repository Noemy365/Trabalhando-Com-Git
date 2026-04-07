const readline = require('readline-sync')

let idade = readline.questionInt ('informe a sua idade: ')

if(idade >= 18){
    console.log('Você é maior de idade e pode entrar no evento')

}   else{

    console.log('Você é menor de idade e você não pode entrar no evento')
}
