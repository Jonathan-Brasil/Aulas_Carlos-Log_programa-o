let precoCusto, precoVenda
let percentualAcrescimo, valorAcrescimo

precoCusto = parseFloat(prompt(`Digite o preço de custo do produto: `))
percentualAcrescimo = parseFloat(prompt(`Digite o percentual de acréscimo (%):`))

valorAcrescimo = precoCusto * (percentualAcrescimo/100)
precoVenda = precoCusto + valorAcrescimo

document.write(`O preço de custo é de R$${precoCusto} <br>`)
document.write(`O Precentual de acréscimo é de ${percentualAcrescimo}% <br> `)
document.write(`O valor do acréscimo foi de R$${valorAcrescimo} <br>`)
document.write(`Preço de venda foi de R$${precoVenda} <br>`)