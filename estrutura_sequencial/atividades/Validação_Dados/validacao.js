let numero1, numero2, validacao
//isNaN -> verificar o que foi digitado (texto)

//validação
do{
    numero1 = parseInt(prompt("Digite 1º número"))
    if(isNaN(numero1) || numero1 < 0)
    alert("Número inválido, digite um valor positivo e maior que 0")

} while (isNaN(numero1) || numero1 < 0)

do{
    numero1 = parseInt(prompt("Digite 1º número"))
    if(isNaN(numero1) || numero1 < 0){
        alert("Número inválido, digite um valor positivo e maior que 0")
    }
}while(isNaN(numero2) || numero2 < 0)

console.log(numero1+numero2)


//isNaN -> verificar o que foi digitado (texto)
//numero1 = 't'

//if(isNaN(numero1)){
// console.log("Digite um número válido")
//}

//console.log(validacao)
