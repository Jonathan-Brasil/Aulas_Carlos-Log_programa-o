//Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o somatório desses números na tela. Após exibir a soma, o programa deve mostrar também os números que o usuário digitou, um por linha.

let numeros = [], somatorio

for(let i = 0; i < 5; i++){
    numeros = Number(prompt("Digite cinco números: "));
}

for(let i = 0; i < numeros; i++){
    somatorio = somatorio + numeros
}

document.write(`<p>A soma dos 5 números: ${somatorio}</p>`)

document.write(`<p>Os números digitados pelo usúario: ${numeros}</p>`)
