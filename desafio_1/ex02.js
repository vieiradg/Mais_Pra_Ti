const prompt = require('prompt-sync') ();

let idade = Number(prompt("Digite a sua idade: "))

let crianca
let adolescente
let adulto
let idoso

if (idade > 0 && idade <= 12) {
    console.log('Você é uma criança!')
} else if (idade > 12 && idade <= 17) {
    console.log('Você é um adolescente!')
} else if (idade > 17 && idade <= 59) {
    console.log('Você é um adulto!')
} else if (idade > 59) {
    console.log('Você é um idoso!')
} else {
    console.log('Idade inválida!')
}
