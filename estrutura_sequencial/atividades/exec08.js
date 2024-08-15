// Faça um algoritmo que receba o valor das horas em segundos e transforme em dias, horas e minutos.

let horas, minutos, dias, segundos
let nome 


nome = prompt("Digite seu nome: ")
horas = parseInt(prompt(`${nome}, São que horas?`))

//Cálculo
segundos = horas * 3600

//Horas em segundos
document.write(`${horas} horas, equivale a `+segundos+` segundos <br>`)

//Segundos em minutos

minutos = segundos / 60

document.write(`${segundos} segundos, equivale a ${minutos} minutos.<br>`)

//Segundos em horas 

horas = segundos / 3600

document.write(`${segundos} segundos, equivale a ${horas} horas. <br>`)

//Segundos em Dias

dias = segundos / 86400

document.write(`${segundos} segundos, equivale a ${dias} dias.<br>`)

//Em forma de relógio

document.write("--------------------------<br>")
document.write("Em formato de relógio: <br>")
document.write(`${dias}d:${horas}h:${minutos}m:${segundos}s`)

