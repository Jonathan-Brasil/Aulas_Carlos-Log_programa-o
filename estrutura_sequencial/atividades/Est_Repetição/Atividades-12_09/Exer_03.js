//Elaore um programa que leia um número e verifique se ele é ou não perfeito. Um npumero dito perfeito é aquele que é igual à soma dos seus divisores inteiros (exceto o próprio número).

let num, cont = 0
let numPerfeito 

// 6 -> 6/1 = 0 | 6/2 = 0 | 6/3 = 0 | 6/4 = N | 6/5 = N | 6/6=0

do{
    num =parseInt(prompt("Digite um número para saber se ele é perfeito"))
    
    if(num <= 0 || isNaN(num)){
    alert("Número digitado inválido")
}
}while (num <= 0 || isNaN(num));

for(let i; i < num; i++){
    if(num % i === 0){
        numPerfeito = numPerfeito + 1
    }
}
if(numPerfeito === numero){
    document.write(`O número ${num} é um número perfeito.`)
}else{
    document.write(`O número ${num} NÃO é um número perfeito.`)
}