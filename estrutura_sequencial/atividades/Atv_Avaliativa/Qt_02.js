//Elabore um programa que faz a leitura de contas que devem ser pagas por um usuário. As contas são ixibidas e no final da listagem o número de contas(contador) e a soma dos valores (acumulador) são destacados.

let contador, acumuladora = 0
let numero, valorf = 0

    contador = parseInt(prompt("Digite o número de contas que você tem que pagar: "))

do{
    acumuladora++
    numero = parseInt(prompt("Digite o valor da conta: "))
    valorf = valorf + numero
    
}while (acumuladora < contador); 

document.write(`Você irá pagar ${contador} contas e o valor total será de: ${valorf}.`)


