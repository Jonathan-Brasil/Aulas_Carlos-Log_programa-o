//Elabore um programa que realize a leitura de um número e, caso o número for par ele exibe o dobro do número e se for ímpar, o triplo. A leitura continua até que o usúario informe 0. Inicialmente, uma mensagem alertando sobre a execução do programa é apresentada.

let numero 

numero = parseInt(prompt("Digite um número: "))

if(numero % 2 == 0){
    document.write(`O número é par que é ${numero} e dobrado ele fica ${numero*2}. <br>`)
}else{
    document.write(`O número é ímpar que é ${numero} e triplicado ele fica ${numero*3}.`)
}


