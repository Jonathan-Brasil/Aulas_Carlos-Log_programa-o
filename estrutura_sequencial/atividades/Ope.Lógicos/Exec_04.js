//Escreva um programa que verifique se um ano é bissexto.

let ano

nome = prompt("Qual seu nome?")
ano = parseInt(prompt(`${nome}, digite o ano: `))

if (ano%4 ==0){
    document.write(`${nome}, o ano de ${ano} é ano bissexto.`)
}else{
    document.write(`${nome}, o ano de ${ano} não é ano bissexto.`)
}