//Variáveis:
let num, num2
let multiplicacao, subtracao, divisao, soma
//Texto:

num = parseInt(prompt("Insira um número:"))
num2 = parseInt(prompt("Insira o segundo número:"))

// Soma:
soma = num + num2
document.write("<br> O valor da soma é: " +soma+" <br> ")

//Divisão:
divisao = num / num2
document.write("A divisão desses números é: "+divisao+"<br>")

//Subtração:
subtracao = num - num2
document.write("O resultado dessa subtração é: "+subtracao+"<br>")

//Multiplicação:
multiplicacao = num * num2
document.write("O valor final dessa multiplicação é: " + multiplicacao+"<br>")
