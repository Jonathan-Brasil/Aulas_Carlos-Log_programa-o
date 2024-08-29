//Escreva um programa que verifique se um número está dentro do intervalo de 10 a 20(inclusive).

let num
let nome

nome = prompt("Qual seu nome?")
num = parseInt(prompt(`${nome}, digite um número: `))


if ( (num >= 11) && (num <=19) ){
    document.write(`${nome}, o número ${num} está dentro do intervalo. `)
}else{
    document.write(`${nome}, o número ${num} não está dentro do intervalo.`)
}


