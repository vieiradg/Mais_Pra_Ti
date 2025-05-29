const prompt = require('prompt-sync') ();

let peso = Number(prompt("Qual é o seu peso? "))
let altura = Number(prompt("Qual é sua altura? "))
let imc = peso / altura**2

if (imc <= 18.5) {
    console.log("Abaixo do peso")
} else if (imc > 18.5 && imc < 25) {
    console.log("Peso normal")
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso")
} else if (imc >= 30 && imc < 35) {
    console.log("Obesidade grau 1")
} else if (imc >= 35 && imc < 40) {
    console.log("Obesidade grau 2")
} else {
    console.log("Obesidade grau 3 (mórbida)")
}


console.log(`seu imc é: ${imc.toFixed(2)}`)