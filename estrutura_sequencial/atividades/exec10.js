//Faça um programa que receba o preço de custo de um produto e mostre o valor da venda. Sabe-se que o preço de custo receberá um acréscimo de acordo com um percentual informado pelo usúario.

let juros, venda, valor
let nome

nome = prompt("Qual seu nome?")
venda = parseFloat(prompt(`${nome}, Qual o valor da venda? <br>`))
juros = parseFloat(prompt(`${nome}, qual o valor do juros?`))

valor = (venda*juros)+venda

document.write(`${nome}, o valor final da compra é R$${valor} `)


