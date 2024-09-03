//Elabore um programa que ilustra a montagem de uma estrutura de repetição decrescente, com o valor inicial informado pelo usuário até o número 1.

let vInicial

vInicial = Number(prompt("Digite um número: "))

for(let i = vInicial; i >= 1 ; i--){
    document.write(`${i} <br>`)
}