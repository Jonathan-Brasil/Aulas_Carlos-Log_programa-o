//Escreva um programa que verifique se três lados podem formar um triângulo válido. Um triângulo é válido se a soma de dois lados for sempre maior que o terceiro lado.

let lado1, lado2, lado3

lado1 = parseFloat(prompt("Digite a medida do primeiro lado do seu triângulo"))
lado2= parseFloat(prompt("Digite a médida do segundo lado do seu triângulo"))
lado3 = parseFloat(prompt("Digite a médida do terceiro lado do seu triângulo"))

if (((lado1+lado2) > lado3) && ((lado1+lado3) > lado2) && ((lado2+lado3) > lado1)) {
document.write(`O seu triângulo é válido`)
} else {
    document.write(`O seu triângulo é inválido`)
}jonath
