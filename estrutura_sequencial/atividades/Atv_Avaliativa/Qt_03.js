

let contadora = 1
let numero

do{
    numero =parseInt(prompt("Digite o número de chinchilas: "))
    if(isNaN(numero) || numero < 2){
        alert("Número inválido, digite um valor maior ou igual a 2.")

    }
}while (isNaN(numero) || numero < 2 );

while(contadora != 6){
    numero = numero * 3 
    document.write(`No ${contadora}º ano você terá: ${numero} chinchila <br>`)
    contadora++
}