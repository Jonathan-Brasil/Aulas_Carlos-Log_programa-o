//Faça um algoritmo para ler uma temperatura em Celsius e apresentá-la convertida em graus Fahrenheit.

let Celsius
let Fahrenheit

Celsius = parseInt(prompt("Digite a temperatura em Celsius: "))

Fahrenheit = (Celsius * (9/5)) + 32

document.write(`A temperatura em fahrenheit é: ${Fahrenheit}°F`)
   