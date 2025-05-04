const prompt = require('prompt-sync') ();

let num = Number(prompt("Escreva um numero: "))

for (i = 0; i < 11; i++) {
    console.log(`${num}*${i}: `, num*i)
}