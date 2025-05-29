const prompt = require('prompt-sync') ();

let maca = Number(prompt("Quantas maçãs vc quer comprar? "))
let valor

if (maca < 12) {
    valor = 0.30

} else {
    valor = 0.25
}

let total = maca * valor

console.log(`Você comprou ${maca} maçãs, cada uma saiu a ${valor.toFixed(2)} e o total ficou em: R$${total.toFixed(2)}`)