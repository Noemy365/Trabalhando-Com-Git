const readline = require('readline-sync')

let nome = readline.question('Nickname do Jogador:')
let jogoFavorito = readline.question('Jogo Favorito:')
let pontuacaoAtual = readline.question('Pontuaco Atual:')

console.log('= PERFIL DO JOGADOR =')
console.log(`Nickname do jogador: ${nome}`)
console.log(`Jogo Favorito: ${jogoFavorito}`)
console.log(`Pontuacao Atual: ${pontuacaoAtual}`)