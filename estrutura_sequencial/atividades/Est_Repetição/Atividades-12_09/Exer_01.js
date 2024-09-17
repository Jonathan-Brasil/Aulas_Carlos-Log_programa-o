//Faça um algoritmo para verificar se o número digitado pelo usúario é um número primo.

// 3/1=0 
// 3/2= N
// 3/3=0

// 4/1=0
// 4/2=0
// 4/3=N
// 4/4=0

// 5/1=0 
//5/2=N 
//5/3=N 
//5/4=N 
//5/5=0

let num, cont = 0

num = parseInt(prompt("Digite um número: "))

do{
    num =parseInt(prompt("Digite um número para saber se ele é primo"))
    
    if(num <= 0 || isNaN(num)){
    alert("Digite número inteiro e maior que 0")
}

}while(num <=0 || isNaN(num));
//Essa estrutura vai repetir de 1 até o número que o usúario digitar
for(let i; i<=num; i++){
    document.write(`${num}%${i} = ${num%i} <br>`)
    //Número que o usúario digitou divido pelo valor de i
    if(numero % i === 0){
        cont++ //Vai receber 1 a cada divisão com o resto 0 
    }
}
//Fim da estrutura que vai repetir de 1 até o número que o usúario digitar

if(cont === 2){
    document.write(`O número ${num} é primo.`)
}
document.write(`O número ${num} não é primo.`)