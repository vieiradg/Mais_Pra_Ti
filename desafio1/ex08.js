const prompt = require('prompt-sync') ();

let valor1 = Number(prompt("Escolha um número: "))
let valor2 = Number(prompt("Escolha outro número: "))
let valor3 = Number(prompt("Escolha outro número: "))
let valor4 = Number(prompt("Escolha outro número: "))

let numeros = []

numeros[0] = valor1
numeros[1] = valor2
numeros[2] = valor3
numeros[3] = valor4

console.log(numeros.sort((a, b) => a - b))