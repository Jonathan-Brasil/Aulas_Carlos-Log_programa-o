//1º Entrada de dados
let num1, num2
let soma

//Float -> 1.6982 | Int -> 1
num1 = parseFloat(prompt("Digite o primeiro número: "))
num2 = parseFloat(prompt("Digite o segundo número: "))

//2º Processamento
soma = num1 + num2

//3º Saída de dados -> concatenação ``(crases) shift + lado p 
document.write(`A soma de ${num1} + ${num2} = ${soma}`)