//Escreva um programa que verifique se um número é múltiplo de 3 e 5.

let num
let nome

nome = prompt("Qual seu nome?")
num = parseInt(prompt(`${nome}, digite um número: `))

if(num%3 && num%5){
    document.write(`${nome}, o número ${num} é múltiplo. `)
}else{
document.write(`${nome}, o número ${num} não é múltiplo`)
}
