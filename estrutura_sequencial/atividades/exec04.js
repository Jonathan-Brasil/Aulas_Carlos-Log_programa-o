let distanciaTotal, combustivelGasto
let consumoMedio

distanciaTotal = parseFloat(prompt("Qual a distância total percorrida pelo automóvel? "))
combustivelGasto = parseFloat(prompt("Qual o total de combustível gasto? "))

consumoMedio = distanciaTotal / combustivelGasto

document.write(`O consumo médio de um automóvel ${consumoMedio.toFixed(2)}Km/1`)