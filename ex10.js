const readline = require ('readline-sync')

let totalDePaginas = 300

console.log ('--------------')
console.log ('| BIBLIOTECA |')
console.log ('--------------')

let qtdPaginasLidas = readline.questionFloat ("Quantas páginas já foram lidas: ")
let percentual = (qtdPaginasLidas / totalDePaginas) * 100

console.log('  ')
console.log ( '----- RESULTADO -----' )
console.log('  ')
console.log  (`o usuario leu ${percentual}% do livro`)
