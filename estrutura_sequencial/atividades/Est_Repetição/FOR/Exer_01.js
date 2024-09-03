//Elabore um programa que leia um valor de número e apresentar a tabuada do mesmo.

let numero, i = 1

numero = Number(prompt("Digite um número para construir sua tabuada: "))
// Number serve como um "parseInt" e um "parseFloat" juntos.
debugger;
for(i; i<=10; i++){
    document.write(`${numero} x ${i} = ${numero*i} <br>`)
}
