//Faça um algoritmo para ler duas variáveis A e B e efetuar as trocas dos valores de forma que a variável A passe a possuir o valor da variável B e a variável B passe a possuir o valor da variável A. Apresenta na tela os dois valores trocados (antes AB, depois AB).

let A, B
let temp

A = parseInt(prompt(`Digite o primeiro valor de A: `))
B = parseInt(prompt(`Digite o primeiro valor de B: `))

document.write(`O valor de A: ${A} e B: ${B}<br> `)
document.write(`${A - B} <br> `)//A4 - B5 = -1


temp = A
A = B 
B = temp

document.write(`O valor de A: ${A} e B: ${B} <br> `)
document.write(`${A - B} <br>`) //A -B4 = 1