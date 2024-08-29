//Elabore um algoritmo que leia um número e informe se ele é positivo ou negativo.

let num1
let nome

nome = prompt("Qual seu nome?")
num1 = parseFloat(prompt(`${nome}, digite um número: `))

if (num1 >=0){
    document.write(`${nome}, o número é positivo.`)
}else{
    document.write(`${nome}, o número é negativo.`)
}