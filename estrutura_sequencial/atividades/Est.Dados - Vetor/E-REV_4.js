//Faça um programa que preencha dois vetores com dez elementos numéricos cada um e mostre um vetor resultante da intercalação deles.
//vetor 1 - | 1 | 3 | 5 | 7
//vetor2 - | 2 | 4 | 6 | 8 |
//vetorResultante - | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 

const vet1 = [1, 3, 5, 7];
const vet2 = [2, 4, 6, 8];
const vet3 = [];
//const vet3 = [ vet1[0], vet2[0]]
//           = j0 , j1 , j2 , j3 
let j = 0
for(let i = 0; i < 4; i++){
    vet3[j] = vet1[i]
    j++
    vet3[j] = vet2[i]
    j++
}
console.log(vet1)
console.log(vet3)