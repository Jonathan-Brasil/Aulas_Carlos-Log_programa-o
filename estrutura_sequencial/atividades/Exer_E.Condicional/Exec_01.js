//Escrever um algoritmo que leia os dois valores inteiros distintos e informe qual é o maior

let num, num2
let nome

nome = prompt("Qual seu nome?")
num = parseInt(prompt(`${nome}, digite o primeiro número: `))
num2 = parseInt(prompt(`${nome}, digite o segundo número: `))

if (num > num2){
    document.write(`${nome}, o primeiro número é maior.`)
}else{
    document.write(`${nome}, o segundo número é maior.`)
}
