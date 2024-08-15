//Variáveis
let real, dolar, cotacaoDolar
let nome

//Entrada de dados
nome = prompt("Qual seu nome?")
cotacao = parseFloat(prompt(`${nome}, quanto está a cotação do dólar?`))
real = parseFloat(prompt(`${nome}, digite o valor para ser convertido em dólar: `))

//Expressão
dolar = real / cotacao

//Valor em reais
document.write(`${nome}, você tem em dólar: U$${dolar}`)
document.write(`Você tem em reais: ${real}`)