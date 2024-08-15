let valorDepositado, valorRendimento, tempo
let nome

nome = prompt("Qual seu nome?")
valorDepositado = parseInt(prompt(`${nome}, quanto você depositou? `))
tempo = parseFloat(prompt(`${nome}, quantos meses irá deixar o dinheiro?`))

valorRendimento = valorDepositado * (1 + 0.0007)

document.write(`${nome}, o seu rendimento em ${tempo} mês é de ${valorRendimento}`)