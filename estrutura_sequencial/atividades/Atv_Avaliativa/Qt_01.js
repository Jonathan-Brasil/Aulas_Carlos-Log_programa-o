//Elabore um programa que realize a leitura de um número e, caso o número for par ele exibe o dobro do número e se for ímpar, o triplo. A leitura continua até que o usúario informe 0. Inicialmente, uma mensagem alertando sobre a execução do programa é apresentada.

//continue = faz um novo teste lógico 
//break = finaliza a estrutura de repetição

//let numero = 1

//1º Maneira 1
//while(numero != 0){
//    alert("Entrou no laço")
//    numero = parseInt(prompt("Digite 0 pra sair"))
//}

//2ª Maneira - continue - break
//for(let i = 1;i<=10; i++){
//    if(i === 5 || i === 8){
//        continue
//    }
//    
//    if(i === 7){
//       break
//   }
//    console.log("i,:" +i)
//}


alert("Digite 0 para sair do programa")
let numero

do{
    numero = parseInt(prompt("Digite um número"))
    debbuger
    if(numero ===0 || isNaN(numero)){
        //confirmar a saída
        let sair = prompt("Confirmar saída")
        if(sair){
            break
        }else{
            continue
        }
    }
    //continuar a lógica par(dobro) e impar(triplo)
    if(numero%2 === 0){
alert(`O dobro do ${numero} é: ${numero*2}.`)
    }else{
        alert(`O triplo do ${numero} é: ${numero*3}.`)
    }
    alert("Digite 0 para sair do programa")
}while (true)