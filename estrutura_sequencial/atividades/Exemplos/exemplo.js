//FUNÇÕES

//1º Função que não recebe parâmetros e não tem retorno
//function soma1(){ // é um trecho de código que poe
//    let numero1, numero2, soma
//    numero1 = 5
//    numero2 = 5
//    soma = numero1 + numero2
//    console.log(`${soma}`)
//}
//soma1()
//console.log("somando=>", soma1() + 5) //Não é possível resolver operações


//2º Função que recebe parâmetros/argumentos e não tem retorno
//function soma2(parametro1, parametro2){
//    let soma 
//    soma = parametro1 + parametro2
//    console.log(soma) 
//}
//console.log('----------- função com param e sem retorno ----------')
//soma2() //NAN
//soma2(4) //NAN
//soma2(4,4) //Retorna Soma 
//soma2(4,4,4,4,4,4,4,4,4,4) // = 8
//console.log(soma(4,4) + 2)

//3º  Função que recebe parâmetros/argumentos e tem retorno

//function soma3 (param1, param2){
//    let soma = param1 + param2
//    return soma
//}
//console.log('----------- função com param e retorno ----------')
//console.log(soma3(10,10))
//console.log(soma3(10,10) + 10)

function cadastro(nome, idade, altura){
    if(idade < 18){
        console.log(`${nome} com altura ${altura} não tem permissão`)
    }else{
        console.log(`${nome} com altura ${altura} tem permissão`)
    }
}
cadastro("Carlos", 32, 1.82)
cadastro("Wilton", 16, 1.60)