//Elabore um programa que leia um número N e que indique quantos valores inteiros e positivos devem ser lidos a seguir. Para cada número lido, mostre o valor lido e o fatorial desse valor.

//for(){
//
//    for(){
//
//    }
//    
//}

let qtdNumn, numEscolhido, fatorial = 1;

do{
    qtdNumn = parseInt(prompt("Quantos números fatoriais você deseja saber?"))
    if(qtdNumn <= 0 || isNaN(qtdNumn)){
        alert("Número inválido")
    }
}while (qtdNumn <= 0 || isNaN(qtdNumn));

for(let i = 0; i<=qtdNumn; i++){

    do{
        numEscolhido = parseInt(prompt(` Digite o ${i}º numero para ser o fatorial<br>`))
    if(numEscolhido <= 0 || isNaN(numEscolhido)){
    alert("Número inválido")
        }
    }while (numEscolhido <= 0 || isNaN(numEscolhido));

    fatorial = 1 
    for(let y = 1; y<= numEscolhido; y++){
        fatorial = fatorial * y
    }

    document.write(`Fatorial de ${numEscolhido} é ${fatorial}.`)

}