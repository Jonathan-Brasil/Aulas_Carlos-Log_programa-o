let nome
let nota, nota2, nota3
let media

nome = prompt("Digite seu nome: ")
nota = parseFloat(prompt("Digite a primeira nota: "))
nota2 = parseFloat(prompt("Digite a segunda nota: "))
nota3 = parseFloat(prompt("Digite a terceira nota: "))


document.write("A nota da primeira avaliação foi: "+nota+"<br>")
document.write("A nota da segunda avaliação foi: "+nota2+"<br>")
document.write("A nota da terceira avaliação foi: "+nota3+"<br>")

media = (nota + nota2 + nota3) / 3

document.write("A média dessas notas são: "+media)