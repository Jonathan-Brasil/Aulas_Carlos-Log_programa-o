//A loja mamão com açúcar está vendendo seus produtos em cinco(5) prestações sem juros. Faça um programa que receba um valor de uma compra e mostre o valor das prestações.

let compra, prestacoes
let nome

nome = prompt("Qual seu nome?")
compra = parseFloat(prompt(`${nome}, quanto é o doritos? <br>`))

prestacoes = compra / 5

document.write(`${nome}, a sua compra deu R$${compra}, em prestações vai dar cinco vezes de R$${prestacoes} reais. `)