//Elabore um algoritmo a ler 3 notas de um aluno(de 1 a 10 ). Após calcular a média das notas=, apresentar a mensagem "Aprovada" se o aluno tiver obtido média maior ou igual a 7, caso contrário, apresentar "Reprovado".

let nome
let n1, n2, n3

nome = prompt("Qual seu nome?")
n1 = parseFloat(prompt(`${nome}, digite o primeiro valor: `))
n2 = parseFloat(prompt(`${nome}, digite o segundo valor: `))
n3 = parseFloat(prompt(`${nome}, digite o terceiro valor: `))

media = (n1 + n2 + n3) /3

if (media >= 7){
document.write(`${nome}, você foi aprovado`)
}else{
    document.write(`${nome}, você foi reprovado`)
}