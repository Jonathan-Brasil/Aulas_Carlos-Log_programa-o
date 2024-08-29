let resultado
let numero, i
let nome

nome = prompt("Qual seu nome?")
numero = parseInt(prompt(`${nome}, digite um número: `))

for (let i = 0; i<1; i++){
    resultado = numero * i
}
document.write(`${nome}, a sua tabuada é do número ${numero}; <br>`)
document.write(`${numero} * 0 = ${resultado}; <br>`)

for (let i = 0; i<2; i++){
    resultado = numero * i
}
document.write(`${numero} * 1 = ${resultado}; <br>`)


for (let i = 0; i<3; i++){
    resultado = numero * i
}
document.write(`${numero} * 2 = ${resultado}; <br>`)


for (let i = 0; i<4; i++){
    resultado = numero * i
}
document.write(`${numero} * 3 = ${resultado}; <br>`)


for (let i = 0; i<5; i++){
    resultado = numero * i
}
document.write(`${numero} * 4 = ${resultado}; <br>`)


for (let i = 0; i<6; i++){
    resultado = numero * i
}
document.write(`${numero} * 5 = ${resultado}; <br>`)


for (let i = 0; i<7; i++){
    resultado = numero * i
}
document.write(`${numero} * 6 = ${resultado}; <br>`)


for (let i = 0; i<8; i++){
    resultado = numero * i
}
document.write(`${numero} * 7 = ${resultado}; <br>`)


for (let i = 0; i<9; i++){
    resultado = numero * i
}
document.write(`${numero} * 8 = ${resultado}; <br>`)

for (let i = 0; i<10; i++){
    resultado = numero * i
}
document.write(`${numero} * 9 = ${resultado}; <br>`)

for(let i = 0; i<11; i++){
    resultado = numero * i
}
document.write(`${numero} * 10 = ${resultado}; <br>`)
