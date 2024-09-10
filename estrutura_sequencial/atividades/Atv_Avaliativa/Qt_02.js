//Elabore um programa que faz a leitura de contas que devem ser pagas por um usuário. As contas são ixibidas e no final da listagem o número de contas(contador) e a soma dos valores (acumulador) são destacados.

//Variáveis contadoras - acumuladoras = iniciadas com o valor 0  
//1º variavel++, variavel-- 
//2º variavel = varialvel + acumular 

let nomeConta, valorConta
let qtdConta = 0, valorTotal = 0 
let i =1



while(i !== 0){

    do{
        valorConta = parseInt(prompt(`Digite o valor da conta ${nomeConta}.`))
        nomeConta = prompt("Qual conta irá pagar")
        if(nomeConta === ''){
            alert("A conta precisa de uma descrição, DIGITE MISERÁ!")
        }
    
    }while(nomeConta === '');

    do{
        valorConta = parseInt(prompt(`Digite o valor da conta ${nomeConta}: `))
        if(valorConta === 0 || isNaN(valorConta)){
            alert("O valorda conta precisa ser números")
        }
    }while(valorConta === 0 || isNaN(valorConta));

    qtdConta++
    valorTotal = valorTotal + valorConta

    document.write(`<h4>${nomeConta} \t\t ------ \t\t ${valorConta} </h4>`)
    i = parseInt(prompt("Digite 1 para continuar cadastrado e 0 para sair"))
}
document.write(`<h3>Quantidade de contas ${qtdConta} ------ ${valorTotal}</h3>`)