const readline = require ('readline-sync')

let totalDePaginas = 300
let qtdPaginasLidas = readline.questionFloat ("Quantas páginas já foram lidas: ")
let percentual = (qtdPaginasLidas / totalDePaginas) * 100

console.log ( 'RESULTADO' )
console.log  (`o usuario leu ${percentual}% do livro`)
