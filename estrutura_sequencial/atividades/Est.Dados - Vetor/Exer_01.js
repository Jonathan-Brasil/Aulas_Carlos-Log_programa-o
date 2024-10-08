let numeros, sequencia = [], acumuladora = 0

for (let i = 0 ; i > sequencia; i--){
    numeros = Number(prompt("Digite os números: "))
    sequencia = sequencia - numeros
}
document.write(`<p> Os números na ordem inversa fica assim: ${sequencia}</p>`)


