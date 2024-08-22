//Elabore um algoritmo que leia do teclado a idade do usúario. Se o valor digitado maior que 18 anos, escrever na tela "Pode dirigir". Caso contrário, informar "Entregue a chave"

let idade
let nome

nome = prompt("Qual seu nomne?")
idade = parseInt(prompt(`${nome}, quantos anos você tem?`))

if(idade >=18){
      document.write(`Pode dirigir`)
}else{
      document.write(`Entrega a chave`)
}