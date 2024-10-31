const vetor = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10]

/* Relembrando alguns conceitos
* 1 - Leia o Array Mostre os números positivos
* 2 = Leia o Array Mostre os números negativos 
* 3 - Leia o Array Verifique o se no array existe o número  6 e qual posição ele está.
*/

//Algoritmo 1º - Leia o Array Mostre os números positivos

let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

for(let i = 0; i < vetor1.length; i++){
    if(vetor1[i] > 0){
        console.log(`Valor ${vetor1[i]} positivo.`)
    }
}

//FIM 1º

//Algoritmo 2º - Leia o Array e Mostre os números negativos 

//let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

//for(let i = 0; i < vetor1.length; i++){
//    if(vetor1[i] < 0){
//        console.log(`Valor ${vetor1[i]} negativo.`)
//    }
//}

//FIM 2º

//Algoritmo 3º - Leia o Array Verifique o se no array existe o número  6 e qual posição ele está.
//let vetor1 = [9, 3, 4, 5, 7, -1, -3, -2, 6, 10];

//for(let i = 0; i < vetor1.length ; i++){
//    if(vetor1[i] === 6){
//        console.log(`O número ${vetor1[i]} está na posição ${i}º`)
//    }
//}
//FIM 3º